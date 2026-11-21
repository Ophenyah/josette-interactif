<script setup lang="ts">
import { computed, ref, useId } from 'vue'
import {
  checkGroupAxioms,
  cyclicGroup,
  directProduct,
  elementOrder,
  kleinGroup,
  symmetricGroup,
  type FiniteGroup
} from '../../math/groups'
import { renderMath, renderSafeMarkdownMath } from '../../math/katex-macros'

type FactorKey = 'z2' | 'z3' | 'z4' | 'v4' | 's3'
type TabKey = 'builder' | 'universal'
type UnivExampleKey = 'z23' | 'z24' | 'polar'

const FACTORS: Array<{ key: FactorKey; label: string; group: FiniteGroup }> = [
  { key: 'z2', label: 'ℤ/(2)', group: cyclicGroup(2) },
  { key: 'z3', label: 'ℤ/(3)', group: cyclicGroup(3) },
  { key: 'z4', label: 'ℤ/(4)', group: cyclicGroup(4) },
  { key: 'v4', label: 'Klein V', group: kleinGroup() },
  { key: 's3', label: 'S₃', group: symmetricGroup(3) }
]

const MAX_PRODUCT_ORDER = 18

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

function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b)
}

function getFactor(key: FactorKey): FiniteGroup {
  return (FACTORS.find((f) => f.key === key) ?? FACTORS[0]).group
}

const uid = useId()
const activeTab = ref<TabKey>('builder')

// Onglet 1 : Constructeur G1 × G2
const g1Key = ref<FactorKey>('z2')
const g2Key = ref<FactorKey>('z3')
const inspectedCell = ref<[number, number] | null>(null)

const g1 = computed(() => getFactor(g1Key.value))
const g2 = computed(() => getFactor(g2Key.value))
const prodGroup = computed(() => directProduct(g1.value, g2.value))
const prodAxioms = computed(() => checkGroupAxioms(prodGroup.value.table))

const elemHtmls = computed(() => prodGroup.value.elementTex.map((t) => renderMath(t)))
const opHtml = computed(() => renderMath(prodGroup.value.opTex))

interface OrderRow {
  idx: number
  pairHtml: string
  o1: number
  o2: number
  lcmVal: number
  prodOrder: number
  isGenerator: boolean
}

const orderRows = computed<OrderRow[]>(() => {
  const a = g1.value
  const b = g2.value
  const p = prodGroup.value
  const n2 = b.elements.length
  const total = p.elements.length
  const rows: OrderRow[] = []

  for (let i = 0; i < total; i++) {
    const i1 = Math.floor(i / n2)
    const i2 = i % n2
    const o1 = elementOrder(a, i1) ?? 1
    const o2 = elementOrder(b, i2) ?? 1
    const prodOrder = elementOrder(p, i) ?? 1
    rows.push({
      idx: i,
      pairHtml: elemHtmls.value[i],
      o1,
      o2,
      lcmVal: lcm(o1, o2),
      prodOrder,
      isGenerator: prodOrder === total
    })
  }
  return rows
})

const generatorRow = computed(() => orderRows.value.find((r) => r.isGenerator) ?? null)
const isCyclicProduct = computed(() => generatorRow.value !== null)
const maxOrder = computed(() => Math.max(...orderRows.value.map((r) => r.prodOrder)))

const nonCommHtml = computed(() => {
  const pair = prodAxioms.value.nonCommutingPair
  if (!pair) return ''
  const [i, j] = pair
  const p = prodGroup.value
  const ij = p.table[i][j]
  const ji = p.table[j][i]
  return renderMath(
    `${p.elementTex[i]} ${p.opTex} ${p.elementTex[j]} = ${p.elementTex[ij]} \\neq ${p.elementTex[ji]} = ${p.elementTex[j]} ${p.opTex} ${p.elementTex[i]}`
  )
})

const inspectedCellHtml = computed(() => {
  if (!inspectedCell.value) return ''
  const [i, j] = inspectedCell.value
  const a = g1.value
  const b = g2.value
  const p = prodGroup.value
  const n2 = b.elements.length
  const i1 = Math.floor(i / n2)
  const i2 = i % n2
  const j1 = Math.floor(j / n2)
  const j2 = j % n2
  const k1 = a.table[i1][j1]
  const k2 = b.table[i2][j2]
  const res = p.table[i][j]
  return renderMath(
    `${p.elementTex[i]} ${p.opTex} ${p.elementTex[j]} = (${a.elementTex[i1]} ${a.opTex} ${a.elementTex[j1]},\\; ${b.elementTex[i2]} ${b.opTex} ${b.elementTex[j2]}) = ${p.elementTex[res]}`
  )
})

function selectG1(key: FactorKey) {
  const cand1 = getFactor(key)
  g1Key.value = key
  if (cand1.elements.length * g2.value.elements.length > MAX_PRODUCT_ORDER) {
    const fallback = FACTORS.find((f) => cand1.elements.length * f.group.elements.length <= MAX_PRODUCT_ORDER)
    if (fallback) g2Key.value = fallback.key
  }
  inspectedCell.value = null
}

function selectG2(key: FactorKey) {
  const cand2 = getFactor(key)
  if (g1.value.elements.length * cand2.elements.length > MAX_PRODUCT_ORDER) return
  g2Key.value = key
  inspectedCell.value = null
}

function applyPresetPair(k1: FactorKey, k2: FactorKey) {
  g1Key.value = k1
  g2Key.value = k2
  inspectedCell.value = null
}

// Onglet 2 : Propriété universelle (Thm 1.91)
const univKey = ref<UnivExampleKey>('z23')
const xSlider = ref<number>(5)

const univData = computed(() => {
  if (univKey.value === 'z23') {
    const x = xSlider.value
    const r2 = ((x % 2) + 2) % 2
    const r3 = ((x % 3) + 3) % 3
    return {
      gText: 'ℤ',
      g1Text: 'ℤ/(2)',
      g2Text: 'ℤ/(3)',
      gTex: '\\Z',
      g1Tex: '\\Zn{2}',
      g2Tex: '\\Zn{3}',
      xTex: String(x),
      f1Tex: `\\overline{${r2}}`,
      f2Tex: `\\overline{${r3}}`,
      hTex: `(\\overline{${r2}},\\; \\overline{${r3}})`,
      f1Short: `${r2}̄`,
      f2Short: `${r3}̄`,
      hShort: `(${r2}̄, ${r3}̄)`,
      summaryNote:
        'Ici $\\pgcd(2,3)=1$ : par le théorème chinois, $h$ est surjectif ($\\Im h = \\Zn{2} \\times \\Zn{3}$) et $\\Ker h = 6\\Z$, d’où $\\Zn{6} \\simeq \\Zn{2} \\times \\Zn{3}$.'
    }
  }
  if (univKey.value === 'z24') {
    const x = xSlider.value
    const r2 = ((x % 2) + 2) % 2
    const r4 = ((x % 4) + 4) % 4
    return {
      gText: 'ℤ',
      g1Text: 'ℤ/(2)',
      g2Text: 'ℤ/(4)',
      gTex: '\\Z',
      g1Tex: '\\Zn{2}',
      g2Tex: '\\Zn{4}',
      xTex: String(x),
      f1Tex: `\\overline{${r2}}`,
      f2Tex: `\\overline{${r4}}`,
      hTex: `(\\overline{${r2}},\\; \\overline{${r4}})`,
      f1Short: `${r2}̄`,
      f2Short: `${r4}̄`,
      hShort: `(${r2}̄, ${r4}̄)`,
      summaryNote:
        'Ici $\\pgcd(2,4)=2 \\neq 1$ : la parité de $f_2(x)$ impose $f_1(x)$, donc $(\\overline{1}, \\overline{0}) \\notin \\Im h$ ($\\card \\Im h = 4 < 8$, $\\Ker h = 4\\Z$).'
    }
  }
  const t = xSlider.value * 0.5
  const tStr = t.toFixed(1)
  const expStr = Math.exp(t).toFixed(2)
  return {
    gText: 'ℝ',
    g1Text: 'ℝ₊*',
    g2Text: 'U',
    gTex: '\\R',
    g1Tex: '\\R_+^*',
    g2Tex: 'U',
    xTex: tStr,
    f1Tex: `e^{${tStr}} \\approx ${expStr}`,
    f2Tex: `e^{i\\cdot ${tStr}}`,
    hTex: `(e^{${tStr}},\\; e^{i\\cdot ${tStr}})`,
    f1Short: `e^(${tStr})`,
    f2Short: `e^(i·${tStr})`,
    hShort: `(e^${tStr}, e^(i·${tStr}))`,
    summaryNote:
      'Ici $f_1(x)=e^x$ et $f_2(x)=e^{ix}$ sont des morphismes de $(\\R,+)$ vers $(\\R_+^*,\\times)$ et $(U,\\times)$ : $h(x)=(e^x, e^{ix})$ est injectif ($\\Ker h = \\{0\\}$).'
  }
})

const univDetailHtml = computed(() => {
  const d = univData.value
  return [
    renderMath(`x = ${d.xTex} \\in ${d.gTex}`),
    renderMath(`f_1(x) = ${d.f1Tex} \\in ${d.g1Tex}, \\qquad f_2(x) = ${d.f2Tex} \\in ${d.g2Tex}`),
    renderMath(`h(x) = (f_1(x),\\, f_2(x)) = ${d.hTex}`),
    renderMath(`p_1(h(x)) = ${d.f1Tex} = f_1(x) \\quad \\text{et} \\quad p_2(h(x)) = ${d.f2Tex} = f_2(x)`)
  ]
})

const univNoteHtml = computed(() =>
  renderSafeMarkdownMath(univData.value.summaryNote, { inline: true })
)
</script>

<template>
  <section class="jc-lab-card" data-lab="direct-product">
    <header class="jc-card-header">
      <div class="jc-card-title">
        Laboratoire — Produit direct <span v-html="renderMath('G_1 \\times G_2')" /> &amp; propriété universelle
      </div>
      <span class="jc-fold-badge">I § 4 — Théorème (1.91)</span>
    </header>

    <div class="jc-card-body">
      <div class="jc-controls" role="tablist" aria-label="Onglets du produit direct">
        <button
          type="button"
          role="tab"
          :aria-selected="activeTab === 'builder'"
          class="jc-btn"
          :class="{ active: activeTab === 'builder' }"
          @click="activeTab = 'builder'"
        >
          Constructeur G₁ × G₂
        </button>
        <button
          type="button"
          role="tab"
          :aria-selected="activeTab === 'universal'"
          class="jc-btn"
          :class="{ active: activeTab === 'universal' }"
          @click="activeTab = 'universal'"
        >
          Propriété universelle (Thm 1.91)
        </button>
      </div>

      <template v-if="activeTab === 'builder'">
        <div class="jc-controls">
          <label class="jc-field-label" for="dp-g1">
            <span>G₁ :</span>
            <select
              id="dp-g1"
              class="jc-select"
              :value="g1Key"
              @change="selectG1(($event.target as HTMLSelectElement).value as FactorKey)"
            >
              <option v-for="f in FACTORS" :key="`dp1-${f.key}`" :value="f.key">
                {{ f.label }} (ordre {{ f.group.elements.length }})
              </option>
            </select>
          </label>

          <label class="jc-field-label" for="dp-g2">
            <span>G₂ :</span>
            <select
              id="dp-g2"
              class="jc-select"
              :value="g2Key"
              @change="selectG2(($event.target as HTMLSelectElement).value as FactorKey)"
            >
              <option
                v-for="f in FACTORS"
                :key="`dp2-${f.key}`"
                :value="f.key"
                :disabled="g1.elements.length * f.group.elements.length > MAX_PRODUCT_ORDER"
              >
                {{ f.label }} (ordre {{ f.group.elements.length }}){{
                  g1.elements.length * f.group.elements.length > MAX_PRODUCT_ORDER ? ' — |G₁||G₂| > 18' : ''
                }}
              </option>
            </select>
          </label>

          <button type="button" class="jc-btn" @click="applyPresetPair('z2', 'z3')">ℤ/(2) × ℤ/(3)</button>
          <button type="button" class="jc-btn" @click="applyPresetPair('z2', 'z4')">ℤ/(2) × ℤ/(4)</button>
          <button type="button" class="jc-btn" @click="applyPresetPair('z3', 'z3')">ℤ/(3) × ℤ/(3)</button>
          <button type="button" class="jc-btn" @click="applyPresetPair('z2', 's3')">ℤ/(2) × S₃</button>
        </div>

        <div class="jc-panel" style="margin-bottom: 0.9rem;" data-lab-verdict>
          <div class="jc-verdict-grid">
            <div>
              <strong>Produit :</strong>
              <span v-html="renderMath(`${prodGroup.texName} \\quad (\\text{ordre } ${prodGroup.elements.length})`)" />
            </div>
            <div>
              <strong>Commutativité :</strong>
              <span v-if="prodAxioms.isAbelian" class="jc-status-ok">✔ Abélien</span>
              <span v-else class="jc-status-err">
                ✘ Non abélien (<span v-html="nonCommHtml" />)
              </span>
            </div>
            <div>
              <strong>Cyclicité :</strong>
              <span v-if="isCyclicProduct && generatorRow" class="jc-status-ok">
                ✔ Cyclique (générateur <span v-html="generatorRow.pairHtml" /> d’ordre {{ prodGroup.elements.length }})
              </span>
              <span v-else class="jc-status-err">
                ✘ Non cyclique (ordre maximal {{ maxOrder }} &lt; {{ prodGroup.elements.length }})
              </span>
            </div>
          </div>
          <div v-if="inspectedCellHtml" style="margin-top: 0.5rem; overflow-x: auto;">
            <strong>Calcul composante par composante :</strong> <span v-html="inspectedCellHtml" />
          </div>
        </div>

        <div class="jc-grid-2">
          <div class="jc-panel" style="min-width: 0;">
            <div class="jc-subhead">Table de Cayley de <span v-html="renderMath(prodGroup.texName)" /></div>
            <p class="jc-hint">Cliquez sur une case pour inspecter le produit composante par composante.</p>
            <div class="cayley-wrap">
              <table class="jc-cayley-table jc-cayley-dp" aria-label="Table de Cayley du produit direct">
                <thead>
                  <tr>
                    <th scope="col" v-html="opHtml" />
                    <th v-for="(h, j) in elemHtmls" :key="`th-${j}`" scope="col" v-html="h" />
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, i) in prodGroup.table" :key="`tr-${i}`">
                    <th scope="row" v-html="elemHtmls[i]" />
                    <td
                      v-for="(val, j) in row"
                      :key="`td-${i}-${j}`"
                      :class="{
                        'cell-neutral': val === prodGroup.neutralIndex,
                        'cell-selected': inspectedCell?.[0] === i && inspectedCell?.[1] === j
                      }"
                      style="cursor: pointer;"
                      @click="inspectedCell = [i, j]"
                      v-html="elemHtmls[val]"
                    />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="jc-panel" style="min-width: 0;">
            <div class="jc-subhead">
              Ordres des couples vs <span v-html="renderMath('\\ppcm(o(x_1), o(x_2))')" />
            </div>
            <div class="cayley-wrap">
              <table class="jc-cayley-table jc-cayley-dp" aria-label="Ordres dans le produit direct">
                <thead>
                  <tr>
                    <th scope="col" v-html="renderMath('(x_1, x_2)')" />
                    <th scope="col" v-html="renderMath('o(x_1)')" />
                    <th scope="col" v-html="renderMath('o(x_2)')" />
                    <th scope="col" v-html="renderMath('\\ppcm')" />
                    <th scope="col" v-html="renderMath('o(x_1, x_2)')" />
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="row in orderRows"
                    :key="`ord-${row.idx}`"
                    :class="{ 'row-gen': row.isGenerator }"
                  >
                    <td v-html="row.pairHtml" />
                    <td>{{ row.o1 }}</td>
                    <td>{{ row.o2 }}</td>
                    <td>{{ row.lcmVal }}</td>
                    <td>
                      <strong>{{ row.prodOrder }}</strong>
                      <span v-if="row.isGenerator" class="jc-gen-pill">gén.</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </template>

      <template v-else>
        <div class="jc-controls">
          <span class="jc-ctrl-label">Exemple :</span>
          <button
            type="button"
            class="jc-btn"
            :class="{ active: univKey === 'z23' }"
            @click="univKey = 'z23'"
          >
            ℤ → ℤ/(2) × ℤ/(3)
          </button>
          <button
            type="button"
            class="jc-btn"
            :class="{ active: univKey === 'z24' }"
            @click="univKey = 'z24'"
          >
            ℤ → ℤ/(2) × ℤ/(4)
          </button>
          <button
            type="button"
            class="jc-btn"
            :class="{ active: univKey === 'polar' }"
            @click="univKey = 'polar'"
          >
            ℝ → ℝ₊* × U
          </button>

          <label class="jc-field-label" for="univ-x-range">
            <span>x = {{ univData.xTex }}</span>
            <input
              id="univ-x-range"
              v-model.number="xSlider"
              type="range"
              min="-6"
              max="12"
              step="1"
            />
          </label>
        </div>

        <div class="jc-grid-2">
          <div class="jc-panel" style="min-width: 0;">
            <svg
              viewBox="0 0 380 230"
              style="max-width: 100%; height: auto; display: block; margin: 0 auto;"
              role="img"
              aria-label="Diagramme commutatif de la propriété universelle du produit direct"
            >
              <defs>
                <marker
                  :id="`${uid}-navy`"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto"
                >
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--jc-navy)" />
                </marker>
                <marker
                  :id="`${uid}-teal`"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto"
                >
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--jc-teal)" />
                </marker>
              </defs>

              <!-- Arrows -->
              <line
                x1="190" y1="56" x2="190" y2="144"
                stroke="var(--jc-teal)" stroke-width="2.5" stroke-dasharray="6,4"
                :marker-end="`url(#${uid}-teal)`"
              />
              <line
                x1="162" y1="50" x2="72" y2="152"
                stroke="var(--jc-navy)" stroke-width="2"
                :marker-end="`url(#${uid}-navy)`"
              />
              <line
                x1="218" y1="50" x2="308" y2="152"
                stroke="var(--jc-navy)" stroke-width="2"
                :marker-end="`url(#${uid}-navy)`"
              />
              <line
                x1="126" y1="176" x2="96" y2="176"
                stroke="var(--jc-navy)" stroke-width="2"
                :marker-end="`url(#${uid}-navy)`"
              />
              <line
                x1="254" y1="176" x2="284" y2="176"
                stroke="var(--jc-navy)" stroke-width="2"
                :marker-end="`url(#${uid}-navy)`"
              />

              <!-- Nodes -->
              <rect x="148" y="16" width="84" height="36" rx="8" fill="var(--jc-navy-soft)" stroke="var(--jc-navy)" stroke-width="1.8" />
              <text x="190" y="38" text-anchor="middle" font-size="13" font-weight="700" fill="var(--jc-navy)">
                {{ univData.gText }}
              </text>

              <rect x="128" y="156" width="124" height="40" rx="8" fill="var(--jc-teal-soft)" stroke="var(--jc-teal)" stroke-width="2" />
              <text x="190" y="180" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--jc-teal)">
                {{ univData.g1Text }} × {{ univData.g2Text }}
              </text>

              <rect x="24" y="158" width="66" height="36" rx="8" fill="var(--jc-surface)" stroke="var(--jc-navy)" stroke-width="1.8" />
              <text x="57" y="180" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--jc-text)">
                {{ univData.g1Text }}
              </text>

              <rect x="290" y="158" width="66" height="36" rx="8" fill="var(--jc-surface)" stroke="var(--jc-navy)" stroke-width="1.8" />
              <text x="323" y="180" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--jc-text)">
                {{ univData.g2Text }}
              </text>

              <!-- Arrow Labels -->
              <text x="200" y="102" font-size="12" font-weight="700" fill="var(--jc-teal)">∃! h</text>
              <text x="98" y="96" font-size="12" font-weight="700" fill="var(--jc-navy)">f₁</text>
              <text x="274" y="96" font-size="12" font-weight="700" fill="var(--jc-navy)">f₂</text>
              <text x="111" y="168" text-anchor="middle" font-size="11.5" font-weight="600" fill="var(--jc-text-muted)">p₁</text>
              <text x="269" y="168" text-anchor="middle" font-size="11.5" font-weight="600" fill="var(--jc-text-muted)">p₂</text>

              <!-- Live Values -->
              <text x="57" y="213" text-anchor="middle" font-size="11" font-weight="600" fill="var(--jc-navy)">
                {{ univData.f1Short }}
              </text>
              <text x="190" y="213" text-anchor="middle" font-size="11" font-weight="600" fill="var(--jc-teal)">
                {{ univData.hShort }}
              </text>
              <text x="323" y="213" text-anchor="middle" font-size="11" font-weight="600" fill="var(--jc-navy)">
                {{ univData.f2Short }}
              </text>
            </svg>
          </div>

          <div class="jc-panel" style="min-width: 0;" data-lab-verdict>
            <div class="jc-subhead">Vérification pour la valeur choisie</div>
            <div v-for="(html, idx) in univDetailHtml" :key="`ud-${idx}`" class="jc-univ-line" v-html="html" />
            <div class="jc-univ-note" v-html="univNoteHtml" />
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<style scoped>
.jc-ctrl-label {
  font-size: 0.85rem;
  font-weight: 700;
}

.jc-field-label {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  font-weight: 600;
}

.jc-subhead {
  font-weight: 700;
  color: var(--jc-navy);
  margin-bottom: 0.35rem;
}

.jc-hint {
  font-size: 0.82rem;
  color: var(--jc-text-muted);
  margin: 0 0 0.5rem;
}

.jc-verdict-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.4rem;
  align-items: center;
}

.jc-cayley-dp th,
.jc-cayley-dp td {
  padding: 0.22rem 0.38rem;
  min-width: 2rem;
  font-size: 0.78rem;
}

.jc-cayley-dp td.cell-selected {
  outline: 2px solid var(--jc-teal);
  background: var(--jc-teal-soft);
}

.jc-cayley-dp tr.row-gen td {
  background: var(--jc-emerald-soft);
}

.jc-gen-pill {
  display: inline-block;
  margin-left: 0.25rem;
  padding: 0 0.3rem;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 700;
  background: var(--jc-emerald);
  color: var(--jc-surface);
}

.jc-univ-line {
  margin: 0.45rem 0;
  overflow-x: auto;
}

.jc-univ-note {
  margin-top: 0.75rem;
  padding: 0.55rem 0.75rem;
  border-radius: 6px;
  border-left: 3px solid var(--jc-teal);
  background: var(--jc-surface);
  font-size: 0.88rem;
}
</style>
