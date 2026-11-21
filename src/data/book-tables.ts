import {
  cyclicGroup,
  fromTable,
  kleinGroup,
  symmetricGroup,
  type FiniteGroup
} from '../math/groups'
import { BOOK_TABLES_T1, S3_NOTATIONS } from './book-tables-t1'

export { BOOK_TABLES_T1, S3_NOTATIONS }

export const PILOT_CATALOG: FiniteGroup[] = [
  cyclicGroup(2),
  cyclicGroup(3),
  cyclicGroup(4),
  kleinGroup(),
  symmetricGroup(3)
]

// Exemple de loi non associative (repris aussi dans la table (12) d'ordre 5)
export const NON_ASSOC_SAMPLE: FiniteGroup = fromTable({
  id: 'sub-z3',
  name: 'Soustraction modulo 3 (non associatif)',
  texName: '(\\Zn{3}, -)',
  opSymbol: '−',
  opTex: '-',
  elements: ['0̄', '1̄', '2̄'],
  elementTex: ['\\overline{0}', '\\overline{1}', '\\overline{2}'],
  neutralIndex: 0,
  table: [
    [0, 2, 1],
    [1, 0, 2],
    [2, 1, 0]
  ]
})
