<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  center,
  checkGroupAxioms,
  cyclicGroup,
  dihedralGroup,
  elementOrder,
  fromTable,
  quaternionGroup,
  unitsModN,
  type FiniteGroup
} from '../../math/groups'
import { BOOK_TABLES_T1, NON_ASSOC_SAMPLE } from '../../data/book-tables'
import { renderMath } from '../../math/katex-macros'

type SourceKind = 's3' | 'klein' | 'table12' | 'zn' | 'un' | 'd3' | 'q8' | 'non-assoc' | 'blank'

const UNITS_MODULI = [5, 8, 10, 12] as const
const BLANK_LABELS = ['e', 'a', 'b', 'c', 'd', 'f']

function createBlankTableGroup(size: number): FiniteGroup {
  const elems = BLANK_LABELS.slice(0, size)
  const table = Array.from({ length: size }, (_, i) =>
    Array.from({ length: size }, (_, j) => {
      if (i === 0) return j
      if (j === 0) return i
      return 0
    })
  )
  return fromTable({
    id: `blank-${size}`,
    name: `Table vierge libre (ordre ${size})`,
    texName: `E_{${size}}`,
    opSymbol: '·',
    opTex: '\\cdot',
    elements: elems,
    elementTex: elems,
    neutralIndex: 0,
    table
  })
}

const sourceKind = ref<SourceKind>('s3')
const znOrder = ref<number>(4)
const unModulus = ref<number>(8)
const blankOrder = ref<number>(4)
const editMode = ref<boolean>(false)
const customTable = ref<number[][] | null>(null)
const selectedCell = ref<[number, number] | null>(null)

const baseGroup = computed<FiniteGroup>(() => {
  switch (sourceKind.value) {
    case 's3':
      return BOOK_TABLES_T1.table10
    case 'klein':
      return BOOK_TABLES_T1.table11
    case 'table12':
      return BOOK_TABLES_T1.table12
    case 'zn':
      return cyclicGroup(znOrder.value)
    case 'un':
      return unitsModN(unModulus.value)
    case 'd3':
      return dihedralGroup(3)
    case 'q8':
      return quaternionGroup()
    case 'blank':
      return createBlankTableGroup(blankOrder.value)
    case 'non-assoc':
    default:
      return NON_ASSOC_SAMPLE
  }
})

const activeTable = computed<number[][]>(() => {
  if (
    (editMode.value || sourceKind.value === 'blank') &&
    customTable.value &&
    customTable.value.length === baseGroup.value.elements.length
  ) {
    return customTable.value
  }
  return baseGroup.value.table
})

const report = computed(() => checkGroupAxioms(activeTable.value))

const activeGroup = computed<FiniteGroup>(() => ({
  ...baseGroup.value,
  neutralIndex: report.value.neutralIndex ?? baseGroup.value.neutralIndex,
  table: activeTable.value
}))

const isInteractiveEdit = computed(() => editMode.value || sourceKind.value === 'blank')

const structureTexHtml = computed(() =>
  renderMath(`${activeGroup.value.texName}`)
)
const opHtml = computed(() => renderMath(activeGroup.value.opTex))
const elemHtmls = computed(() =>
  activeGroup.value.elementTex.map((tex) => renderMath(tex))
)

const centerHtml = computed(() => {
  if (!report.value.isGroup) {
    return '<em>Non défini (la structure n’est pas un groupe)</em>'
  }
  const c = center(activeGroup.value)
  const tex = `Z(G) = \\{ ${c.map((idx) => activeGroup.value.elementTex[idx]).join(', ')} \\}`
  return renderMath(tex)
})

const witnessHtml = computed(() => {
  const w = report.value.assocWitness
  if (!w) return ''
  const [a, b, c] = w
  const g = activeGroup.value
  const ab = g.table[a][b]
  const bc = g.table[b][c]
  const lhs = g.table[ab][c]
  const rhs = g.table[a][bc]
  const tex = `(${g.elementTex[a]} ${g.opTex} ${g.elementTex[b]}) ${g.opTex} ${g.elementTex[c]} = ${g.elementTex[lhs]} \\neq ${g.elementTex[rhs]} = ${g.elementTex[a]} ${g.opTex} (${g.elementTex[b]} ${g.opTex} ${g.elementTex[c]})`
  return renderMath(tex)
})

const nonCommHtml = computed(() => {
  const p = report.value.nonCommutingPair
  if (!p) return ''
  const [i, j] = p
  const g = activeGroup.value
  const tex = `${g.elementTex[i]} ${g.opTex} ${g.elementTex[j]} = ${g.elementTex[g.table[i][j]]} \\neq ${g.elementTex[g.table[j][i]]} = ${g.elementTex[j]} ${g.opTex} ${g.elementTex[i]}`
  return renderMath(tex)
})

const ordersSummaryHtml = computed(() => {
  const g = activeGroup.value
  const r = report.value
  return g.elementTex
    .map((tex, idx) => {
      const inv = r.inverses[idx]
      const invTex = inv !== null ? g.elementTex[inv] : '?'
      const ord = r.isGroup ? elementOrder(g, idx) : null
      const baseTex = tex.startsWith('-') ? `(${tex})` : tex
      const expr =
        ord !== null ? `${baseTex}^{-1} = ${invTex}\\;(o=${ord})` : `${baseTex}^{-1} = ${invTex}`
      return renderMath(expr)
    })
    .join(' &nbsp;·&nbsp; ')
})

const selectedCellHtml = computed(() => {
  if (!selectedCell.value) return ''
  const [i, j] = selectedCell.value
  const g = activeGroup.value
  const ij = g.table[i][j]
  const ji = g.table[j][i]
  return renderMath(
    `${g.elementTex[i]} ${g.opTex} ${g.elementTex[j]} = ${g.elementTex[ij]}, \\quad ${g.elementTex[j]} ${g.opTex} ${g.elementTex[i]} = ${g.elementTex[ji]}`
  )
})

function selectSource(kind: SourceKind) {
  sourceKind.value = kind
  if (kind === 'blank') {
    customTable.value = createBlankTableGroup(blankOrder.value).table.map((row) => [...row])
    editMode.value = true
  } else {
    editMode.value = false
    customTable.value = null
  }
  selectedCell.value = null
}

function onZnChange(n: number) {
  znOrder.value = n
  sourceKind.value = 'zn'
  editMode.value = false
  customTable.value = null
  selectedCell.value = null
}

function onUnChange(n: number) {
  unModulus.value = n
  sourceKind.value = 'un'
  editMode.value = false
  customTable.value = null
  selectedCell.value = null
}

function onBlankOrderChange(n: number) {
  blankOrder.value = n
  sourceKind.value = 'blank'
  customTable.value = createBlankTableGroup(n).table.map((row) => [...row])
  editMode.value = true
  selectedCell.value = null
}

function toggleEditMode() {
  if (!editMode.value) {
    customTable.value = baseGroup.value.table.map((row) => [...row])
    editMode.value = true
  } else {
    editMode.value = false
    customTable.value = null
    if (sourceKind.value === 'blank') {
      sourceKind.value = 's3'
    }
  }
}

function resetCustomTable() {
  customTable.value = baseGroup.value.table.map((row) => [...row])
}

function onCellClick(i: number, j: number) {
  selectedCell.value = [i, j]
  if (isInteractiveEdit.value) {
    const base = customTable.value ?? baseGroup.value.table
    const n = activeGroup.value.elements.length
    const next = base.map((row) => [...row])
    next[i][j] = (next[i][j] + 1) % n
    customTable.value = next
    editMode.value = true
  }
}

function isWitnessCell(i: number, j: number): boolean {
  const w = report.value.assocWitness
  if (!w) return false
  const [a, b, c] = w
  const t = activeTable.value
  return (
    (i === a && j === b) ||
    (i === t[a][b] && j === c) ||
    (i === b && j === c) ||
    (i === a && j === t[b][c])
  )
}
</script>

<template>
  <section class="jc-lab-card" data-lab="cayley">
    <header class="jc-card-header">
      <div class="jc-card-title">
        Laboratoire — Axiomes de groupe &amp; éditeur de table de Cayley
      </div>
      <span class="jc-fold-badge">Définition (1.3) · Exemples (1.18)–(1.19)</span>
    </header>

    <div class="jc-card-body">
      <div class="jc-controls">
        <span style="font-size: 0.85rem; font-weight: 700;">Structure :</span>
        <button
          type="button"
          class="jc-btn"
          :class="{ active: sourceKind === 's3' }"
          @click="selectSource('s3')"
        >
          S₃ — Table (10)
        </button>
        <button
          type="button"
          class="jc-btn"
          :class="{ active: sourceKind === 'klein' }"
          @click="selectSource('klein')"
        >
          Klein V (ordre 4) — Table (11)
        </button>
        <button
          type="button"
          class="jc-btn"
          :class="{ active: sourceKind === 'table12' }"
          @click="selectSource('table12')"
        >
          Table (12) — Carré latin non associatif (ordre 5)
        </button>
        <button
          type="button"
          class="jc-btn"
          :class="{ active: sourceKind === 'zn' }"
          @click="selectSource('zn')"
        >
          ℤ/(n) (+)
        </button>
        <button
          type="button"
          class="jc-btn"
          :class="{ active: sourceKind === 'un' }"
          @click="selectSource('un')"
        >
          (ℤ/nℤ)ˣ (×)
        </button>
        <button
          type="button"
          class="jc-btn"
          :class="{ active: sourceKind === 'd3' }"
          @click="selectSource('d3')"
        >
          D₃ (ordre 6)
        </button>
        <button
          type="button"
          class="jc-btn"
          :class="{ active: sourceKind === 'q8' }"
          @click="selectSource('q8')"
        >
          Q₈ (ordre 8)
        </button>
        <button
          type="button"
          class="jc-btn"
          :class="{ active: sourceKind === 'non-assoc' }"
          @click="selectSource('non-assoc')"
        >
          Loi non associative (ℤ/(3), −)
        </button>
        <button
          type="button"
          class="jc-btn"
          :class="{ active: sourceKind === 'blank' }"
          @click="selectSource('blank')"
        >
          Table vierge libre
        </button>

        <span v-if="sourceKind === 'zn'" class="jc-cayley-param">
          <label for="cayley-n-range" class="jc-cayley-param-lbl">n = {{ znOrder }}</label>
          <input
            id="cayley-n-range"
            type="range"
            min="2"
            max="6"
            :value="znOrder"
            @input="onZnChange(Number(($event.target as HTMLInputElement).value))"
          />
        </span>

        <span v-if="sourceKind === 'un'" class="jc-cayley-param">
          <label for="cayley-un-select" class="jc-cayley-param-lbl">Module n :</label>
          <select
            id="cayley-un-select"
            class="jc-select"
            :value="unModulus"
            @change="onUnChange(Number(($event.target as HTMLSelectElement).value))"
          >
            <option v-for="m in UNITS_MODULI" :key="m" :value="m">
              n = {{ m }} (ordre 4)
            </option>
          </select>
        </span>

        <span v-if="sourceKind === 'blank'" class="jc-cayley-param">
          <label for="cayley-blank-size" class="jc-cayley-param-lbl">Taille libre :</label>
          <select
            id="cayley-blank-size"
            class="jc-select"
            :value="blankOrder"
            @change="onBlankOrderChange(Number(($event.target as HTMLSelectElement).value))"
          >
            <option v-for="sz in [2, 3, 4, 5, 6]" :key="sz" :value="sz">
              {{ sz }} × {{ sz }}
            </option>
          </select>
        </span>

        <button
          type="button"
          class="jc-btn teal"
          :class="{ active: editMode }"
          @click="toggleEditMode"
        >
          {{ editMode ? 'Édition libre active (cliquez les cases)' : 'Passer en éditeur libre' }}
        </button>
        <button
          v-if="editMode"
          type="button"
          class="jc-btn"
          @click="resetCustomTable"
        >
          Réinitialiser la table
        </button>
      </div>

      <div class="jc-grid-2">
        <div class="jc-cayley-table-col">
          <div class="jc-cayley-caption">
            <strong>{{ activeGroup.name }}</strong>
            <span> — </span>
            <span v-html="structureTexHtml" />
            <span> (ordre {{ activeGroup.elements.length }})</span>
          </div>
          <div class="cayley-wrap">
            <table class="jc-cayley-table" aria-label="Table de Cayley interactive">
              <thead>
                <tr>
                  <th scope="col" v-html="opHtml" />
                  <th v-for="(h, j) in elemHtmls" :key="`th-${j}`" scope="col" v-html="h" />
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, i) in activeTable" :key="`tr-${i}`">
                  <th scope="row" v-html="elemHtmls[i]" />
                  <td
                    v-for="(val, j) in row"
                    :key="`td-${i}-${j}`"
                    tabindex="0"
                    :aria-label="`${activeGroup.elements[i]} ${activeGroup.opSymbol} ${activeGroup.elements[j]} = ${activeGroup.elements[val]}`"
                    :class="{
                      'cell-neutral': report.neutralIndex !== null && val === report.neutralIndex,
                      'cell-asym': activeTable[i][j] !== activeTable[j][i],
                      'cell-witness': isWitnessCell(i, j)
                    }"
                    style="cursor: pointer;"
                    @click="onCellClick(i, j)"
                    @keydown.enter.prevent="onCellClick(i, j)"
                    @keydown.space.prevent="onCellClick(i, j)"
                    v-html="elemHtmls[val]"
                  />
                </tr>
              </tbody>
            </table>
          </div>
          <p v-if="isInteractiveEdit" class="jc-cayley-hint">
            Cliquez ou appuyez sur Entrée sur n’importe quelle case (y compris la 1re ligne ou 1re colonne) pour faire cycler sa valeur.
          </p>
        </div>

        <div class="jc-panel" data-lab-verdict>
          <div style="margin-bottom: 0.45rem;">
            <strong>Verdict : </strong>
            <span v-if="report.isGroup" class="jc-status-ok">
              ✔ Structure de groupe ({{ report.isAbelian ? 'abélien' : 'non abélien' }})
            </span>
            <span v-else class="jc-status-err">
              ✘ Ce n’est pas un groupe
            </span>
          </div>

          <ul style="margin: 0.35rem 0 0.55rem 1.1rem; padding: 0;">
            <li>
              <strong>(G₁) Associativité :</strong>
              <span v-if="report.isAssociative" class="jc-status-ok"> vérifiée</span>
              <span v-else class="jc-status-err"> échec — témoin : <span v-html="witnessHtml" /></span>
            </li>
            <li>
              <strong>(G₂) Élément neutre :</strong>
              <span v-if="report.neutralIndex !== null" class="jc-status-ok">
                <span v-html="elemHtmls[report.neutralIndex]" />
              </span>
              <span v-else class="jc-status-err"> aucun neutre bilatère</span>
            </li>
            <li>
              <strong>(G₃) Tout élément symétrisable :</strong>
              <span v-if="report.hasAllInverses" class="jc-status-ok">
                oui (carré latin : {{ report.isLatinSquare ? 'oui' : 'non' }})
              </span>
              <span v-else class="jc-status-err">
                non (carré latin : {{ report.isLatinSquare ? 'oui' : 'non' }})
              </span>
            </li>
            <li>
              <strong>Commutativité :</strong>
              <span v-if="report.isAbelian"> oui (table symétrique)</span>
              <span v-else> non — ex. <span v-html="nonCommHtml" /></span>
            </li>
          </ul>

          <div style="margin-top: 0.4rem;">
            <strong>Centre :</strong> <span v-html="centerHtml" />
          </div>
          <div style="margin-top: 0.4rem;">
            <strong>Inverses &amp; ordres :</strong> <span v-html="ordersSummaryHtml" />
          </div>
          <div v-if="selectedCellHtml" style="margin-top: 0.45rem;">
            <strong>Case inspectée :</strong> <span v-html="selectedCellHtml" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.jc-cayley-param {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.jc-cayley-param-lbl {
  font-size: 0.83rem;
  font-weight: 600;
}

.jc-cayley-table-col {
  min-width: 0;
}

.jc-cayley-caption {
  font-size: 0.88rem;
  color: var(--jc-text-muted);
  margin-bottom: 0.35rem;
}

.jc-cayley-hint {
  margin: 0.35rem 0 0;
  font-size: 0.8rem;
  color: var(--jc-text-muted);
}

.jc-panel {
  min-width: 0;
}
</style>
