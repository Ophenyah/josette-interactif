import { REGISTRY, type RegistryEntry } from '../data/registry'
import { EXERCISES, type ExerciseEntry } from '../data/exercises'

export type ExerciseStatus = 'todo' | 'draft' | 'ready' | 'done'

export type CorrectionDirectiveMode = 'socratic' | 'rigorous'

export interface ExerciseUserState {
  status: ExerciseStatus
  draft: string
  doubts: string
  updatedAt: string
}

export interface ExerciseExportOptions {
  format: 'markdown' | 'latex'
  directive: CorrectionDirectiveMode
}

export interface BackupPayload {
  version: 2
  exportedAt: string
  trainingMode: boolean
  exercises: Record<string, ExerciseUserState>
}

export const DEFAULT_USER_STATE: ExerciseUserState = {
  status: 'todo',
  draft: '',
  doubts: '',
  updatedAt: ''
}

export function getEstablishedResults(upToOrderIndex: number): RegistryEntry[] {
  return Object.values(REGISTRY)
    .filter((entry) => entry.orderIndex <= upToOrderIndex)
    .sort((a, b) => a.orderIndex - b.orderIndex)
}

export function formatDirectiveText(mode: CorrectionDirectiveMode): string {
  if (mode === 'socratic') {
    return (
      'Consigne de correction (guidage socratique) : vérifie rigoureusement la rédaction ci-dessus étape par étape. Si la preuve est incomplète ou contient une erreur logique, signale précisément où cela bloque et pose une question ou donne un indice ciblé **sans révéler la solution complète**.'
    )
  }
  return (
    'Consigne de correction (correction rigoureuse ligne par ligne, niveau prépa 1re année) : corrige cette copie ligne par ligne en vérifiant chaque quantificateur, hypothèse d’associativité/commutativité et justification, propose les améliorations de rédaction attendues en prépa, puis donne une version rédigée propre si nécessaire.'
  )
}

export function formatSingleExerciseExport(
  exo: ExerciseEntry,
  state: ExerciseUserState,
  options: ExerciseExportOptions
): string {
  const directiveText = formatDirectiveText(options.directive)
  const draft = state.draft.trim() || '(Aucune rédaction saisie pour le moment.)'
  const doubts = state.doubts.trim() || '(Aucun point de doute particulier signalé.)'

  if (options.format === 'latex') {
    return [
      `% === EXPORT POUR AGENT CORRECTEUR ===`,
      `\\section*{Josette Calais --- \\textit{Éléments de théorie des groupes} (1984) --- ${exo.chapterLabel}, Exercice ${exo.number} (p.~${exo.page})}`,
      '',
      `\\subsection*{1. Contexte de l'exercice}`,
      `\\begin{itemize}`,
      `  \\item \\textbf{Ouvrage} : Josette Calais, \\textit{Éléments de théorie des groupes} (PUF, 1984)`,
      `  \\item \\textbf{Chapitre} : ${exo.chapterLabel}`,
      `  \\item \\textbf{Exercice} : Exercice ${exo.number} (p.~${exo.page})`,
      `\\end{itemize}`,
      '',
      `\\subsection*{2. Énoncé complet}`,
      exo.statementTex,
      '',
      `\\subsection*{3. Rédaction de l'étudiant}`,
      draft,
      '',
      `\\subsection*{4. Points de doute / questions ciblées}`,
      doubts,
      '',
      `\\subsection*{5. Consigne de correction}`,
      directiveText,
      ''
    ].join('\n')
  }

  // Markdown + LaTeX
  return [
    `# Export pour agent correcteur — ${exo.chapterLabel}, Exercice ${exo.number} (p. ${exo.page})`,
    '',
    `## 1. Contexte de l'exercice`,
    `- **Ouvrage** : Josette Calais, *Éléments de théorie des groupes* (PUF, 1984)`,
    `- **Chapitre** : ${exo.chapterLabel}`,
    `- **Exercice** : Exercice ${exo.number} (p. ${exo.page})`,
    '',
    `## 2. Énoncé complet`,
    exo.statementTex,
    '',
    `## 3. Rédaction de l'étudiant`,
    draft,
    '',
    `## 4. Points de doute / questions ciblées`,
    doubts,
    '',
    `## 5. Consigne de correction`,
    directiveText,
    ''
  ].join('\n')
}

export function shouldIncludeInBatch(state: ExerciseUserState): boolean {
  return state.draft.trim().length > 0 || state.status === 'ready'
}

export function formatBatchExerciseExport(
  chapter: 1 | 2 | 3,
  statesById: Record<string, ExerciseUserState>,
  options: ExerciseExportOptions
): { content: string; count: number } {
  const candidates = Object.values(EXERCISES)
    .filter((exo) => exo.chapter === chapter)
    .sort((a, b) => a.number - b.number)
    .filter((exo) =>
      shouldIncludeInBatch(statesById[exo.id] ?? DEFAULT_USER_STATE)
    )

  if (candidates.length === 0) {
    return { content: '', count: 0 }
  }

  const separator =
    options.format === 'latex' ? '\n\\bigskip\\hrule\\bigskip\n\n' : '\n---\n\n'

  const header =
    options.format === 'latex'
      ? `% Export par lot --- Chapitre ${chapter} (${candidates.length} exercice(s))\n\n`
      : `# Export par lot — Chapitre ${chapter} (${candidates.length} exercice(s) retenu(s))\n\n`

  const body = candidates
    .map((exo) =>
      formatSingleExerciseExport(
        exo,
        statesById[exo.id] ?? DEFAULT_USER_STATE,
        options
      )
    )
    .join(separator)

  return { content: header + body, count: candidates.length }
}

export function serializeBackup(
  exercises: Record<string, ExerciseUserState>,
  trainingMode: boolean
): string {
  const payload: BackupPayload = {
    version: 2,
    exportedAt: new Date().toISOString(),
    trainingMode,
    exercises
  }
  return JSON.stringify(payload, null, 2)
}

export function parseBackup(jsonText: string): BackupPayload {
  const parsed = JSON.parse(jsonText) as Partial<BackupPayload>
  if (!parsed || parsed.version !== 2 || typeof parsed.exercises !== 'object' || parsed.exercises === null) {
    throw new Error('Format de sauvegarde JSON invalide (version 2 attendue).')
  }
  const cleanExercises: Record<string, ExerciseUserState> = {}
  const allowedStatuses = new Set<ExerciseStatus>(['todo', 'draft', 'ready', 'done'])
  for (const [id, st] of Object.entries(parsed.exercises)) {
    if (!st || typeof st !== 'object') continue
    const rawStatus = (st as ExerciseUserState).status
    cleanExercises[id] = {
      status: allowedStatuses.has(rawStatus) ? rawStatus : 'todo',
      draft: typeof st.draft === 'string' ? st.draft : '',
      doubts: typeof st.doubts === 'string' ? st.doubts : '',
      updatedAt: typeof st.updatedAt === 'string' ? st.updatedAt : ''
    }
  }
  return {
    version: 2,
    exportedAt: typeof parsed.exportedAt === 'string' ? parsed.exportedAt : '',
    trainingMode: Boolean(parsed.trainingMode),
    exercises: cleanExercises
  }
}
