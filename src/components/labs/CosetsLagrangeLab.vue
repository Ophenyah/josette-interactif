<script setup lang="ts">
import { computed, ref, useId } from 'vue'
import {
  allSubgroups,
  cyclicGroup,
  dihedralGroup,
  kleinGroup,
  leftCosets,
  quaternionGroup,
  rightCosets,
  subgroupIndex,
  symmetricGroup,
  type Coset,
  type FiniteGroup,
  type SubgroupNode
} from '../../math/groups'
import { renderMath } from '../../math/katex-macros'

type TabKey = 'cosets' | 'plane' | 'tower'
type GroupKey = 's3' | 'd4' | 'q8' | 'z12' | 'v4'

const GROUPS: Array<{ key: GroupKey; label: string; group: FiniteGroup }> = [
  { key: 's3', label: 'S₃', group: symmetricGroup(3) },
  { key: 'd4', label: 'D₄', group: dihedralGroup(4) },
  { key: 'q8', label: 'Q₈', group: quaternionGroup() },
  { key: 'z12', label: 'ℤ/(12)', group: cyclicGroup(12) },
  { key: 'v4', label: 'Klein V', group: kleinGroup() }
]

const TOWER_GROUPS: Array<{ key: GroupKey; label: string; group: FiniteGroup }> = [
  { key: 'd4', label: 'D₄', group: dihedralGroup(4) },
  { key: 'z12', label: 'ℤ/(12)', group: cyclicGroup(12) },
  { key: 's3', label: 'S₃', group: symmetricGroup(3) },
  { key: 'q8', label: 'Q₈', group: quaternionGroup() }
]

const uid = useId()
const activeTab = ref<TabKey>('cosets')

function getGroup(key: GroupKey): FiniteGroup {
  return (GROUPS.find((g) => g.key === key) ?? GROUPS[0]).group
}

function formatCosetLabel(
  group: FiniteGroup,
  repIdx: number,
  side: 'right' | 'left',
  subSymbol = 'H'
): string {
  if (repIdx === group.neutralIndex) return subSymbol
  const repTex = group.elementTex[repIdx]
  if (group.opSymbol === '+') {
    return side === 'right' ? `${subSymbol} + ${repTex}` : `${repTex} + ${subSymbol}`
  }
  return side === 'right' ? `${subSymbol}${repTex}` : `${repTex}${subSymbol}`
}

function formatSetTex(group: FiniteGroup, indices: readonly number[]): string {
  return `\\{ ${indices.map((i) => group.elementTex[i]).join(', ')} \\}`
}

// =========================================================================
// Onglet 1 : Classes à droite / à gauche & Lagrange
// =========================================================================
const groupKey = ref<GroupKey>('s3')
const group = computed(() => getGroup(groupKey.value))
const subgroups = computed(() => allSubgroups(group.value))

// Par défaut dans S3 : <tau_3> = {e, tau_3} (Exemple 2.4)
const defaultSubId = (subs: SubgroupNode[]): string => {
  const nonNormal = subs.find((s) => !s.isNormal && s.order > 1)
  if (nonNormal) return nonNormal.id
  const proper = subs.find((s) => s.order > 1 && s.order < subs[subs.length - 1].order)
  return proper?.id ?? subs[0].id
}

const selectedSubId = ref<string>(defaultSubId(allSubgroups(getGroup('s3'))))

const activeSub = computed<SubgroupNode>(() => {
  return subgroups.value.find((s) => s.id === selectedSubId.value) ?? subgroups.value[0]
})

const rCosets = computed(() => rightCosets(group.value, activeSub.value.elements))
const lCosets = computed(() => leftCosets(group.value, activeSub.value.elements))
const indexVal = computed(() => subgroupIndex(group.value, activeSub.value.elements))
const isNormal = computed(() => activeSub.value.isNormal)

const lagrangeHtml = computed(() => {
  const g = group.value
  const h = activeSub.value
  return renderMath(
    `o(${g.texName}) = o(H)\\,[${g.texName} : H] \\;:\\; ${g.elements.length} = ${h.order} \\times ${indexVal.value}`
  )
})

const nonNormalWitnessHtml = computed(() => {
  if (isNormal.value) return ''
  const g = group.value
  const hElems = activeSub.value.elements
  for (let x = 0; x < g.elements.length; x++) {
    const hx = Array.from(new Set(hElems.map((h) => g.table[h][x]))).sort((a, b) => a - b)
    const xh = Array.from(new Set(hElems.map((h) => g.table[x][h]))).sort((a, b) => a - b)
    if (hx.some((val, idx) => val !== xh[idx])) {
      return renderMath(
        `${formatCosetLabel(g, x, 'right')} = ${formatSetTex(g, hx)} \\neq ${formatSetTex(g, xh)} = ${formatCosetLabel(g, x, 'left')}`
      )
    }
  }
  return ''
})

function selectCosetGroup(nextKey: GroupKey) {
  groupKey.value = nextKey
  const subs = allSubgroups(getGroup(nextKey))
  selectedSubId.value = defaultSubId(subs)
}

function elementCosetIndex(cosets: readonly Coset[], elemIdx: number): number {
  return cosets.findIndex((c) => c.elements.includes(elemIdx))
}

// =========================================================================
// Onglet 2 : (R^2, +) géométrique
// =========================================================================
const angleDeg = ref<number>(27) // ~ pente 1/2 : Vect((2, 1))
const ptX = ref<number>(1.5)
const ptY = ref<number>(1.2)

const PLANE_CX = 160
const PLANE_CY = 130
const PLANE_SCALE = 30

const dirVec = computed(() => {
  const rad = (angleDeg.value * Math.PI) / 180
  return { ux: Math.cos(rad), uy: Math.sin(rad) }
})

const normVec = computed(() => ({
  nx: -dirVec.value.uy,
  ny: dirVec.value.ux
}))

function toPx(x: number, y: number): [number, number] {
  return [PLANE_CX + x * PLANE_SCALE, PLANE_CY - y * PLANE_SCALE]
}

function lineSegmentForOffset(offsetAlongNormal: number): { x1: number; y1: number; x2: number; y2: number } {
  const { ux, uy } = dirVec.value
  const { nx, ny } = normVec.value
  const bx = offsetAlongNormal * nx
  const by = offsetAlongNormal * ny
  const [x1, y1] = toPx(bx - ux * 8, by - uy * 8)
  const [x2, y2] = toPx(bx + ux * 8, by + uy * 8)
  return { x1, y1, x2, y2 }
}

const ptOffsetNormal = computed(() => {
  return ptX.value * normVec.value.nx + ptY.value * normVec.value.ny
})

const backgroundCosetLines = computed(() => {
  const lines: Array<{ k: number; x1: number; y1: number; x2: number; y2: number }> = []
  for (let k = -5; k <= 5; k++) {
    if (k === 0) continue
    lines.push({ k, ...lineSegmentForOffset(k * 0.8) })
  }
  return lines
})

const hLine = computed(() => lineSegmentForOffset(0))
const cosetLine = computed(() => lineSegmentForOffset(ptOffsetNormal.value))
const ptPx = computed(() => toPx(ptX.value, ptY.value))
const isXinH = computed(() => Math.abs(ptOffsetNormal.value) < 0.08)

const planeSubgroupTex = computed(() => {
  if (angleDeg.value === 90) return 'H = \\R \\cdot (0, 1) = \\{(0, t) \\mid t \\in \\R\\}'
  if (angleDeg.value === 0 || angleDeg.value === 180) return 'H = \\R \\cdot (1, 0) = \\{(t, 0) \\mid t \\in \\R\\}'
  const slope = Math.tan((angleDeg.value * Math.PI) / 180)
  return `H = \\R \\cdot (${dirVec.value.ux.toFixed(2)},\\, ${dirVec.value.uy.toFixed(2)}) \\; (\\text{pente } ${slope.toFixed(2)})`
})

function onPlaneClick(ev: MouseEvent) {
  const svg = ev.currentTarget as SVGSVGElement | null
  if (!svg) return
  const rect = svg.getBoundingClientRect()
  if (rect.width === 0 || rect.height === 0) return
  const sx = ((ev.clientX - rect.left) / rect.width) * 320
  const sy = ((ev.clientY - rect.top) / rect.height) * 260
  const x = Math.max(-4.5, Math.min(4.5, (sx - PLANE_CX) / PLANE_SCALE))
  const y = Math.max(-3.8, Math.min(3.8, (PLANE_CY - sy) / PLANE_SCALE))
  ptX.value = Math.round(x * 10) / 10
  ptY.value = Math.round(y * 10) / 10
}

function nudgePoint(dx: number, dy: number) {
  ptX.value = Math.round(Math.max(-4.5, Math.min(4.5, ptX.value + dx)) * 10) / 10
  ptY.value = Math.round(Math.max(-3.8, Math.min(3.8, ptY.value + dy)) * 10) / 10
}

function setSlopePreset(deg: number) {
  angleDeg.value = deg
}

function snapPointToH() {
  ptX.value = Math.round(dirVec.value.ux * 2 * 10) / 10
  ptY.value = Math.round(dirVec.value.uy * 2 * 10) / 10
}

// =========================================================================
// Onglet 3 : Formule des indices (Thm 2.18) K <= H <= G
// =========================================================================
const towerGroupKey = ref<GroupKey>('d4')
const towerGroup = computed(() => getGroup(towerGroupKey.value))
const towerSubs = computed(() => allSubgroups(towerGroup.value))

function pickInitialTower(subs: SubgroupNode[]): { hId: string; kId: string } {
  const midH = subs.find((s) => s.order > 1 && s.order < subs[subs.length - 1].order && s.order >= 4)
    ?? subs.find((s) => s.order > 1 && s.order < subs[subs.length - 1].order)
    ?? subs[subs.length - 1]
  const hSet = new Set(midH.elements)
  const midK = subs.find((s) => s.order > 1 && s.order < midH.order && s.elements.every((x) => hSet.has(x)))
    ?? subs[0]
  return { hId: midH.id, kId: midK.id }
}

const initialTower = pickInitialTower(allSubgroups(getGroup('d4')))
const towerHId = ref<string>(initialTower.hId)
const towerKId = ref<string>(initialTower.kId)

const towerH = computed(() => towerSubs.value.find((s) => s.id === towerHId.value) ?? towerSubs.value[0])
const towerK = computed(() => towerSubs.value.find((s) => s.id === towerKId.value) ?? towerSubs.value[0])

const kNotInHElement = computed<number | null>(() => {
  const hSet = new Set(towerH.value.elements)
  return towerK.value.elements.find((x) => !hSet.has(x)) ?? null
})

const isValidTower = computed(() => kNotInHElement.value === null)

interface NestedCosetBlock {
  hRep: number
  hCosetLabelHtml: string
  kBlocks: Array<{
    kRep: number
    labelHtml: string
    elements: number[]
    colorIdx: number
  }>
}

const towerNesting = computed(() => {
  if (!isValidTower.value) return null
  const g = towerGroup.value
  const hElems = towerH.value.elements
  const kElems = towerK.value.elements

  const hCosets = rightCosets(g, hElems)
  const kInHCosets: number[][] = []
  const visitedInH = new Set<number>()
  for (const hRep of hElems) {
    if (visitedInH.has(hRep)) continue
    const block = Array.from(new Set(kElems.map((k) => g.table[k][hRep]))).sort((a, b) => a - b)
    block.forEach((el) => visitedInH.add(el))
    kInHCosets.push(block)
  }

  let globalColor = 0
  const nested: NestedCosetBlock[] = hCosets.map((hc) => {
    const kBlocks = kInHCosets.map((khBlock) => {
      const shifted = Array.from(new Set(khBlock.map((el) => g.table[el][hc.representative]))).sort(
        (a, b) => a - b
      )
      const rep = shifted[0]
      const cIdx = globalColor++
      return {
        kRep: rep,
        labelHtml: renderMath(formatCosetLabel(g, rep, 'right', 'K')),
        elements: shifted,
        colorIdx: cIdx
      }
    })
    return {
      hRep: hc.representative,
      hCosetLabelHtml: renderMath(formatCosetLabel(g, hc.representative, 'right')),
      kBlocks
    }
  })

  const idxGH = hCosets.length
  const idxHK = kInHCosets.length
  const idxGK = idxGH * idxHK
  return { nested, idxGH, idxHK, idxGK }
})

const towerFormulaHtml = computed(() => {
  if (!towerNesting.value) return ''
  const { idxGH, idxHK, idxGK } = towerNesting.value
  return renderMath(`[G : K] = [G : H]\\,[H : K] \\;:\\; ${idxGK} = ${idxGH} \\times ${idxHK}`)
})

function selectTowerGroup(nextKey: GroupKey) {
  towerGroupKey.value = nextKey
  const picked = pickInitialTower(allSubgroups(getGroup(nextKey)))
  towerHId.value = picked.hId
  towerKId.value = picked.kId
}

function fixKInsideH() {
  const hSet = new Set(towerH.value.elements)
  const candidate = towerSubs.value.find(
    (s) => s.order > 1 && s.order < towerH.value.order && s.elements.every((x) => hSet.has(x))
  ) ?? towerSubs.value[0]
  towerKId.value = candidate.id
}
</script>

<template>
  <section class="jc-lab-card" data-lab="cosets-lagrange">
    <header class="jc-card-header">
      <div class="jc-card-title">
        Laboratoire — Classes modulo <span v-html="renderMath('H')" />, théorème de Lagrange &amp; formule des indices
      </div>
      <span class="jc-fold-badge">II § 1 — Théorèmes (2.9) &amp; (2.18)</span>
    </header>

    <div class="jc-card-body">
      <div class="jc-controls" role="tablist" aria-label="Onglets des classes et Lagrange">
        <button
          type="button"
          role="tab"
          :aria-selected="activeTab === 'cosets'"
          class="jc-btn"
          :class="{ active: activeTab === 'cosets' }"
          @click="activeTab = 'cosets'"
        >
          Classes à droite / à gauche &amp; Lagrange
        </button>
        <button
          type="button"
          role="tab"
          :aria-selected="activeTab === 'plane'"
          class="jc-btn"
          :class="{ active: activeTab === 'plane' }"
          @click="activeTab = 'plane'"
        >
          (ℝ², +) géométrique
        </button>
        <button
          type="button"
          role="tab"
          :aria-selected="activeTab === 'tower'"
          class="jc-btn"
          :class="{ active: activeTab === 'tower' }"
          @click="activeTab = 'tower'"
        >
          Formule des indices (Thm 2.18)
        </button>
      </div>

      <!-- ONGLET 1 -->
      <template v-if="activeTab === 'cosets'">
        <div class="jc-controls">
          <span class="jc-ctrl-label">Groupe G :</span>
          <button
            v-for="item in GROUPS"
            :key="item.key"
            type="button"
            class="jc-btn"
            :class="{ active: groupKey === item.key }"
            @click="selectCosetGroup(item.key)"
          >
            {{ item.label }}
          </button>

          <label class="jc-field-label" for="coset-sub-select">
            <span>Sous-groupe H :</span>
            <select id="coset-sub-select" v-model="selectedSubId" class="jc-select">
              <option v-for="sub in subgroups" :key="sub.id" :value="sub.id">
                {{ sub.label }} — ordre {{ sub.order }} ({{ sub.isNormal ? 'distingué' : 'non distingué' }})
              </option>
            </select>
          </label>
        </div>

        <div class="jc-panel" style="margin-bottom: 0.9rem;" data-lab-verdict>
          <div class="jc-lagrange-row">
            <span><strong>Égalité de Lagrange :</strong> <span v-html="lagrangeHtml" /></span>
            <span v-if="isNormal" class="jc-status-ok">
              ✔ H est distingué : Hx = xH pour tout x ∈ G
            </span>
            <span v-else class="jc-status-err">
              ✘ Non distingué : <span v-html="nonNormalWitnessHtml" />
            </span>
          </div>

          <div class="jc-tiling-section">
            <div class="jc-tiling-label">Pavage de G en classes à droite :</div>
            <div class="jc-tiling-bar">
              <span
                v-for="(el, i) in group.elements"
                :key="`tile-r-${i}`"
                class="jc-tile"
                :class="`pal-${elementCosetIndex(rCosets, i) % 12}`"
                v-html="renderMath(group.elementTex[i])"
              />
            </div>
            <div class="jc-tiling-label" style="margin-top: 0.45rem;">Pavage de G en classes à gauche :</div>
            <div class="jc-tiling-bar">
              <span
                v-for="(el, i) in group.elements"
                :key="`tile-l-${i}`"
                class="jc-tile"
                :class="`pal-${elementCosetIndex(lCosets, i) % 12}`"
                v-html="renderMath(group.elementTex[i])"
              />
            </div>
          </div>
        </div>

        <div class="jc-grid-2">
          <div class="jc-panel" style="min-width: 0;">
            <div class="jc-subhead">
              Classes à droite (<span v-html="renderMath(`(${group.texName}/H)_d`)" />) — indice {{ rCosets.length }}
            </div>
            <div class="jc-coset-stack">
              <div
                v-for="(c, idx) in rCosets"
                :key="`rc-${idx}`"
                class="jc-coset-pill"
                :class="`pal-${idx % 12}`"
                v-html="renderMath(`${formatCosetLabel(group, c.representative, 'right')} = ${formatSetTex(group, c.elements)}`)"
              />
            </div>
          </div>

          <div class="jc-panel" style="min-width: 0;">
            <div class="jc-subhead">
              Classes à gauche (<span v-html="renderMath(`(${group.texName}/H)_g`)" />) — indice {{ lCosets.length }}
            </div>
            <div class="jc-coset-stack">
              <div
                v-for="(c, idx) in lCosets"
                :key="`lc-${idx}`"
                class="jc-coset-pill"
                :class="`pal-${idx % 12}`"
                v-html="renderMath(`${formatCosetLabel(group, c.representative, 'left')} = ${formatSetTex(group, c.elements)}`)"
              />
            </div>
          </div>
        </div>
      </template>

      <!-- ONGLET 2 -->
      <template v-else-if="activeTab === 'plane'">
        <div class="jc-controls">
          <span class="jc-ctrl-label">Pente de H :</span>
          <button type="button" class="jc-btn" :class="{ active: angleDeg === 27 }" @click="setSlopePreset(27)">
            Vect(2, 1)
          </button>
          <button type="button" class="jc-btn" :class="{ active: angleDeg === 45 }" @click="setSlopePreset(45)">
            Vect(1, 1)
          </button>
          <button type="button" class="jc-btn" :class="{ active: angleDeg === 0 }" @click="setSlopePreset(0)">
            Axe Ox
          </button>
          <button type="button" class="jc-btn" :class="{ active: angleDeg === 90 }" @click="setSlopePreset(90)">
            Axe Oy
          </button>
          <button type="button" class="jc-btn" :class="{ active: angleDeg === 117 }" @click="setSlopePreset(117)">
            Vect(−1, 2)
          </button>

          <label class="jc-field-label" for="plane-angle">
            <span>Angle {{ angleDeg }}°</span>
            <input id="plane-angle" v-model.number="angleDeg" type="range" min="0" max="175" step="1" />
          </label>
        </div>

        <div class="jc-controls">
          <label class="jc-field-label" for="plane-x1">
            <span>x₁ = {{ ptX.toFixed(1) }}</span>
            <input id="plane-x1" v-model.number="ptX" type="range" min="-4.5" max="4.5" step="0.1" />
          </label>
          <label class="jc-field-label" for="plane-x2">
            <span>x₂ = {{ ptY.toFixed(1) }}</span>
            <input id="plane-x2" v-model.number="ptY" type="range" min="-3.8" max="3.8" step="0.1" />
          </label>
          <button type="button" class="jc-btn teal active" @click="snapPointToH">
            Placer x ∈ H
          </button>
        </div>

        <div class="jc-grid-2">
          <div class="jc-panel" style="min-width: 0;">
            <svg
              viewBox="0 0 320 260"
              style="max-width: 100%; height: auto; display: block; margin: 0 auto; cursor: crosshair;"
              tabindex="0"
              role="img"
              aria-label="Plan R2 pavé par les droites affines parallèles à H (cliquez ou utilisez les flèches pour déplacer x)"
              @click="onPlaneClick"
              @keydown.left.prevent="nudgePoint(-0.2, 0)"
              @keydown.right.prevent="nudgePoint(0.2, 0)"
              @keydown.up.prevent="nudgePoint(0, 0.2)"
              @keydown.down.prevent="nudgePoint(0, -0.2)"
            >
              <defs>
                <clipPath :id="`${uid}-clip`">
                  <rect x="8" y="8" width="304" height="244" rx="6" />
                </clipPath>
                <marker
                  :id="`${uid}-vec`"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="5.5"
                  markerHeight="5.5"
                  orient="auto"
                >
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--jc-amber)" />
                </marker>
              </defs>

              <rect x="8" y="8" width="304" height="244" rx="6" fill="var(--jc-surface)" stroke="var(--jc-border)" />

              <g :clip-path="`url(#${uid}-clip)`">
                <!-- Grid -->
                <line
                  v-for="g in 9"
                  :key="`gx-${g}`"
                  :x1="PLANE_CX + (g - 5) * PLANE_SCALE"
                  y1="8"
                  :x2="PLANE_CX + (g - 5) * PLANE_SCALE"
                  y2="252"
                  stroke="var(--jc-border)"
                  stroke-opacity="0.35"
                />
                <line
                  v-for="g in 9"
                  :key="`gy-${g}`"
                  x1="8"
                  :y1="PLANE_CY - (g - 5) * PLANE_SCALE"
                  x2="312"
                  :y2="PLANE_CY - (g - 5) * PLANE_SCALE"
                  stroke="var(--jc-border)"
                  stroke-opacity="0.35"
                />
                <line x1="8" :y1="PLANE_CY" x2="312" :y2="PLANE_CY" stroke="var(--jc-border)" stroke-width="1.4" />
                <line :x1="PLANE_CX" y1="8" :x2="PLANE_CX" y2="252" stroke="var(--jc-border)" stroke-width="1.4" />

                <!-- Background parallel cosets -->
                <line
                  v-for="ln in backgroundCosetLines"
                  :key="`cos-${ln.k}`"
                  :x1="ln.x1"
                  :y1="ln.y1"
                  :x2="ln.x2"
                  :y2="ln.y2"
                  stroke="var(--jc-slate)"
                  stroke-opacity="0.28"
                  stroke-width="1.2"
                  stroke-dasharray="3,4"
                />

                <!-- Subgroup H -->
                <line
                  :x1="hLine.x1"
                  :y1="hLine.y1"
                  :x2="hLine.x2"
                  :y2="hLine.y2"
                  stroke="var(--jc-navy)"
                  stroke-width="2.6"
                />

                <!-- Active coset H + x -->
                <line
                  :x1="cosetLine.x1"
                  :y1="cosetLine.y1"
                  :x2="cosetLine.x2"
                  :y2="cosetLine.y2"
                  stroke="var(--jc-teal)"
                  stroke-width="2.6"
                  stroke-dasharray="6,4"
                />

                <!-- Translation vector Ox -->
                <line
                  :x1="PLANE_CX"
                  :y1="PLANE_CY"
                  :x2="ptPx[0]"
                  :y2="ptPx[1]"
                  stroke="var(--jc-amber)"
                  stroke-width="1.7"
                  stroke-dasharray="4,3"
                  :marker-end="`url(#${uid}-vec)`"
                />

                <circle :cx="PLANE_CX" :cy="PLANE_CY" r="4.5" fill="var(--jc-navy)" />
                <circle :cx="ptPx[0]" :cy="ptPx[1]" r="6.5" fill="var(--jc-teal)" stroke="var(--jc-surface)" stroke-width="2" />
              </g>
            </svg>
          </div>

          <div class="jc-panel" style="min-width: 0;" data-lab-verdict>
            <div class="jc-subhead">Interprétation géométrique dans <span v-html="renderMath('(\\R^2, +)')" /></div>
            <p class="jc-diag-line">
              <strong>Sous-groupe choisi :</strong> <span v-html="renderMath(planeSubgroupTex)" />
            </p>
            <p class="jc-diag-line">
              <strong>Représentant :</strong> <span v-html="renderMath(`x = (${ptX.toFixed(1)},\\; ${ptY.toFixed(1)})`)" />
            </p>
            <p class="jc-diag-line">
              <strong>Classe modulo H :</strong> la droite affine parallèle <span v-html="renderMath('H + x = x + H')" /> (trait pointillé vert).
            </p>
            <p v-if="isXinH" class="jc-status-ok">
              ✔ Comme x ∈ H, on retrouve H + x = H !
            </p>
            <p v-else class="jc-hint">
              Cliquez n’importe où dans le plan ou utilisez les curseurs pour déplacer x : les droites parallèles à H forment une partition exacte de ℝ².
            </p>
          </div>
        </div>
      </template>

      <!-- ONGLET 3 -->
      <template v-else>
        <div class="jc-controls">
          <span class="jc-ctrl-label">Groupe G :</span>
          <button
            v-for="item in TOWER_GROUPS"
            :key="`tw-${item.key}`"
            type="button"
            class="jc-btn"
            :class="{ active: towerGroupKey === item.key }"
            @click="selectTowerGroup(item.key)"
          >
            {{ item.label }}
          </button>

          <label class="jc-field-label" for="tower-k-select">
            <span>K :</span>
            <select id="tower-k-select" v-model="towerKId" class="jc-select">
              <option v-for="sub in towerSubs" :key="`tk-${sub.id}`" :value="sub.id">
                {{ sub.label }} (ordre {{ sub.order }})
              </option>
            </select>
          </label>

          <label class="jc-field-label" for="tower-h-select">
            <span>H :</span>
            <select id="tower-h-select" v-model="towerHId" class="jc-select">
              <option v-for="sub in towerSubs" :key="`th-${sub.id}`" :value="sub.id">
                {{ sub.label }} (ordre {{ sub.order }})
              </option>
            </select>
          </label>
        </div>

        <div class="jc-panel" data-lab-verdict>
          <template v-if="!isValidTower && kNotInHElement !== null">
            <div class="jc-status-err" style="margin-bottom: 0.5rem;">
              ✘ Chaîne invalide : K n’est pas inclus dans H !
            </div>
            <p>
              L’élément
              <span v-html="renderMath(towerGroup.elementTex[kNotInHElement])" />
              appartient à K mais pas à H.
            </p>
            <button type="button" class="jc-btn primary" @click="fixKInsideH">
              Choisir un sous-groupe K ⊆ H
            </button>
          </template>

          <template v-else-if="towerNesting">
            <div class="jc-lagrange-row" style="margin-bottom: 0.75rem;">
              <span class="jc-status-ok">
                ✔ Chaîne valide <span v-html="renderMath(`K \\leqslant H \\leqslant ${towerGroup.texName}`)" />
                (ordres {{ towerK.order }} | {{ towerH.order }} | {{ towerGroup.elements.length }})
              </span>
              <span v-html="towerFormulaHtml" />
            </div>

            <div class="jc-tower-grid">
              <div
                v-for="(hBlock, hIdx) in towerNesting.nested"
                :key="`hb-${hIdx}`"
                class="jc-h-block"
              >
                <div class="jc-h-title">
                  Classe <span v-html="hBlock.hCosetLabelHtml" />
                  <span class="jc-hint-inline">({{ hBlock.kBlocks.length }} classes de K)</span>
                </div>
                <div class="jc-k-list">
                  <div
                    v-for="(kb, kIdx) in hBlock.kBlocks"
                    :key="`kb-${hIdx}-${kIdx}`"
                    class="jc-coset-pill"
                    :class="`pal-${kb.colorIdx % 12}`"
                    v-html="renderMath(`${formatCosetLabel(towerGroup, kb.kRep, 'right', 'K')} = ${formatSetTex(towerGroup, kb.elements)}`)"
                  />
                </div>
              </div>
            </div>
          </template>
        </div>
      </template>
    </div>
  </section>
</template>

<style scoped>
.jc-lab-card {
  --pal-bg-0: #dbeafe; --pal-bd-0: #2563eb; --pal-fg-0: #1e3a8a;
  --pal-bg-1: #d1fae5; --pal-bd-1: #059669; --pal-fg-1: #065f46;
  --pal-bg-2: #fef3c7; --pal-bd-2: #d97706; --pal-fg-2: #92400e;
  --pal-bg-3: #fce7f3; --pal-bd-3: #db2777; --pal-fg-3: #9d174d;
  --pal-bg-4: #ede9fe; --pal-bd-4: #7c3aed; --pal-fg-4: #5b21b6;
  --pal-bg-5: #fee2e2; --pal-bd-5: #dc2626; --pal-fg-5: #991b1b;
  --pal-bg-6: #cffafe; --pal-bd-6: #0891b2; --pal-fg-6: #155e75;
  --pal-bg-7: #ffedd5; --pal-bd-7: #ea580c; --pal-fg-7: #9a3412;
  --pal-bg-8: #ecfccb; --pal-bd-8: #65a30d; --pal-fg-8: #3f6212;
  --pal-bg-9: #f3e8ff; --pal-bd-9: #9333ea; --pal-fg-9: #6b21a8;
  --pal-bg-10: #e0e7ff; --pal-bd-10: #4f46e5; --pal-fg-10: #3730a3;
  --pal-bg-11: #fae8ff; --pal-bd-11: #c026d3; --pal-fg-11: #86198f;
}

:global(.dark) .jc-lab-card {
  --pal-bg-0: #1e3a5f; --pal-bd-0: #60a5fa; --pal-fg-0: #dbeafe;
  --pal-bg-1: #12382b; --pal-bd-1: #34d399; --pal-fg-1: #d1fae5;
  --pal-bg-2: #3b2a12; --pal-bd-2: #fbbf24; --pal-fg-2: #fef3c7;
  --pal-bg-3: #3d172c; --pal-bd-3: #f472b6; --pal-fg-3: #fce7f3;
  --pal-bg-4: #2c1f4d; --pal-bd-4: #a78bfa; --pal-fg-4: #ede9fe;
  --pal-bg-5: #3f171b; --pal-bd-5: #f87171; --pal-fg-5: #fee2e2;
  --pal-bg-6: #12333f; --pal-bd-6: #22d3ee; --pal-fg-6: #cffafe;
  --pal-bg-7: #3d2112; --pal-bd-7: #fb923c; --pal-fg-7: #ffedd5;
  --pal-bg-8: #243612; --pal-bd-8: #a3e635; --pal-fg-8: #ecfccb;
  --pal-bg-9: #311b47; --pal-bd-9: #c084fc; --pal-fg-9: #f3e8ff;
  --pal-bg-10: #1f2454; --pal-bd-10: #818cf8; --pal-fg-10: #e0e7ff;
  --pal-bg-11: #3e1747; --pal-bd-11: #e879f9; --pal-fg-11: #fae8ff;
}

.pal-0 { background: var(--pal-bg-0); border-color: var(--pal-bd-0); color: var(--pal-fg-0); }
.pal-1 { background: var(--pal-bg-1); border-color: var(--pal-bd-1); color: var(--pal-fg-1); }
.pal-2 { background: var(--pal-bg-2); border-color: var(--pal-bd-2); color: var(--pal-fg-2); }
.pal-3 { background: var(--pal-bg-3); border-color: var(--pal-bd-3); color: var(--pal-fg-3); }
.pal-4 { background: var(--pal-bg-4); border-color: var(--pal-bd-4); color: var(--pal-fg-4); }
.pal-5 { background: var(--pal-bg-5); border-color: var(--pal-bd-5); color: var(--pal-fg-5); }
.pal-6 { background: var(--pal-bg-6); border-color: var(--pal-bd-6); color: var(--pal-fg-6); }
.pal-7 { background: var(--pal-bg-7); border-color: var(--pal-bd-7); color: var(--pal-fg-7); }
.pal-8 { background: var(--pal-bg-8); border-color: var(--pal-bd-8); color: var(--pal-fg-8); }
.pal-9 { background: var(--pal-bg-9); border-color: var(--pal-bd-9); color: var(--pal-fg-9); }
.pal-10 { background: var(--pal-bg-10); border-color: var(--pal-bd-10); color: var(--pal-fg-10); }
.pal-11 { background: var(--pal-bg-11); border-color: var(--pal-bd-11); color: var(--pal-fg-11); }

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
  margin-bottom: 0.45rem;
}

.jc-lagrange-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem 1rem;
  overflow-x: auto;
}

.jc-tiling-section {
  margin-top: 0.7rem;
  padding-top: 0.55rem;
  border-top: 1px solid var(--jc-border);
}

.jc-tiling-label {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--jc-text-muted);
  margin-bottom: 0.25rem;
}

.jc-tiling-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.jc-tile {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  padding: 0.2rem 0.42rem;
  border-radius: 6px;
  border: 1.5px solid;
  font-weight: 600;
  font-size: 0.85rem;
}

.jc-coset-stack {
  display: flex;
  flex-direction: column;
  gap: 0.42rem;
}

.jc-coset-pill {
  padding: 0.38rem 0.65rem;
  border-radius: 7px;
  border: 1.5px solid;
  overflow-x: auto;
}

.jc-diag-line {
  margin: 0.45rem 0;
  overflow-x: auto;
}

.jc-hint {
  font-size: 0.82rem;
  color: var(--jc-text-muted);
  margin: 0.4rem 0 0;
}

.jc-hint-inline {
  font-size: 0.78rem;
  font-weight: 400;
  color: var(--jc-text-muted);
  margin-left: 0.3rem;
}

.jc-tower-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.75rem;
}

.jc-h-block {
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  border: 2px solid var(--jc-navy);
  background: var(--jc-surface);
}

.jc-h-title {
  font-weight: 700;
  color: var(--jc-navy);
  margin-bottom: 0.45rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px dashed var(--jc-border);
}

.jc-k-list {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
</style>
