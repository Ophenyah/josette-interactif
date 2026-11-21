<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { EXERCISES } from '../data/exercises'
import {
  formatBatchExerciseExport,
  type CorrectionDirectiveMode
} from '../utils/exercise-export'
import { initExerciseStore, useExerciseStore } from '../utils/exercise-store'

const props = defineProps<{
  chapter: 1 | 2 | 3 | '1' | '2' | '3'
}>()

const chapterNum = computed<1 | 2 | 3>(() => {
  const n = Number(props.chapter)
  if (n === 3) return 3
  if (n === 2) return 2
  return 1
})
const {
  trainingMode,
  getState,
  setTrainingMode,
  exportAllJson,
  importAllJson,
  getAllStatesSnapshot
} = useExerciseStore()

onMounted(() => {
  initExerciseStore()
})

const batchFormat = ref<'markdown' | 'latex'>('markdown')
const batchDirective = ref<CorrectionDirectiveMode>('socratic')
const statusMsg = ref('')
const fileInputRef = ref<HTMLInputElement | null>(null)

const chapterExercises = computed(() =>
  Object.values(EXERCISES)
    .filter((e) => e.chapter === chapterNum.value)
    .sort((a, b) => a.number - b.number)
)

const counts = computed(() => {
  let done = 0
  let ready = 0
  let draft = 0
  for (const exo of chapterExercises.value) {
    const st = getState(exo.id)
    if (st.status === 'done') done++
    else if (st.status === 'ready') ready++
    else if (st.status === 'draft' || st.draft.trim().length > 0) draft++
  }
  return { total: chapterExercises.value.length, done, ready, draft }
})

function notify(msg: string) {
  statusMsg.value = msg
  setTimeout(() => {
    statusMsg.value = ''
  }, 4500)
}

async function copyBatchExport() {
  const res = formatBatchExerciseExport(chapterNum.value, getAllStatesSnapshot(), {
    format: batchFormat.value,
    directive: batchDirective.value
  })
  if (res.count === 0) {
    notify('Aucun exercice rédigé ou « Prêt à corriger » à exporter.')
    return
  }
  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(res.content)
    }
    notify(`${res.count} exercice(s) copié(s) pour un agent ✔`)
  } catch {
    downloadText(
      res.content,
      `josette-chap${chapterNum.value}-lot.${batchFormat.value === 'latex' ? 'tex' : 'md'}`
    )
  }
}

function downloadBatchExport() {
  const res = formatBatchExerciseExport(chapterNum.value, getAllStatesSnapshot(), {
    format: batchFormat.value,
    directive: batchDirective.value
  })
  if (res.count === 0) {
    notify('Aucun exercice rédigé ou « Prêt à corriger » à exporter.')
    return
  }
  const ext = batchFormat.value === 'latex' ? 'tex' : 'md'
  downloadText(res.content, `josette-chap${chapterNum.value}-lot.${ext}`)
  notify(`Lot de ${res.count} exercice(s) téléchargé (.${ext}) ✔`)
}

function downloadText(content: string, filename: string) {
  if (typeof document === 'undefined') return
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

function downloadBackupJson() {
  const json = exportAllJson()
  downloadText(json, 'josette-v2-sauvegarde.json')
  notify('Sauvegarde JSON exportée ✔')
}

function triggerImportJson() {
  fileInputRef.value?.click()
}

async function onFileSelected(e: Event) {
  const input = e.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return
  try {
    const text = await file.text()
    const restored = importAllJson(text)
    notify(`${restored} fiche(s) restaurée(s) depuis la sauvegarde ✔`)
  } catch (err) {
    notify(err instanceof Error ? err.message : 'Erreur d’import JSON.')
  } finally {
    input.value = ''
  }
}
</script>

<template>
  <section class="jc-lab-card" aria-label="Tableau de bord des exercices">
    <header class="jc-card-header">
      <div class="jc-card-title">
        Atelier Chapitre {{ chapterNum }} — {{ counts.total }} exercice(s)
      </div>
      <label style="display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.85rem; cursor: pointer;">
        <input
          type="checkbox"
          :checked="trainingMode"
          @change="setTrainingMode(($event.target as HTMLInputElement).checked)"
        />
        Mode entraînement (masquer les corrections)
      </label>
    </header>
    <div class="jc-card-body">
      <div style="display: flex; flex-wrap: wrap; gap: 0.8rem; font-size: 0.88rem; margin-bottom: 0.75rem;">
        <span><strong>Corrigés :</strong> {{ counts.done }}</span>
        <span><strong>Prêts à corriger :</strong> {{ counts.ready }}</span>
        <span><strong>Brouillons :</strong> {{ counts.draft }}</span>
      </div>

      <div class="jc-controls">
        <span style="font-size: 0.84rem; font-weight: 700;">Export par lot (rédigés / prêts) :</span>
        <select v-model="batchFormat" class="jc-select" aria-label="Format lot">
          <option value="markdown">Markdown (.md)</option>
          <option value="latex">LaTeX (.tex)</option>
        </select>
        <select v-model="batchDirective" class="jc-select" aria-label="Consigne lot">
          <option value="socratic">Guidage socratique</option>
          <option value="rigorous">Correction rigoureuse</option>
        </select>
        <button type="button" class="jc-btn primary" @click="copyBatchExport">
          Copier le lot
        </button>
        <button type="button" class="jc-btn" @click="downloadBatchExport">
          Télécharger le lot
        </button>
        <button type="button" class="jc-btn" @click="downloadBackupJson">
          Sauvegarde JSON
        </button>
        <button type="button" class="jc-btn" @click="triggerImportJson">
          Restaurer JSON
        </button>
        <input
          ref="fileInputRef"
          type="file"
          accept="application/json,.json"
          style="display: none"
          @change="onFileSelected"
        />
      </div>

      <div v-if="statusMsg" class="jc-toast" role="status">{{ statusMsg }}</div>
    </div>
  </section>
</template>
