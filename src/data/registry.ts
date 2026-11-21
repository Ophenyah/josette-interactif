import { REGISTRY_T1 } from './registry-t1'
import { REGISTRY_T2 } from './registry-t2'
import { REGISTRY_T3 } from './registry-t3'
import { REGISTRY_T5 } from './registry-t5'
import { REGISTRY_C3A } from './registry-c3a'
import { REGISTRY_C3B } from './registry-c3b'

export type RegistryKind =
  | 'def'
  | 'not'
  | 'thm'
  | 'prop'
  | 'cor'
  | 'lem'
  | 'rem'
  | 'ex'
  | 'eq'
  | 'table'

export interface RegistryEntry {
  id: string
  label: string
  shortLabel: string
  kind: RegistryKind
  chapter: 1 | 2 | 3
  section: string
  page: number
  route: string
  anchor: string
  orderIndex: number
  summaryTex: string
  shortSummaryLatex?: string
  dependsOn: string[]
}

export const REGISTRY: Record<string, RegistryEntry> = {
  ...REGISTRY_T1,
  ...REGISTRY_T2,
  ...REGISTRY_T3,
  ...REGISTRY_T5,
  ...REGISTRY_C3A,
  ...REGISTRY_C3B
}
