import { EXERCISES_C1 } from './exercises-c1'
import { EXERCISES_C2 } from './exercises-c2'
import { EXERCISES_C3 } from './exercises-c3'

export interface ExerciseEntry {
  id: string
  chapter: 1 | 2 | 3
  chapterLabel: string
  number: number
  title: string
  page: number
  upToOrderIndex: number
  statementTex: string
  hintTex: string
  correctionTex: string
}

export const EXERCISES: Record<string, ExerciseEntry> = {
  ...EXERCISES_C1,
  ...EXERCISES_C2,
  ...EXERCISES_C3
}
