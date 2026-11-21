import { reactive, ref } from 'vue'
import {
  DEFAULT_USER_STATE,
  parseBackup,
  serializeBackup,
  type CorrectionDirectiveMode,
  type ExerciseExportOptions,
  type ExerciseStatus,
  type ExerciseUserState
} from './exercise-export'

const STORAGE_KEY = 'josette-v2-exercises-state'
const TRAINING_KEY = 'josette-v2-training-mode'

const statesById = reactive<Record<string, ExerciseUserState>>({})
const trainingMode = ref<boolean>(false)
let initialized = false

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof localStorage !== 'undefined'
}

export function initExerciseStore(): void {
  if (initialized || !isBrowser()) return
  initialized = true
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw) as Record<string, ExerciseUserState>
      for (const [id, st] of Object.entries(parsed)) {
        statesById[id] = {
          status: st.status ?? 'todo',
          draft: st.draft ?? '',
          doubts: st.doubts ?? '',
          updatedAt: st.updatedAt ?? ''
        }
      }
    }
    const rawTraining = localStorage.getItem(TRAINING_KEY)
    if (rawTraining !== null) {
      trainingMode.value = rawTraining === 'true'
    }
  } catch {
    // Ignore corrupted storage
  }
}

function persistStates(): void {
  if (!isBrowser()) return
  try {
    const plain: Record<string, ExerciseUserState> = {}
    for (const [k, v] of Object.entries(statesById)) {
      plain[k] = { ...v }
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(plain))
  } catch {
    // Ignore quota errors
  }
}

export function useExerciseStore() {
  function getState(id: string): ExerciseUserState {
    if (!statesById[id]) {
      statesById[id] = { ...DEFAULT_USER_STATE }
    }
    return statesById[id]
  }

  function updateState(
    id: string,
    patch: Partial<Pick<ExerciseUserState, 'status' | 'draft' | 'doubts'>>
  ): void {
    const current = getState(id)
    const nextDraft = patch.draft !== undefined ? patch.draft : current.draft
    let nextStatus: ExerciseStatus =
      patch.status !== undefined ? patch.status : current.status
    if (
      patch.status === undefined &&
      patch.draft !== undefined &&
      current.status === 'todo' &&
      nextDraft.trim().length > 0
    ) {
      nextStatus = 'draft'
    }
    statesById[id] = {
      status: nextStatus,
      draft: nextDraft,
      doubts: patch.doubts !== undefined ? patch.doubts : current.doubts,
      updatedAt: new Date().toISOString()
    }
    persistStates()
  }

  function setTrainingMode(val: boolean): void {
    trainingMode.value = val
    if (isBrowser()) {
      try {
        localStorage.setItem(TRAINING_KEY, String(val))
      } catch {
        // Ignore
      }
    }
  }

  function exportAllJson(): string {
    const plain: Record<string, ExerciseUserState> = {}
    for (const [k, v] of Object.entries(statesById)) {
      plain[k] = { ...v }
    }
    return serializeBackup(plain, trainingMode.value)
  }

  function importAllJson(jsonText: string): number {
    const payload = parseBackup(jsonText)
    for (const key of Object.keys(statesById)) {
      delete statesById[key]
    }
    for (const [id, st] of Object.entries(payload.exercises)) {
      statesById[id] = { ...st }
    }
    setTrainingMode(payload.trainingMode)
    persistStates()
    return Object.keys(payload.exercises).length
  }

  function getAllStatesSnapshot(): Record<string, ExerciseUserState> {
    const out: Record<string, ExerciseUserState> = {}
    for (const [k, v] of Object.entries(statesById)) {
      out[k] = { ...v }
    }
    return out
  }

  return {
    statesById,
    trainingMode,
    getState,
    updateState,
    setTrainingMode,
    exportAllJson,
    importAllJson,
    getAllStatesSnapshot
  }
}

export type { CorrectionDirectiveMode, ExerciseExportOptions }
