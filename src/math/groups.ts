export interface FiniteGroup {
  id: string
  name: string
  texName: string
  opSymbol: string
  opTex: string
  elements: string[]
  elementTex: string[]
  neutralIndex: number
  table: number[][]
}

export interface GroupAxiomReport {
  size: number
  validEntries: boolean
  neutralIndex: number | null
  leftNeutrals: number[]
  rightNeutrals: number[]
  isLatinSquare: boolean
  latinIssues: string[]
  inverses: (number | null)[]
  hasAllInverses: boolean
  isAssociative: boolean
  assocWitness: [number, number, number] | null
  isAbelian: boolean
  nonCommutingPair: [number, number] | null
  isGroup: boolean
}

export function checkGroupAxioms(table: number[][]): GroupAxiomReport {
  const n = table.length
  const validEntries =
    n > 0 &&
    table.every(
      (row) =>
        row.length === n &&
        row.every((v) => Number.isInteger(v) && v >= 0 && v < n)
    )

  if (!validEntries) {
    return {
      size: n,
      validEntries: false,
      neutralIndex: null,
      leftNeutrals: [],
      rightNeutrals: [],
      isLatinSquare: false,
      latinIssues: ['La table contient des valeurs hors bornes.'],
      inverses: [],
      hasAllInverses: false,
      isAssociative: false,
      assocWitness: null,
      isAbelian: false,
      nonCommutingPair: null,
      isGroup: false
    }
  }

  const leftNeutrals: number[] = []
  const rightNeutrals: number[] = []
  for (let e = 0; e < n; e++) {
    let isLeft = true
    let isRight = true
    for (let x = 0; x < n; x++) {
      if (table[e][x] !== x) isLeft = false
      if (table[x][e] !== x) isRight = false
    }
    if (isLeft) leftNeutrals.push(e)
    if (isRight) rightNeutrals.push(e)
  }

  const twoSided = leftNeutrals.filter((e) => rightNeutrals.includes(e))
  const neutralIndex = twoSided.length === 1 ? twoSided[0] : null

  const latinIssues: string[] = []
  for (let i = 0; i < n; i++) {
    const rowSeen = new Set<number>()
    const colSeen = new Set<number>()
    for (let j = 0; j < n; j++) {
      rowSeen.add(table[i][j])
      colSeen.add(table[j][i])
    }
    if (rowSeen.size !== n) {
      latinIssues.push(`Doublon ou manque sur la ligne ${i}`)
    }
    if (colSeen.size !== n) {
      latinIssues.push(`Doublon ou manque sur la colonne ${i}`)
    }
  }
  const isLatinSquare = latinIssues.length === 0

  const inverses: (number | null)[] = Array(n).fill(null)
  if (neutralIndex !== null) {
    for (let x = 0; x < n; x++) {
      for (let y = 0; y < n; y++) {
        if (table[x][y] === neutralIndex && table[y][x] === neutralIndex) {
          inverses[x] = y
          break
        }
      }
    }
  }
  const hasAllInverses =
    neutralIndex !== null && inverses.every((inv) => inv !== null)

  let assocWitness: [number, number, number] | null = null
  outerAssoc: for (let a = 0; a < n; a++) {
    for (let b = 0; b < n; b++) {
      for (let c = 0; c < n; c++) {
        const ab_c = table[table[a][b]][c]
        const a_bc = table[a][table[b][c]]
        if (ab_c !== a_bc) {
          assocWitness = [a, b, c]
          break outerAssoc
        }
      }
    }
  }
  const isAssociative = assocWitness === null

  let nonCommutingPair: [number, number] | null = null
  outerComm: for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (table[i][j] !== table[j][i]) {
        nonCommutingPair = [i, j]
        break outerComm
      }
    }
  }
  const isAbelian = nonCommutingPair === null

  const isGroup =
    validEntries && isAssociative && neutralIndex !== null && hasAllInverses

  return {
    size: n,
    validEntries,
    neutralIndex,
    leftNeutrals,
    rightNeutrals,
    isLatinSquare,
    latinIssues,
    inverses,
    hasAllInverses,
    isAssociative,
    assocWitness,
    isAbelian,
    nonCommutingPair,
    isGroup
  }
}

export function fromTable(params: {
  id: string
  name: string
  texName: string
  opSymbol?: string
  opTex?: string
  elements: string[]
  elementTex?: string[]
  neutralIndex?: number
  table: number[][]
}): FiniteGroup {
  return {
    id: params.id,
    name: params.name,
    texName: params.texName,
    opSymbol: params.opSymbol ?? '·',
    opTex: params.opTex ?? '\\cdot',
    elements: params.elements,
    elementTex: params.elementTex ?? params.elements,
    neutralIndex: params.neutralIndex ?? 0,
    table: params.table
  }
}

export function cyclicGroup(n: number): FiniteGroup {
  if (!Number.isInteger(n) || n < 1) {
    throw new Error(`Ordre invalide pour Z/(n) : ${n}`)
  }
  const elements = Array.from({ length: n }, (_, i) => `${i}̄`)
  const elementTex = Array.from({ length: n }, (_, i) => `\\overline{${i}}`)
  const table = Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => (i + j) % n)
  )
  return {
    id: `z${n}`,
    name: `ℤ/(${n}) (+)`,
    texName: `\\left(\\Zn{${n}}, +\\right)`,
    opSymbol: '+',
    opTex: '+',
    elements,
    elementTex,
    neutralIndex: 0,
    table
  }
}

export function kleinGroup(): FiniteGroup {
  return {
    id: 'v4',
    name: 'Groupe de Klein V',
    texName: 'V',
    opSymbol: '·',
    opTex: '\\cdot',
    elements: ['e', 'a', 'b', 'c'],
    elementTex: ['e', 'a', 'b', 'c'],
    neutralIndex: 0,
    table: [
      [0, 1, 2, 3],
      [1, 0, 3, 2],
      [2, 3, 0, 1],
      [3, 2, 1, 0]
    ]
  }
}

export function composePerm(a: number[], b: number[]): number[] {
  return b.map((v) => a[v])
}

function generatePerms(n: number): number[][] {
  if (n === 1) return [[0]]
  const result: number[][] = []
  const used = Array(n).fill(false)
  const cur: number[] = []
  function backtrack() {
    if (cur.length === n) {
      result.push([...cur])
      return
    }
    for (let i = 0; i < n; i++) {
      if (used[i]) continue
      used[i] = true
      cur.push(i)
      backtrack()
      cur.pop()
      used[i] = false
    }
  }
  backtrack()
  return result
}

export function symmetricGroup(n: number): FiniteGroup {
  if (!Number.isInteger(n) || n < 1 || n > 5) {
    throw new Error(`Ordre S_n non supporté dans le catalogue interactif : ${n}`)
  }

  if (n === 3) {
    // Ordre et notations exactes de Josette Calais (1.15) & table (10)
    const perms = [
      [0, 1, 2], // e
      [1, 2, 0], // sigma_1
      [2, 0, 1], // sigma_2
      [0, 2, 1], // tau_1
      [2, 1, 0], // tau_2
      [1, 0, 2]  // tau_3
    ]
    const key = (p: number[]) => p.join(',')
    const indexByKey = new Map(perms.map((p, idx) => [key(p), idx]))
    const table = perms.map((a) =>
      perms.map((b) => indexByKey.get(key(composePerm(a, b)))!)
    )
    return {
      id: 's3',
      name: 'Groupe symétrique S₃',
      texName: 'S_3',
      opSymbol: '∘',
      opTex: '\\circ',
      elements: ['e', 'σ₁', 'σ₂', 'τ₁', 'τ₂', 'τ₃'],
      elementTex: ['e', '\\sigma_1', '\\sigma_2', '\\tau_1', '\\tau_2', '\\tau_3'],
      neutralIndex: 0,
      table
    }
  }

  const perms = generatePerms(n)
  const key = (p: number[]) => p.join(',')
  const indexByKey = new Map(perms.map((p, idx) => [key(p), idx]))
  const table = perms.map((a) =>
    perms.map((b) => indexByKey.get(key(composePerm(a, b)))!)
  )
  const formatCycle = (p: number[]) => {
    const visited = Array(n).fill(false)
    const cycles: string[] = []
    for (let i = 0; i < n; i++) {
      if (visited[i] || p[i] === i) continue
      const cyc: number[] = []
      let cur = i
      while (!visited[cur]) {
        visited[cur] = true
        cyc.push(cur + 1)
        cur = p[cur]
      }
      cycles.push(`(${cyc.join(' ')})`)
    }
    return cycles.length === 0 ? 'e' : cycles.join('')
  }
  const labels = perms.map(formatCycle)
  return {
    id: `s${n}`,
    name: `Groupe symétrique S${n}`,
    texName: `S_${n}`,
    opSymbol: '∘',
    opTex: '\\circ',
    elements: labels,
    elementTex: labels,
    neutralIndex: 0,
    table
  }
}

export function elementOrder(group: FiniteGroup, idx: number): number | null {
  const n = group.elements.length
  let cur = group.neutralIndex
  for (let k = 1; k <= n; k++) {
    cur = group.table[cur][idx]
    if (cur === group.neutralIndex) return k
  }
  return null
}

export function center(group: FiniteGroup): number[] {
  const n = group.elements.length
  const res: number[] = []
  for (let i = 0; i < n; i++) {
    let commutesAll = true
    for (let j = 0; j < n; j++) {
      if (group.table[i][j] !== group.table[j][i]) {
        commutesAll = false
        break
      }
    }
    if (commutesAll) res.push(i)
  }
  return res
}

// ---------------------------------------------------------------------------
// Utilitaires internes (purs, sans accès DOM)
// ---------------------------------------------------------------------------

function gcd(a: number, b: number): number {
  let x = Math.abs(a)
  let y = Math.abs(b)
  while (y !== 0) {
    const r = x % y
    x = y
    y = r
  }
  return x
}

const SUPERSCRIPTS: Record<string, string> = {
  '0': '⁰',
  '1': '¹',
  '2': '²',
  '3': '³',
  '4': '⁴',
  '5': '⁵',
  '6': '⁶',
  '7': '⁷',
  '8': '⁸',
  '9': '⁹'
}

const SUBSCRIPTS: Record<string, string> = {
  '0': '₀',
  '1': '₁',
  '2': '₂',
  '3': '₃',
  '4': '₄',
  '5': '₅',
  '6': '₆',
  '7': '₇',
  '8': '₈',
  '9': '₉'
}

function toSuperscript(n: number): string {
  return String(n)
    .split('')
    .map((d) => SUPERSCRIPTS[d] ?? d)
    .join('')
}

function toSubscript(n: number): string {
  return String(n)
    .split('')
    .map((d) => SUBSCRIPTS[d] ?? d)
    .join('')
}

function assertValidIndex(idx: number, size: number, context: string): void {
  if (!Number.isInteger(idx) || idx < 0 || idx >= size) {
    throw new Error(`Indice hors bornes dans ${context} : ${idx} (taille ${size})`)
  }
}

function uniqueSortedIndices(indices: readonly number[], size: number, context: string): number[] {
  const seen = new Set<number>()
  for (const idx of indices) {
    assertValidIndex(idx, size, context)
    seen.add(idx)
  }
  return Array.from(seen).sort((a, b) => a - b)
}

function compareLex(a: readonly number[], b: readonly number[]): number {
  const len = Math.min(a.length, b.length)
  for (let i = 0; i < len; i++) {
    if (a[i] !== b[i]) return a[i] - b[i]
  }
  return a.length - b.length
}

function isSubsetSorted(sub: readonly number[], supSet: Set<number>): boolean {
  for (const x of sub) {
    if (!supSet.has(x)) return false
  }
  return true
}

function setsEqual(a: Set<number>, b: Set<number>): boolean {
  if (a.size !== b.size) return false
  for (const x of a) {
    if (!b.has(x)) return false
  }
  return true
}

export function isSubgroup(group: FiniteGroup, candidate: readonly number[]): boolean {
  const n = group.elements.length
  if (n === 0 || candidate.length === 0) return false
  const elems = uniqueSortedIndices(candidate, n, 'isSubgroup')
  const elemSet = new Set(elems)
  if (!elemSet.has(group.neutralIndex)) return false

  for (const a of elems) {
    let hasInverse = false
    for (const b of elems) {
      const ab = group.table[a][b]
      if (!elemSet.has(ab)) return false
      if (ab === group.neutralIndex && group.table[b][a] === group.neutralIndex) {
        hasInverse = true
      }
    }
    if (!hasInverse) return false
  }
  return true
}

// ---------------------------------------------------------------------------
// Constructeurs supplémentaires
// ---------------------------------------------------------------------------

export function unitsModN(n: number): FiniteGroup {
  if (!Number.isInteger(n) || n < 2) {
    throw new Error(`Module invalide pour (Z/nZ)× : ${n}`)
  }
  const units: number[] = []
  for (let k = 1; k < n; k++) {
    if (gcd(k, n) === 1) units.push(k)
  }
  const indexByVal = new Map<number, number>(units.map((u, idx) => [u, idx]))
  const table = units.map((a) =>
    units.map((b) => indexByVal.get((a * b) % n)!)
  )
  return {
    id: `u${n}`,
    name: `(ℤ/(${n}))×`,
    texName: `\\left(\\Zn{${n}}\\right)^{\\times}`,
    opSymbol: '×',
    opTex: '\\times',
    elements: units.map((k) => `${k}̄`),
    elementTex: units.map((k) => `\\overline{${k}}`),
    neutralIndex: 0,
    table
  }
}

export function dihedralGroup(n: number): FiniteGroup {
  if (!Number.isInteger(n) || n < 3) {
    throw new Error(`Degré invalide pour D_n (attendu n >= 3) : ${n}`)
  }
  const order = 2 * n
  const mod = (x: number) => ((x % n) + n) % n

  const elements: string[] = []
  const elementTex: string[] = []
  for (let a = 0; a < n; a++) {
    if (a === 0) {
      elements.push('e')
      elementTex.push('e')
    } else if (a === 1) {
      elements.push('r')
      elementTex.push('r')
    } else {
      elements.push(`r${toSuperscript(a)}`)
      elementTex.push(`r^{${a}}`)
    }
  }
  for (let a = 0; a < n; a++) {
    if (a === 0) {
      elements.push('s')
      elementTex.push('s')
    } else if (a === 1) {
      elements.push('sr')
      elementTex.push('sr')
    } else {
      elements.push(`sr${toSuperscript(a)}`)
      elementTex.push(`sr^{${a}}`)
    }
  }

  // Relation sr^k s = r^{-k} :
  // r^a · r^b = r^{a+b}, r^a · (sr^b) = sr^{b-a}, (sr^a) · r^b = sr^{a+b}, (sr^a) · (sr^b) = r^{b-a}
  const table: number[][] = Array.from({ length: order }, () => Array(order).fill(0))
  for (let i = 0; i < order; i++) {
    const iRef = i >= n
    const a = iRef ? i - n : i
    for (let j = 0; j < order; j++) {
      const jRef = j >= n
      const b = jRef ? j - n : j
      if (!iRef && !jRef) {
        table[i][j] = mod(a + b)
      } else if (!iRef && jRef) {
        table[i][j] = n + mod(b - a)
      } else if (iRef && !jRef) {
        table[i][j] = n + mod(a + b)
      } else {
        table[i][j] = mod(b - a)
      }
    }
  }

  return {
    id: `d${n}`,
    name: `Groupe diédral D${toSubscript(n)}`,
    texName: n < 10 ? `D_${n}` : `D_{${n}}`,
    opSymbol: '·',
    opTex: '\\cdot',
    elements,
    elementTex,
    neutralIndex: 0,
    table
  }
}

export function quaternionGroup(): FiniteGroup {
  // Ordre : 0:1, 1:-1, 2:i, 3:-i, 4:j, 5:-j, 6:k, 7:-k
  // Basis : 0=1, 1=i, 2=j, 3=k ; index = basis * 2 + (sign < 0 ? 1 : 0)
  // i^2 = j^2 = k^2 = ijk = -1
  const basisProd: Array<Array<[number, 1 | -1]>> = [
    [[0, 1], [1, 1], [2, 1], [3, 1]],
    [[1, 1], [0, -1], [3, 1], [2, -1]],
    [[2, 1], [3, -1], [0, -1], [1, 1]],
    [[3, 1], [2, 1], [1, -1], [0, -1]]
  ]

  const table: number[][] = Array.from({ length: 8 }, (_, x) => {
    const bx = x >> 1
    const sx = (x & 1) === 0 ? 1 : -1
    return Array.from({ length: 8 }, (_, y) => {
      const by = y >> 1
      const sy = (y & 1) === 0 ? 1 : -1
      const [bz, sb] = basisProd[bx][by]
      const sz = sx * sy * sb
      return bz * 2 + (sz < 0 ? 1 : 0)
    })
  })

  const labels = ['1', '-1', 'i', '-i', 'j', '-j', 'k', '-k']
  return {
    id: 'q8',
    name: 'Groupe des quaternions Q₈',
    texName: 'Q_8',
    opSymbol: '·',
    opTex: '\\cdot',
    elements: labels,
    elementTex: [...labels],
    neutralIndex: 0,
    table
  }
}

export function directProduct(g1: FiniteGroup, g2: FiniteGroup): FiniteGroup {
  const n1 = g1.elements.length
  const n2 = g2.elements.length
  if (n1 === 0 || n2 === 0) {
    throw new Error('Impossible de former le produit direct avec un groupe vide.')
  }

  const elements: string[] = []
  const elementTex: string[] = []
  for (let i1 = 0; i1 < n1; i1++) {
    for (let i2 = 0; i2 < n2; i2++) {
      elements.push(`(${g1.elements[i1]}, ${g2.elements[i2]})`)
      elementTex.push(`(${g1.elementTex[i1]}, ${g2.elementTex[i2]})`)
    }
  }

  const order = n1 * n2
  const table: number[][] = Array.from({ length: order }, (_, a) => {
    const a1 = Math.floor(a / n2)
    const a2 = a % n2
    return Array.from({ length: order }, (_, b) => {
      const b1 = Math.floor(b / n2)
      const b2 = b % n2
      return g1.table[a1][b1] * n2 + g2.table[a2][b2]
    })
  })

  return {
    id: `${g1.id}x${g2.id}`,
    name: `${g1.name} × ${g2.name}`,
    texName: `${g1.texName} \\times ${g2.texName}`,
    opSymbol: '·',
    opTex: '\\cdot',
    elements,
    elementTex,
    neutralIndex: g1.neutralIndex * n2 + g2.neutralIndex,
    table
  }
}

// ---------------------------------------------------------------------------
// Calculs structurels
// ---------------------------------------------------------------------------

export interface SubgroupNode {
  id: string
  elements: number[]
  order: number
  isNormal: boolean
  minimalGenerators: number[]
  label: string
  texLabel: string
}

export interface SubgroupLattice {
  nodes: SubgroupNode[]
  edges: Array<{ from: string; to: string }>
}

export interface SubsetProductReport {
  hk: number[]
  kh: number[]
  equal: boolean
  isSubgroup: boolean
}

export interface InternalDirectSumReport {
  isDirectSum: boolean
  hIsSubgroup: boolean
  kIsSubgroup: boolean
  elementsCommute: boolean
  nonCommutingPair: [number, number] | null
  intersection: number[]
  trivialIntersection: boolean
  hk: number[]
  spansGroup: boolean
  decompositions: Array<{ x: number; h: number; k: number }> | null
}

export interface Coset {
  representative: number
  elements: number[]
}

export interface MorphismFailure {
  x: number
  y: number
  fxy: number
  fxfy: number
}

export interface MorphismReport {
  isMorphism: boolean
  failingPairs: MorphismFailure[]
  kernel: number[]
  image: number[]
  isInjective: boolean
  isSurjective: boolean
  isBijective: boolean
}

export interface CompatibilityWitness {
  x: number
  y: number
  a: number
  leftOk: boolean
  rightOk: boolean
}

export interface EquivalenceCompatibilityReport {
  rightCompatible: boolean
  leftCompatible: boolean
  isCompatible: boolean
  failingWitnesses: CompatibilityWitness[]
}

export function generatedSubgroup(group: FiniteGroup, seedIndices: readonly number[]): number[] {
  const n = group.elements.length
  assertValidIndex(group.neutralIndex, n, 'neutralIndex')

  const seen = new Set<number>([group.neutralIndex])
  const list: number[] = [group.neutralIndex]

  for (const s of seedIndices) {
    assertValidIndex(s, n, 'seedIndices')
    if (!seen.has(s)) {
      seen.add(s)
      list.push(s)
    }
  }

  for (let i = 0; i < list.length; i++) {
    const a = list[i]
    for (let j = 0; j <= i; j++) {
      const b = list[j]
      const ab = group.table[a][b]
      if (!seen.has(ab)) {
        seen.add(ab)
        list.push(ab)
      }
      const ba = group.table[b][a]
      if (!seen.has(ba)) {
        seen.add(ba)
        list.push(ba)
      }
    }
  }

  return list.sort((a, b) => a - b)
}

function findMinimalGenerators(group: FiniteGroup, elements: readonly number[]): number[] {
  if (elements.length <= 1) return []
  const e = group.neutralIndex
  const candidates = elements.filter((x) => x !== e)
  const targetSize = elements.length

  const search = (
    startIdx: number,
    remaining: number,
    chosen: number[],
    currentSet: Set<number>
  ): number[] | null => {
    if (remaining === 0) {
      return currentSet.size === targetSize ? [...chosen] : null
    }
    for (let i = startIdx; i <= candidates.length - remaining; i++) {
      const cand = candidates[i]
      if (currentSet.has(cand)) continue
      chosen.push(cand)
      const nextSub = generatedSubgroup(group, chosen)
      const res = search(i + 1, remaining - 1, chosen, new Set(nextSub))
      if (res) return res
      chosen.pop()
    }
    return null
  }

  for (let k = 1; k <= candidates.length; k++) {
    const found = search(0, k, [], new Set([e]))
    if (found) return found
  }
  /* c8 ignore next */
  return candidates
}

function formatSubgroupLabels(
  group: FiniteGroup,
  elements: readonly number[],
  minimalGenerators: readonly number[]
): { label: string; texLabel: string } {
  const e = group.neutralIndex
  if (elements.length === 1) {
    return {
      label: `(${group.elements[e]})`,
      texLabel: `(${group.elementTex[e]})`
    }
  }
  if (elements.length === group.elements.length) {
    return {
      label: group.name,
      texLabel: group.texName
    }
  }
  return {
    label: `⟨${minimalGenerators.map((i) => group.elements[i]).join(', ')}⟩`,
    texLabel: `\\langle ${minimalGenerators.map((i) => group.elementTex[i]).join(', ')} \\rangle`
  }
}

export function allSubgroups(group: FiniteGroup): SubgroupNode[] {
  const n = group.elements.length
  if (n === 0 || n > 32) {
    throw new Error(`Énumération des sous-groupes limitée aux groupes d’ordre 1 ≤ |G| ≤ 32 (reçu : ${n})`)
  }
  const axioms = checkGroupAxioms(group.table)
  if (!axioms.isGroup || axioms.neutralIndex !== group.neutralIndex) {
    throw new Error('La structure fournie ne vérifie pas les axiomes d’un groupe.')
  }

  const e = group.neutralIndex
  const seenCyclic = new Set<string>()
  const cyclicReps: number[] = []
  for (let x = 0; x < n; x++) {
    if (x === e) continue
    const cyc = generatedSubgroup(group, [x])
    const key = cyc.join(',')
    if (!seenCyclic.has(key)) {
      seenCyclic.add(key)
      cyclicReps.push(x)
    }
  }

  const trivial = [e]
  const known = new Map<string, number[]>([[trivial.join(','), trivial]])
  const queue: number[][] = [trivial]

  for (let qi = 0; qi < queue.length; qi++) {
    const base = queue[qi]
    const baseSet = new Set(base)
    for (const rep of cyclicReps) {
      if (baseSet.has(rep)) continue
      const next = generatedSubgroup(group, [...base, rep])
      const key = next.join(',')
      if (!known.has(key)) {
        known.set(key, next)
        queue.push(next)
      }
    }
  }

  const sortedLists = Array.from(known.values()).sort(
    (a, b) => a.length - b.length || compareLex(a, b)
  )

  return sortedLists.map((elements) => {
    const minimalGenerators = findMinimalGenerators(group, elements)
    const { label, texLabel } = formatSubgroupLabels(group, elements, minimalGenerators)
    return {
      id: `sg-${elements.join('-')}`,
      elements,
      order: elements.length,
      isNormal: isNormalSubgroup(group, elements),
      minimalGenerators,
      label,
      texLabel
    }
  })
}

export function subgroupLattice(group: FiniteGroup): SubgroupLattice {
  const nodes = allSubgroups(group)
  const m = nodes.length
  const sets = nodes.map((node) => new Set(node.elements))
  const contains: boolean[][] = Array.from({ length: m }, (_, j) =>
    Array.from({ length: m }, (_, i) => i <= j && isSubsetSorted(nodes[i].elements, sets[j]))
  )

  const edges: Array<{ from: string; to: string }> = []
  for (let i = 0; i < m; i++) {
    for (let j = i + 1; j < m; j++) {
      if (!contains[j][i] || nodes[i].order === nodes[j].order) continue
      let hasIntermediate = false
      for (let k = i + 1; k < j; k++) {
        if (contains[k][i] && contains[j][k]) {
          hasIntermediate = true
          break
        }
      }
      if (!hasIntermediate) {
        edges.push({ from: nodes[i].id, to: nodes[j].id })
      }
    }
  }

  return { nodes, edges }
}

export function subsetProduct(
  group: FiniteGroup,
  setA: readonly number[],
  setB: readonly number[]
): number[] {
  const n = group.elements.length
  const aClean = uniqueSortedIndices(setA, n, 'setA')
  const bClean = uniqueSortedIndices(setB, n, 'setB')
  const prod = new Set<number>()
  for (const a of aClean) {
    for (const b of bClean) {
      prod.add(group.table[a][b])
    }
  }
  return Array.from(prod).sort((x, y) => x - y)
}

export function checkHKequalsKH(
  group: FiniteGroup,
  H: readonly number[],
  K: readonly number[]
): SubsetProductReport {
  const hk = subsetProduct(group, H, K)
  const kh = subsetProduct(group, K, H)
  const equal = hk.length === kh.length && hk.every((val, idx) => val === kh[idx])
  return {
    hk,
    kh,
    equal,
    isSubgroup: isSubgroup(group, hk)
  }
}

export function checkInternalDirectSum(
  group: FiniteGroup,
  H: readonly number[],
  K: readonly number[]
): InternalDirectSumReport {
  const n = group.elements.length
  const hClean = uniqueSortedIndices(H, n, 'H')
  const kClean = uniqueSortedIndices(K, n, 'K')
  const hIsSubgroup = isSubgroup(group, hClean)
  const kIsSubgroup = isSubgroup(group, kClean)

  let nonCommutingPair: [number, number] | null = null
  outerComm: for (const h of hClean) {
    for (const k of kClean) {
      if (group.table[h][k] !== group.table[k][h]) {
        nonCommutingPair = [h, k]
        break outerComm
      }
    }
  }
  const elementsCommute = nonCommutingPair === null

  const kSet = new Set(kClean)
  const intersection = hClean.filter((h) => kSet.has(h))
  const trivialIntersection =
    intersection.length === 1 && intersection[0] === group.neutralIndex

  const hk = subsetProduct(group, hClean, kClean)
  const spansGroup = hk.length === n

  const isDirectSum =
    hIsSubgroup &&
    kIsSubgroup &&
    elementsCommute &&
    trivialIntersection &&
    spansGroup

  let decompositions: Array<{ x: number; h: number; k: number }> | null = null
  if (isDirectSum) {
    const byX = new Array<{ x: number; h: number; k: number }>(n)
    for (const h of hClean) {
      for (const k of kClean) {
        const x = group.table[h][k]
        byX[x] = { x, h, k }
      }
    }
    decompositions = byX
  }

  return {
    isDirectSum,
    hIsSubgroup,
    kIsSubgroup,
    elementsCommute,
    nonCommutingPair,
    intersection,
    trivialIntersection,
    hk,
    spansGroup,
    decompositions
  }
}

function buildCosets(group: FiniteGroup, H: readonly number[], side: 'right' | 'left'): Coset[] {
  const n = group.elements.length
  if (!isSubgroup(group, H)) {
    throw new Error('L’ensemble fourni n’est pas un sous-groupe de G.')
  }
  const hClean = uniqueSortedIndices(H, n, 'H')
  const orderOfTraversal = [group.neutralIndex]
  for (let x = 0; x < n; x++) {
    if (x !== group.neutralIndex) orderOfTraversal.push(x)
  }

  const visited = new Set<number>()
  const cosets: Coset[] = []
  for (const rep of orderOfTraversal) {
    if (visited.has(rep)) continue
    const cosetSet = new Set<number>()
    for (const h of hClean) {
      const elem = side === 'right' ? group.table[h][rep] : group.table[rep][h]
      cosetSet.add(elem)
      visited.add(elem)
    }
    cosets.push({
      representative: rep,
      elements: Array.from(cosetSet).sort((a, b) => a - b)
    })
  }
  return cosets
}

export function rightCosets(group: FiniteGroup, H: readonly number[]): Coset[] {
  return buildCosets(group, H, 'right')
}

export function leftCosets(group: FiniteGroup, H: readonly number[]): Coset[] {
  return buildCosets(group, H, 'left')
}

export function subgroupIndex(group: FiniteGroup, H: readonly number[]): number {
  return rightCosets(group, H).length
}

export function isNormalSubgroup(group: FiniteGroup, H: readonly number[]): boolean {
  const n = group.elements.length
  const hClean = uniqueSortedIndices(H, n, 'H')
  if (!isSubgroup(group, hClean)) return false

  for (let x = 0; x < n; x++) {
    const right = new Set<number>()
    const left = new Set<number>()
    for (const h of hClean) {
      right.add(group.table[h][x])
      left.add(group.table[x][h])
    }
    if (!setsEqual(right, left)) return false
  }
  return true
}

export function checkMorphism(
  g1: FiniteGroup,
  g2: FiniteGroup,
  mapArray: readonly number[]
): MorphismReport {
  const n1 = g1.elements.length
  const n2 = g2.elements.length
  if (mapArray.length !== n1) {
    throw new Error(
      `Taille de mapArray invalide : attendu ${n1} (ordre de ${g1.name}), reçu ${mapArray.length}`
    )
  }
  for (let i = 0; i < n1; i++) {
    assertValidIndex(mapArray[i], n2, 'mapArray')
  }

  const failingPairs: MorphismFailure[] = []
  for (let x = 0; x < n1; x++) {
    const fx = mapArray[x]
    for (let y = 0; y < n1; y++) {
      const fxy = mapArray[g1.table[x][y]]
      const fxfy = g2.table[fx][mapArray[y]]
      if (fxy !== fxfy) {
        failingPairs.push({ x, y, fxy, fxfy })
      }
    }
  }

  const kernel: number[] = []
  const imageSet = new Set<number>()
  for (let x = 0; x < n1; x++) {
    const fx = mapArray[x]
    if (fx === g2.neutralIndex) kernel.push(x)
    imageSet.add(fx)
  }
  const image = Array.from(imageSet).sort((a, b) => a - b)

  const isInjective = image.length === n1
  const isSurjective = image.length === n2
  const isBijective = isInjective && isSurjective

  return {
    isMorphism: failingPairs.length === 0,
    failingPairs,
    kernel,
    image,
    isInjective,
    isSurjective,
    isBijective
  }
}

export function checkEquivalenceCompatibility(
  group: FiniteGroup,
  classOfElement: ReadonlyArray<number | string>
): EquivalenceCompatibilityReport {
  const n = group.elements.length
  if (classOfElement.length !== n) {
    throw new Error(
      `Taille de classOfElement invalide : attendu ${n}, reçu ${classOfElement.length}`
    )
  }

  let rightCompatible = true
  let leftCompatible = true
  const failingWitnesses: CompatibilityWitness[] = []

  for (let x = 0; x < n; x++) {
    for (let y = x + 1; y < n; y++) {
      if (classOfElement[x] !== classOfElement[y]) continue
      for (let a = 0; a < n; a++) {
        const rightOk =
          classOfElement[group.table[x][a]] === classOfElement[group.table[y][a]]
        const leftOk =
          classOfElement[group.table[a][x]] === classOfElement[group.table[a][y]]
        if (!rightOk || !leftOk) {
          if (!rightOk) rightCompatible = false
          if (!leftOk) leftCompatible = false
          failingWitnesses.push({ x, y, a, leftOk, rightOk })
        }
      }
    }
  }

  return {
    rightCompatible,
    leftCompatible,
    isCompatible: rightCompatible && leftCompatible,
    failingWitnesses
  }
}

export function quotientGroup(group: FiniteGroup, normalH: readonly number[]): FiniteGroup {
  if (!isNormalSubgroup(group, normalH)) {
    throw new Error(
      'Impossible de former le groupe quotient : le sous-groupe fourni n’est pas distingué dans G.'
    )
  }

  const n = group.elements.length
  const hClean = uniqueSortedIndices(normalH, n, 'normalH')
  const cosets = rightCosets(group, hClean)
  const classOfElement = Array<number>(n).fill(0)
  cosets.forEach((coset, cIdx) => {
    for (const el of coset.elements) {
      classOfElement[el] = cIdx
    }
  })

  const table = cosets.map((ci) =>
    cosets.map((cj) => classOfElement[group.table[ci.representative][cj.representative]])
  )

  const gens = findMinimalGenerators(group, hClean)
  const { label: subLabel, texLabel: subTex } = formatSubgroupLabels(group, hClean, gens)

  return {
    id: `${group.id}-quot-${hClean.join('-')}`,
    name: `${group.name} / ${subLabel}`,
    texName: `\\dfrac{${group.texName}}{${subTex}}`,
    opSymbol: group.opSymbol,
    opTex: group.opTex,
    elements: cosets.map((c) => `cl(${group.elements[c.representative]})`),
    elementTex: cosets.map((c) => `\\cl(${group.elementTex[c.representative]})`),
    neutralIndex: 0,
    table
  }
}

export function translationPermutations(
  group: FiniteGroup,
  side: 'left' | 'right' = 'left'
): number[][] {
  if (side !== 'left' && side !== 'right') {
    throw new Error(`Côté de translation invalide : ${String(side)}`)
  }
  const n = group.elements.length
  return Array.from({ length: n }, (_, g) =>
    Array.from({ length: n }, (_, x) =>
      side === 'left' ? group.table[g][x] : group.table[x][g]
    )
  )
}
