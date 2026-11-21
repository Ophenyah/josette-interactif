<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { EXERCISES } from '../data/exercises'
import { renderSafeMarkdownMath } from '../math/katex-macros'
import {
  formatSingleExerciseExport,
  type CorrectionDirectiveMode
} from '../utils/exercise-export'
import { initExerciseStore, useExerciseStore, type ExerciseExportOptions } from '../utils/exercise-store'
import FoldNote from './FoldNote.vue'

const props = defineProps<{
  id: string
}>()

const { trainingMode, getState, updateState } = useExerciseStore()
onMounted(() => {
  initExerciseStore()
})

const exo = computed(() => EXERCISES[props.id])
const userState = computed(() => getState(props.id))

const exportFormat = ref<'markdown' | 'latex'>('markdown')
const exportDirective = ref<CorrectionDirectiveMode>('socratic')
const toastMsg = ref('')
const exportedPreview = ref('')
const textareaRef = ref<HTMLTextAreaElement | null>(null)

const TOOLBAR_SYMBOLS: Array<[string, string]> = [
  ['∀', '\\forall '],
  ['∃', '\\exists '],
  ['∈', '\\in '],
  ['∉', '\\notin '],
  ['⩽', '\\leqslant '],
  ['≃', '\\simeq '],
  ['∘', '\\circ '],
  ['⟨·⟩', '\\langle  \\rangle'],
  ['ℤ/(n)', '\\Zn{n}'],
  ['Ker', '\\Ker '],
  ['Im', '\\Im '],
  ['Matrice', '\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}'],
  ['R', '\\mathscr{R}']
]

const statementHtml = computed(() =>
  exo.value ? renderSafeMarkdownMath(exo.value.statementTex) : ''
)
const hintHtml = computed(() =>
  exo.value ? renderSafeMarkdownMath(exo.value.hintTex) : ''
)
const correctionHtml = computed(() =>
  exo.value ? renderSafeMarkdownMath(exo.value.correctionTex) : ''
)
const previewHtml = computed(() => {
  const txt = userState.value.draft.trim()
  if (!txt) {
    return '<em style="color: var(--jc-text-muted); font-size: 0.86rem;">Aperçu KaTeX en direct de votre rédaction…</em>'
  }
  return renderSafeMarkdownMath(userState.value.draft, { throwOnMathError: false })
})

function onDraftInput(e: Event) {
  const target = e.target as HTMLTextAreaElement
  updateState(props.id, { draft: target.value })
}

function onDoubtsInput(e: Event) {
  const target = e.target as HTMLInputElement
  updateState(props.id, { doubts: target.value })
}

function onStatusChange(e: Event) {
  const target = e.target as HTMLSelectElement
  updateState(props.id, {
    status: target.value as 'todo' | 'draft' | 'ready' | 'done'
  })
}

function insertSymbol(snippet: string) {
  const ta = textareaRef.value
  const current = userState.value.draft
  if (!ta) {
    updateState(props.id, { draft: current + snippet })
    return
  }
  const start = ta.selectionStart ?? current.length
  const end = ta.selectionEnd ?? current.length
  const next = current.slice(0, start) + snippet + current.slice(end)
  updateState(props.id, { draft: next })
  requestAnimationFrame(() => {
    ta.focus()
    const pos = start + snippet.length
    ta.setSelectionRange(pos, pos)
  })
}

function buildExport(): string {
  if (!exo.value) return ''
  const opts: ExerciseExportOptions = {
    format: exportFormat.value,
    directive: exportDirective.value
  }
  return formatSingleExerciseExport(exo.value, userState.value, opts)
}

async function copyForAgent() {
  const text = buildExport()
  exportedPreview.value = text
  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(text)
    }
    toastMsg.value = 'Export copié dans le presse-papiers ✔'
  } catch {
    toastMsg.value = 'Export prêt ci-dessous (presse-papiers indisponible).'
  }
  setTimeout(() => {
    toastMsg.value = ''
  }, 4000)
}

function downloadForAgent() {
  const text = buildExport()
  exportedPreview.value = text
  if (typeof document === 'undefined') return
  const ext = exportFormat.value === 'latex' ? 'tex' : 'md'
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `josette-${props.id}-export-correcteur.${ext}`
  a.click()
  URL.revokeObjectURL(url)
  toastMsg.value = `Fichier .${ext} téléchargé ✔`
  setTimeout(() => {
    toastMsg.value = ''
  }, 4000)
}
</script>

<template>
  <article v-if="exo" :id="`exo-${id}`" class="jc-exo-card" :data-exo-id="id">
    <header class="jc-card-header">
      <div class="jc-card-title">
        Exercice {{ exo.number }} — {{ exo.title }}
        <span class="jc-page-ref">p. {{ exo.page }}</span>
      </div>
      <div style="display: flex; align-items: center; gap: 0.45rem;">
        <label :for="`status-${id}`" style="font-size: 0.82rem; font-weight: 600;">Statut :</label>
        <select
          :id="`status-${id}`"
          class="jc-select"
          :value="userState.status"
          @change="onStatusChange"
        >
          <option value="todo">À faire</option>
          <option value="draft">Brouillon</option>
          <option value="ready">Prêt à corriger</option>
          <option value="done">Corrigé</option>
        </select>
      </div>
    </header>

    <div class="jc-card-body">
      <div class="jc-exo-statement" v-html="statementHtml" />

      <div style="font-size: 0.88rem; font-weight: 700; color: var(--jc-navy); margin-bottom: 0.35rem;">
        Ma rédaction (Markdown + LaTeX, sauvegarde automatique) :
      </div>

      <div class="jc-exo-toolbar" role="toolbar" aria-label="Symboles LaTeX rapides">
        <button
          v-for="[lbl, ins] in TOOLBAR_SYMBOLS"
          :key="lbl"
          type="button"
          class="jc-sym-btn"
          @click="insertSymbol(ins)"
        >
          {{ lbl }}
        </button>
      </div>

      <textarea
        ref="textareaRef"
        class="jc-textarea"
        :aria-label="`Rédaction pour l'exercice ${exo.number}`"
        :value="userState.draft"
        placeholder="Rédigez votre démonstration en Markdown + LaTeX (ex. Soient $x, y \in G$...)"
        @input="onDraftInput"
      />

      <div class="jc-preview-box" aria-label="Aperçu KaTeX en direct" v-html="previewHtml" />

      <div style="margin-top: 0.65rem;">
        <label
          :for="`doubts-${id}`"
          style="display: block; font-size: 0.84rem; font-weight: 600; margin-bottom: 0.25rem;"
        >
          Points de doute ou questions pour le correcteur (facultatif) :
        </label>
        <input
          :id="`doubts-${id}`"
          type="text"
          class="jc-doubts-input"
          :value="userState.doubts"
          placeholder="Ex. Je ne suis pas sûr de la justification pour le neutre à gauche…"
          @input="onDoubtsInput"
        />
      </div>

      <div class="jc-export-bar">
        <span style="font-size: 0.84rem; font-weight: 700; color: var(--jc-navy);">
          Export vers agent correcteur :
        </span>
        <select v-model="exportFormat" class="jc-select" aria-label="Format d'export">
          <option value="markdown">Markdown (.md)</option>
          <option value="latex">LaTeX (.tex)</option>
        </select>
        <select v-model="exportDirective" class="jc-select" aria-label="Consigne de correction">
          <option value="socratic">Guidage socratique (sans solution)</option>
          <option value="rigorous">Correction rigoureuse ligne par ligne</option>
        </select>
        <button type="button" class="jc-btn primary" @click="copyForAgent">
          Copier pour un agent
        </button>
        <button type="button" class="jc-btn" @click="downloadForAgent">
          Télécharger
        </button>
        <span v-if="toastMsg" class="jc-toast" role="status">{{ toastMsg }}</span>
      </div>

      <details v-if="exportedPreview" style="margin-top: 0.6rem;">
        <summary style="cursor: pointer; font-size: 0.84rem; color: var(--jc-text-muted);">
          Aperçu du paquet exporté ({{ exportFormat }})
        </summary>
        <pre
          class="jc-preview-box"
          style="white-space: pre-wrap; font-size: 0.8rem; max-height: 260px; overflow-y: auto;"
        >{{ exportedPreview }}</pre>
      </details>

      <FoldNote v-if="exo.hintTex.trim().length > 0" kind="indice" :title="`Indice — Exercice ${exo.number}`">
        <div v-html="hintHtml" />
      </FoldNote>

      <FoldNote
        v-if="!trainingMode && exo.correctionTex.trim().length > 0"
        kind="correction"
        :title="`Correction détaillée — Exercice ${exo.number}`"
      >
        <div v-html="correctionHtml" />
      </FoldNote>
      <p
        v-else-if="trainingMode && exo.correctionTex.trim().length > 0"
        style="font-size: 0.84rem; color: var(--jc-text-muted); font-style: italic; margin-top: 0.6rem;"
      >
        Mode entraînement activé : la correction est masquée.
      </p>
    </div>
  </article>
</template>
