<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  allSubgroups,
  checkInternalDirectSum,
  cyclicGroup,
  directProduct,
  type FiniteGroup,
  type SubgroupNode
} from '../../math/groups'
import { renderMath } from '../../math/katex-macros'

type GroupId = 'z6' | 'z10' | 'z12' | 'z15' | 'z2xz2' | 'z2xz4'

interface GroupOption {
  id: GroupId
  label: string
  build: () => FiniteGroup
}

const OPTIONS: GroupOption[] = [
  { id: 'z6', label: 'ℤ/(6)', build: () => cyclicGroup(6) },
  { id: 'z10', label: 'ℤ/(10)', build: () => cyclicGroup(10) },
  { id: 'z12', label: 'ℤ/(12)', build: () => cyclicGroup(12) },
  { id: 'z15', label: 'ℤ/(15)', build: () => cyclicGroup(15) },
  {
    id: 'z2xz2',
    label: 'ℤ/(2) × ℤ/(2)',
    build: () => directProduct(cyclicGroup(2), cyclicGroup(2))
  },
  {
    id: 'z2xz4',
    label: 'ℤ/(2) × ℤ/(4)',
    build: () => directProduct(cyclicGroup(2), cyclicGroup(4))
  }
]

function findDefaultDirectPair(g: FiniteGroup, subs: SubgroupNode[]): [string, string] {
  const n = g.elements.length
  for (let i = 0; i < subs.length; i++) {
    if (subs[i].order <= 1 || subs[i].order >= n) continue
    for (let j = i + 1; j < subs.length; j++) {
      if (subs[j].order <= 1 || subs[j].order >= n) continue
      if (checkInternalDirectSum(g, subs[i].elements, subs[j].elements).isDirectSum) {
        return [subs[i].id, subs[j].id]
      }
    }
  }
  return [subs[0]?.id ?? '', subs[0]?.id ?? '']
}

const groupId = ref<GroupId>('z6')
const initialGroup = OPTIONS[0].build()
const initialSubs = allSubgroups(initialGroup)
const [initH, initK] = findDefaultDirectPair(initialGroup, initialSubs)

const hId = ref<string>(initH)
const kId = ref<string>(initK)
const selectedX = ref<number>(1)

const activeOption = computed(() => OPTIONS.find((o) => o.id === groupId.value) ?? OPTIONS[0])
const group = computed<FiniteGroup>(() => activeOption.value.build())
const subgroups = computed<SubgroupNode[]>(() => allSubgroups(group.value))

const selectedH = computed<SubgroupNode>(
  () => subgroups.value.find((s) => s.id === hId.value) ?? subgroups.value[0]
)
const selectedK = computed<SubgroupNode>(
  () => subgroups.value.find((s) => s.id === kId.value) ?? subgroups.value[0]
)

const report = computed(() =>
  checkInternalDirectSum(group.value, selectedH.value.elements, selectedK.value.elements)
)

const sumSet = computed(() => new Set(report.value.hk))
const missingElements = computed<number[]>(() =>
  group.value.elements
    .map((_, idx) => idx)
    .filter((idx) => !sumSet.value.has(idx))
)

const elemHtmls = computed(() =>
  group.value.elementTex.map((t) => renderMath(t))
)

const activeDecomposition = computed<{ x: number; h: number; k: number } | null>(() => {
  if (!report.value.decompositions) return null
  const x = selectedX.value < group.value.elements.length ? selectedX.value : 0
  return report.value.decompositions[x] ?? null
})

function formatSetTex(indices: readonly number[]): string {
  return `\\{ ${indices.map((i) => group.value.elementTex[i]).join(', ')} \\}`
}

const summaryHtml = computed(() => {
  const g = group.value
  const H = selectedH.value
  const K = selectedK.value
  const r = report.value

  const nonZeroInter = r.intersection.find((idx) => idx !== g.neutralIndex)
  const zeroTex = g.elementTex[g.neutralIndex]

  let failureDetail = ''
  if (!r.trivialIntersection && nonZeroInter !== undefined) {
    const zTex = g.elementTex[nonZeroInter]
    failureDetail = renderMath(
      `${zTex} = ${zTex} + ${zeroTex} = ${zeroTex} + ${zTex}`
    )
  }

  let decompEq = ''
  if (activeDecomposition.value) {
    const { x, h, k } = activeDecomposition.value
    decompEq = renderMath(
      `${g.elementTex[x]} = ${g.elementTex[h]} + ${g.elementTex[k]} \\quad (${g.elementTex[h]} \\in H,\\; ${g.elementTex[k]} \\in K)`
    )
  }

  return {
    gTex: renderMath(g.texName),
    hTex: renderMath(`H = ${H.texLabel} = ${formatSetTex(H.elements)}`),
    kTex: renderMath(`K = ${K.texLabel} = ${formatSetTex(K.elements)}`),
    interTex: renderMath(`H \\cap K = ${formatSetTex(r.intersection)}`),
    sumTex: renderMath(`H + K = ${formatSetTex(r.hk)}`),
    missingTex:
      missingElements.value.length > 0
        ? renderMath(`G \\setminus (H + K) = ${formatSetTex(missingElements.value)}`)
        : '',
    failureDetail,
    decompEq
  }
})

function selectGroup(id: GroupId) {
  groupId.value = id
  const opt = OPTIONS.find((o) => o.id === id) ?? OPTIONS[0]
  const g = opt.build()
  const subs = allSubgroups(g)
  const [dh, dk] = findDefaultDirectPair(g, subs)
  hId.value = dh
  kId.value = dk
  selectedX.value = Math.min(1, g.elements.length - 1)
}

function loadCanonicalDirectSum() {
  const [dh, dk] = findDefaultDirectPair(group.value, subgroups.value)
  hId.value = dh
  kId.value = dk
}

function selectDecompositionByCell(h: number, k: number) {
  selectedX.value = group.value.table[h][k]
}
</script>

<template>
  <section class="jc-lab-card" data-lab="direct-sum">
    <header class="jc-card-header">
      <div class="jc-card-title">
        Laboratoire — Somme directe interne de sous-groupes H ⊕ K
      </div>
      <span class="jc-fold-badge">Déf. (1.50) &amp; Prop. (1.51) · I § 2 D</span>
    </header>

    <div class="jc-card-body">
      <div class="jc-controls">
        <span class="jc-ds-lbl">Groupe abélien (G, +) :</span>
        <button
          v-for="opt in OPTIONS"
          :key="opt.id"
          type="button"
          class="jc-btn"
          :class="{ active: groupId === opt.id }"
          @click="selectGroup(opt.id)"
        >
          {{ opt.label }}
        </button>
      </div>

      <div class="jc-controls jc-ds-subpickers">
        <label class="jc-ds-ctrl">
          <span class="jc-ds-lbl">Sous-groupe H :</span>
          <select v-model="hId" class="jc-select" aria-label="Choisir le sous-groupe H">
            <option v-for="sub in subgroups" :key="`h-${sub.id}`" :value="sub.id">
              {{ sub.order === group.elements.length ? activeOption.label : sub.label }} (ordre {{ sub.order }})
            </option>
          </select>
        </label>

        <label class="jc-ds-ctrl">
          <span class="jc-ds-lbl">Sous-groupe K :</span>
          <select v-model="kId" class="jc-select" aria-label="Choisir le sous-groupe K">
            <option v-for="sub in subgroups" :key="`k-${sub.id}`" :value="sub.id">
              {{ sub.order === group.elements.length ? activeOption.label : sub.label }} (ordre {{ sub.order }})
            </option>
          </select>
        </label>

        <button type="button" class="jc-btn teal" @click="loadCanonicalDirectSum">
          Trouver G = H ⊕ K
        </button>
      </div>

      <div class="jc-panel" style="margin-bottom: 0.9rem;">
        <div class="jc-ds-line">
          <span v-html="summaryHtml.hTex" /> &nbsp;|&nbsp; <span v-html="summaryHtml.kTex" />
        </div>
        <div class="jc-ds-line">
          <strong>1. Intersection :</strong> <span v-html="summaryHtml.interTex" />
          <span v-if="report.trivialIntersection" class="jc-status-ok" style="margin-left: 0.4rem;">
            ✔ H ∩ K = (0)
          </span>
          <span v-else class="jc-status-err" style="margin-left: 0.4rem;">
            ✘ Intersection non triviale (unicité perdue : <span v-html="summaryHtml.failureDetail" />)
          </span>
        </div>
        <div class="jc-ds-line">
          <strong>2. Somme :</strong> <span v-html="summaryHtml.sumTex" />
          (cardinal {{ report.hk.length }} / {{ group.elements.length }})
          <span v-if="report.spansGroup" class="jc-status-ok" style="margin-left: 0.4rem;">
            ✔ H + K = G
          </span>
          <span v-else class="jc-status-err" style="margin-left: 0.4rem;">
            ✘ H + K ≠ G — éléments non atteints : <span v-html="summaryHtml.missingTex" />
          </span>
        </div>
        <div class="jc-ds-line" style="margin-top: 0.45rem;">
          <strong v-if="report.isDirectSum" class="jc-status-ok">
            ✔ G = H ⊕ K : tout élément x ∈ G s’écrit de manière unique x = h + k (h ∈ H, k ∈ K).
          </strong>
          <strong v-else-if="report.trivialIntersection && !report.spansGroup" class="jc-status-err">
            ✘ La somme H + K est directe (H ⊕ K), mais elle reste strictement incluse dans G.
          </strong>
          <strong v-else class="jc-status-err">
            ✘ H et K ne forment pas une décomposition en somme directe de G.
          </strong>
        </div>
      </div>

      <div v-if="report.isDirectSum" class="jc-grid-2">
        <div class="jc-ds-matrix-col">
          <div class="jc-ds-subhead">
            Grille des décompositions uniques h + k (cliquez une case) :
          </div>
          <div class="cayley-wrap">
            <table class="jc-cayley-table" aria-label="Matrice des décompositions h + k">
              <thead>
                <tr>
                  <th scope="col">H \ K</th>
                  <th
                    v-for="k in selectedK.elements"
                    :key="`ck-${k}`"
                    scope="col"
                    v-html="elemHtmls[k]"
                  />
                </tr>
              </thead>
              <tbody>
                <tr v-for="h in selectedH.elements" :key="`rh-${h}`">
                  <th scope="row" v-html="elemHtmls[h]" />
                  <td
                    v-for="k in selectedK.elements"
                    :key="`cell-${h}-${k}`"
                    tabindex="0"
                    :class="{
                      'cell-active': group.table[h][k] === selectedX,
                      'cell-axis':
                        activeDecomposition &&
                        (activeDecomposition.h === h || activeDecomposition.k === k) &&
                        group.table[h][k] !== selectedX
                    }"
                    style="cursor: pointer;"
                    :aria-label="`${group.elements[h]} + ${group.elements[k]} = ${group.elements[group.table[h][k]]}`"
                    @click="selectDecompositionByCell(h, k)"
                    @keydown.enter.prevent="selectDecompositionByCell(h, k)"
                    @keydown.space.prevent="selectDecompositionByCell(h, k)"
                    v-html="elemHtmls[group.table[h][k]]"
                  />
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="jc-panel">
          <div class="jc-ds-subhead">
            Inspecter l’écriture unique de chaque x ∈ G :
          </div>
          <div class="jc-ds-x-list">
            <button
              v-for="(html, idx) in elemHtmls"
              :key="`gx-${idx}`"
              type="button"
              class="jc-btn"
              :class="{ active: selectedX === idx }"
              @click="selectedX = idx"
              v-html="html"
            />
          </div>
          <div v-if="summaryHtml.decompEq" class="jc-ds-result-box">
            <div style="font-size: 0.83rem; color: var(--jc-text-muted); margin-bottom: 0.25rem;">
              Décomposition unique dans H ⊕ K :
            </div>
            <div style="font-size: 1.05rem;" v-html="summaryHtml.decompEq" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.jc-ds-lbl {
  font-size: 0.84rem;
  font-weight: 700;
  color: var(--jc-text);
}

.jc-ds-subpickers {
  justify-content: flex-start;
}

.jc-ds-ctrl {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
}

.jc-ds-line {
  margin-top: 0.35rem;
  line-height: 1.55;
}

.jc-ds-line:first-child {
  margin-top: 0;
}

.jc-ds-matrix-col {
  min-width: 0;
}

.jc-ds-subhead {
  font-size: 0.86rem;
  font-weight: 700;
  color: var(--jc-navy);
  margin-bottom: 0.45rem;
}

.jc-ds-x-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-bottom: 0.75rem;
}

.jc-ds-result-box {
  padding: 0.65rem 0.8rem;
  border-radius: 8px;
  border: 1px solid var(--jc-teal);
  background: var(--jc-teal-soft);
}

table.jc-cayley-table td.cell-active {
  background: var(--jc-teal);
  color: var(--jc-surface);
  font-weight: 700;
}

table.jc-cayley-table td.cell-axis {
  background: var(--jc-teal-soft);
}

.jc-panel {
  min-width: 0;
}
</style>
