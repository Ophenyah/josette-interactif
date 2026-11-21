import { describe, expect, it } from 'vitest'
import { EXERCISES } from '../src/data/exercises'
import {
  formatBatchExerciseExport,
  formatSingleExerciseExport,
  parseBackup,
  serializeBackup
} from '../src/utils/exercise-export'

describe('Atelier d’exercices et export vers agent correcteur', () => {
  it('génère les 5 sections avec uniquement le contexte, l’énoncé et la résolution (sans la liste des théorèmes)', () => {
    const exo = EXERCISES['c1-e03']

    const md = formatSingleExerciseExport(
      exo,
      {
        status: 'ready',
        draft: 'Soient $x < y$ et $\\frac{1}{2} \\in \\Z$.',
        doubts: 'Vérifier le neutre à gauche.',
        updatedAt: '2026-11-21T13:00:00Z'
      },
      { format: 'markdown', directive: 'socratic' }
    )

    const idx1 = md.indexOf('## 1. Contexte de l\'exercice')
    const idx2 = md.indexOf('## 2. Énoncé complet')
    const idx3 = md.indexOf("## 3. Rédaction de l'étudiant")
    const idx4 = md.indexOf('## 4. Points de doute / questions ciblées')
    const idx5 = md.indexOf('## 5. Consigne de correction')
    expect(idx1).toBeGreaterThan(-1)
    expect(idx2).toBeGreaterThan(idx1)
    expect(idx3).toBeGreaterThan(idx2)
    expect(idx4).toBeGreaterThan(idx3)
    expect(idx5).toBeGreaterThan(idx4)
    expect(md).not.toContain('Résultats déjà établis')
    expect(md).not.toContain('Définition (1.3)')
    expect(md).toContain('Démontrer que $(G, \\cdot)$ est un groupe')
    expect(md).toContain('Soient $x < y$')
    expect(md).toContain('sans révéler la solution complète')
  })

  it('supporte aussi le format LaTeX et le filtrage par lot (y compris sans liste de théorèmes)', () => {
    const emptyBatch = formatBatchExerciseExport(
      1,
      { 'c1-e03': { status: 'todo', draft: '', doubts: '', updatedAt: '' } },
      { format: 'latex', directive: 'rigorous' }
    )
    expect(emptyBatch.count).toBe(0)

    const readyBatch = formatBatchExerciseExport(
      1,
      {
        'c1-e03': {
          status: 'ready',
          draft: 'Preuve complète.',
          doubts: '',
          updatedAt: ''
        }
      },
      { format: 'latex', directive: 'rigorous' }
    )
    expect(readyBatch.count).toBe(1)
    expect(readyBatch.content).toContain('\\section*{Josette Calais')
    expect(readyBatch.content).toContain('Preuve complète.')
    expect(readyBatch.content).toContain('corrige cette copie ligne par ligne')
    expect(readyBatch.content).not.toContain('Résultats déjà établis')
    expect(readyBatch.content).not.toContain('Définition (1.3)')
  })

  it('gère aussi l’export du Chapitre II sans lister les théorèmes', () => {
    const exo2 = EXERCISES['c2-e01']
    const md2 = formatSingleExerciseExport(
      exo2,
      {
        status: 'draft',
        draft: 'Soit $x \\in H \\cap K$.',
        doubts: '',
        updatedAt: ''
      },
      { format: 'markdown', directive: 'rigorous' }
    )
    expect(md2).toContain('Exercice 1 (p. 84)')
    expect(md2).toContain('Soit $x \\in H \\cap K$.')
    expect(md2).not.toContain('Résultats déjà établis')
    expect(md2).not.toContain('Théorème (2.9)')
  })

  it('sérialise et restaure une sauvegarde JSON complète', () => {
    const json = serializeBackup(
      {
        'c1-e03': {
          status: 'draft',
          draft: 'Brouillon test',
          doubts: 'Un doute',
          updatedAt: '2026-11-21T13:10:00Z'
        }
      },
      true
    )
    const parsed = parseBackup(json)
    expect(parsed.trainingMode).toBe(true)
    expect(parsed.exercises['c1-e03'].draft).toBe('Brouillon test')
  })
})
