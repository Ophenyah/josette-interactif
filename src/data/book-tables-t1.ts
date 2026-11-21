import { fromTable, type FiniteGroup } from '../math/groups'

/**
 * Permutations de S_3 selon les notations (1.15) de Josette Calais (p. 26),
 * représentées en tableaux indexés à partir de 0 (0, 1, 2 <-> 1, 2, 3)
 * pour la vérification automatisée avec composePerm.
 */
export const S3_NOTATIONS: Record<
  'e' | 'sigma1' | 'sigma2' | 'tau1' | 'tau2' | 'tau3',
  number[]
> = {
  e: [0, 1, 2],
  sigma1: [1, 2, 0],
  sigma2: [2, 0, 1],
  tau1: [0, 2, 1],
  tau2: [2, 1, 0],
  tau3: [1, 0, 2]
}

/**
 * Tables finies transcrites fidèlement depuis les scans de I § 1 (pp. 17–29) :
 * - Exemple (1.18) (p. 28) : tables d'addition de Z/(2), Z/(3), Z/(4)
 * - Table (10) (p. 28) : table de multiplication de S_3
 * - Table (11) (p. 28) : groupe abélien d'ordre 4 (groupe de Klein)
 * - Table (12) (p. 29) : carré latin non associatif d'ordre 5
 *
 * (Dans la numérotation du livre, (1)–(9) et (2')–(3') sont des équations ;
 * les tables commencent à (10), précédées des trois tables non numérotées de (1.18).)
 */
export const BOOK_TABLES_T1 = {
  z2: fromTable({
    id: 't1-z2',
    name: 'Table de ℤ/(2) (+)',
    texName: '\\left(\\Zn{2}, +\\right)',
    opSymbol: '+',
    opTex: '+',
    elements: ['0̄', '1̄'],
    elementTex: ['\\overline{0}', '\\overline{1}'],
    neutralIndex: 0,
    table: [
      [0, 1],
      [1, 0]
    ]
  }),

  z3: fromTable({
    id: 't1-z3',
    name: 'Table de ℤ/(3) (+)',
    texName: '\\left(\\Zn{3}, +\\right)',
    opSymbol: '+',
    opTex: '+',
    elements: ['0̄', '1̄', '2̄'],
    elementTex: ['\\overline{0}', '\\overline{1}', '\\overline{2}'],
    neutralIndex: 0,
    table: [
      [0, 1, 2],
      [1, 2, 0],
      [2, 0, 1]
    ]
  }),

  z4: fromTable({
    id: 't1-z4',
    name: 'Table de ℤ/(4) (+)',
    texName: '\\left(\\Zn{4}, +\\right)',
    opSymbol: '+',
    opTex: '+',
    elements: ['0̄', '1̄', '2̄', '3̄'],
    elementTex: ['\\overline{0}', '\\overline{1}', '\\overline{2}', '\\overline{3}'],
    neutralIndex: 0,
    table: [
      [0, 1, 2, 3],
      [1, 2, 3, 0],
      [2, 3, 0, 1],
      [3, 0, 1, 2]
    ]
  }),

  table10: fromTable({
    id: 'table-10',
    name: 'Table (10) — Groupe symétrique S₃',
    texName: 'S_3',
    opSymbol: '∘',
    opTex: '\\circ',
    elements: ['e', 'σ₁', 'σ₂', 'τ₁', 'τ₂', 'τ₃'],
    elementTex: ['e', '\\sigma_1', '\\sigma_2', '\\tau_1', '\\tau_2', '\\tau_3'],
    neutralIndex: 0,
    table: [
      [0, 1, 2, 3, 4, 5],
      [1, 2, 0, 5, 3, 4],
      [2, 0, 1, 4, 5, 3],
      [3, 4, 5, 0, 1, 2],
      [4, 5, 3, 2, 0, 1],
      [5, 3, 4, 1, 2, 0]
    ]
  }),

  table11: fromTable({
    id: 'table-11',
    name: 'Table (11) — Groupe abélien d’ordre 4',
    texName: 'V',
    opSymbol: '×',
    opTex: '\\times',
    elements: ['e', 'a', 'b', 'c'],
    elementTex: ['e', 'a', 'b', 'c'],
    neutralIndex: 0,
    table: [
      [0, 1, 2, 3],
      [1, 0, 3, 2],
      [2, 3, 0, 1],
      [3, 2, 1, 0]
    ]
  }),

  table12: fromTable({
    id: 'table-12',
    name: 'Table (12) — Carré latin non associatif d’ordre 5',
    texName: '(\\text{Table } 12)',
    opSymbol: '×',
    opTex: '\\times',
    elements: ['e', 'a', 'b', 'c', 'd'],
    elementTex: ['e', 'a', 'b', 'c', 'd'],
    neutralIndex: 0,
    table: [
      [0, 1, 2, 3, 4],
      [1, 0, 4, 2, 3],
      [2, 3, 0, 4, 1],
      [3, 4, 1, 0, 2],
      [4, 2, 3, 1, 0]
    ]
  })
} satisfies Record<string, FiniteGroup>
