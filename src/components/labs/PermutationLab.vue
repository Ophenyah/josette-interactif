<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import { composePerm, symmetricGroup } from '../../math/groups'
import { S3_NOTATIONS } from '../../data/book-tables'
import { renderMath } from '../../math/katex-macros'

type GroupChoice = 's3' | 'd4' | 's4'

interface PermItem {
  id: string
  label: string
  tex: string
  desc: string
  perm: number[]
}

interface Pt {
  x: number
  y: number
}

interface RigidGeometry {
  kind: 'identity' | 'rotation' | 'reflection' | 'non-isometry'
  angleDeg?: number
  axisDeg?: number
  label: string
}

const VERTEX_COLORS = ['#1d4ed8', '#0f766e', '#b45309', '#6d28d9']

const S3_ITEMS: PermItem[] = [
  { id: 'e', label: 'e', tex: 'e', desc: 'Identité', perm: S3_NOTATIONS.e },
  { id: 'sigma1', label: 'σ₁', tex: '\\sigma_1', desc: 'Rotation +120° (1 2 3)', perm: S3_NOTATIONS.sigma1 },
  { id: 'sigma2', label: 'σ₂', tex: '\\sigma_2', desc: 'Rotation −120° (1 3 2)', perm: S3_NOTATIONS.sigma2 },
  { id: 'tau1', label: 'τ₁', tex: '\\tau_1', desc: 'Symétrie (axe par 1)', perm: S3_NOTATIONS.tau1 },
  { id: 'tau2', label: 'τ₂', tex: '\\tau_2', desc: 'Symétrie (axe par 2)', perm: S3_NOTATIONS.tau2 },
  { id: 'tau3', label: 'τ₃', tex: '\\tau_3', desc: 'Symétrie (axe par 3)', perm: S3_NOTATIONS.tau3 }
]

const D4_ITEMS: PermItem[] = (() => {
  const e = [0, 1, 2, 3]
  const r = [1, 2, 3, 0]
  const r2 = composePerm(r, r)
  const r3 = composePerm(r, r2)
  const s = [0, 3, 2, 1]
  const sr = composePerm(s, r)
  const sr2 = composePerm(s, r2)
  const sr3 = composePerm(s, r3)
  return [
    { id: 'e', label: 'e', tex: 'e', desc: 'Identité', perm: e },
    { id: 'r', label: 'r', tex: 'r', desc: 'Rotation +90° (1 2 3 4)', perm: r },
    { id: 'r2', label: 'r²', tex: 'r^{2}', desc: 'Rotation 180° (1 3)(2 4)', perm: r2 },
    { id: 'r3', label: 'r³', tex: 'r^{3}', desc: 'Rotation −90° (1 4 3 2)', perm: r3 },
    { id: 's', label: 's', tex: 's', desc: 'Symétrie diagonale 1–3', perm: s },
    { id: 'sr', label: 'sr', tex: 'sr', desc: 'Symétrie axe horizontal', perm: sr },
    { id: 'sr2', label: 'sr²', tex: 'sr^{2}', desc: 'Symétrie diagonale 2–4', perm: sr2 },
    { id: 'sr3', label: 'sr³', tex: 'sr^{3}', desc: 'Symétrie axe vertical', perm: sr3 }
  ]
})()

function parseCycleToPerm(cycleStr: string, degree: number): number[] {
  const arr = Array.from({ length: degree }, (_, i) => i)
  if (cycleStr === 'e') return arr
  const matches = cycleStr.match(/\(([^)]+)\)/g) ?? []
  for (const m of matches) {
    const nums = m
      .slice(1, -1)
      .trim()
      .split(/\s+/)
      .map((s) => Number(s) - 1)
    for (let i = 0; i < nums.length; i++) {
      arr[nums[i]] = nums[(i + 1) % nums.length]
    }
  }
  return arr
}

const S4_GROUP = symmetricGroup(4)
const S4_ITEMS: PermItem[] = S4_GROUP.elements.map((label, idx) => ({
  id: `s4-${idx}`,
  label,
  tex: label === 'e' ? 'e' : label.replace(/ /g, '\\,'),
  desc: 'Permutation de S₄',
  perm: parseCycleToPerm(label, 4)
}))

const S4_GENERATORS: Array<{ label: string; perm: number[] }> = [
  { label: '(1 2)', perm: parseCycleToPerm('(1 2)', 4) },
  { label: '(2 3)', perm: parseCycleToPerm('(2 3)', 4) },
  { label: '(3 4)', perm: parseCycleToPerm('(3 4)', 4) },
  { label: '(1 2 3)', perm: parseCycleToPerm('(1 2 3)', 4) },
  { label: '(1 2 3 4)', perm: parseCycleToPerm('(1 2 3 4)', 4) }
]

const groupChoice = ref<GroupChoice>('s3')
const sigmaId = ref<string>('sigma1')
const tauId = ref<string>('tau3')

const activeItems = computed<PermItem[]>(() => {
  if (groupChoice.value === 's3') return S3_ITEMS
  if (groupChoice.value === 'd4') return D4_ITEMS
  return S4_ITEMS
})

const degree = computed<number>(() => (groupChoice.value === 's3' ? 3 : 4))

function findByPerm(items: PermItem[], perm: number[]): PermItem {
  return (
    items.find(
      (item) =>
        item.perm.length === perm.length && item.perm.every((v, i) => v === perm[i])
    ) ?? items[0]
  )
}

const sigmaItem = computed<PermItem>(
  () => activeItems.value.find((x) => x.id === sigmaId.value) ?? activeItems.value[0]
)
const tauItem = computed<PermItem>(
  () => activeItems.value.find((x) => x.id === tauId.value) ?? activeItems.value[0]
)

const prodLR = computed<PermItem>(() =>
  findByPerm(activeItems.value, composePerm(sigmaItem.value.perm, tauItem.value.perm))
)
const prodRL = computed<PermItem>(() =>
  findByPerm(activeItems.value, composePerm(tauItem.value.perm, sigmaItem.value.perm))
)
const commutes = computed<boolean>(() => prodLR.value.id === prodRL.value.id)

function cycleDecomposition(perm: number[]): string {
  const n = perm.length
  const seen = Array<boolean>(n).fill(false)
  const cycles: string[] = []
  for (let i = 0; i < n; i++) {
    if (seen[i] || perm[i] === i) continue
    const cyc: number[] = []
    let cur = i
    while (!seen[cur]) {
      seen[cur] = true
      cyc.push(cur + 1)
      cur = perm[cur]
    }
    cycles.push(`(${cyc.join('\\,')})`)
  }
  return cycles.length === 0 ? '\\id' : cycles.join('')
}

function permSignature(perm: number[]): 1 | -1 {
  let inv = 0
  for (let i = 0; i < perm.length; i++) {
    for (let j = i + 1; j < perm.length; j++) {
      if (perm[i] > perm[j]) inv++
    }
  }
  return inv % 2 === 0 ? 1 : -1
}

function permOrder(perm: number[]): number {
  const n = perm.length
  let cur = [...perm]
  for (let k = 1; k <= 24; k++) {
    if (cur.every((v, i) => v === i)) return k
    cur = composePerm(perm, cur)
  }
  return n
}

function twoLineTex(perm: number[]): string {
  const top = Array.from({ length: perm.length }, (_, i) => String(i + 1)).join(' & ')
  const bot = perm.map((v) => String(v + 1)).join(' & ')
  return `\\begin{pmatrix} ${top} \\\\ ${bot} \\end{pmatrix}`
}

const statsHtml = computed(() => {
  const s = sigmaItem.value
  const t = tauItem.value
  const lr = prodLR.value
  const rl = prodRL.value
  return {
    sigmaEq: renderMath(`${s.tex} = ${twoLineTex(s.perm)} = ${cycleDecomposition(s.perm)}`),
    tauEq: renderMath(`${t.tex} = ${twoLineTex(t.perm)} = ${cycleDecomposition(t.perm)}`),
    prodLREq: renderMath(
      `${s.tex} \\circ ${t.tex} = ${twoLineTex(lr.perm)} = ${lr.tex}`
    ),
    prodRLEq: renderMath(
      `${t.tex} \\circ ${s.tex} = ${twoLineTex(rl.perm)} = ${rl.tex}`
    ),
    cycles: renderMath(
      `\\text{Cycles}(\\sigma\\circ\\tau) = ${cycleDecomposition(lr.perm)}`
    ),
    sigs: renderMath(
      `\\varepsilon(\\sigma)=${permSignature(s.perm) === 1 ? '+1' : '-1'},\\; \\varepsilon(\\tau)=${permSignature(t.perm) === 1 ? '+1' : '-1'},\\; \\varepsilon(\\sigma\\circ\\tau)=${permSignature(lr.perm) === 1 ? '+1' : '-1'}`
    ),
    orders: renderMath(
      `o(\\sigma)=${permOrder(s.perm)},\\; o(\\tau)=${permOrder(t.perm)},\\; o(\\sigma\\circ\\tau)=${permOrder(lr.perm)}`
    )
  }
})

// Géométrie du polygone régulier
const POLY_CX = 140
const POLY_CY = 114
const POLY_R = 72

function slotAngleDeg(slotIdx: number, n: number): number {
  if (n === 3) return -90 + slotIdx * 120
  return -135 + slotIdx * 90
}

function pointAtAngle(deg: number, radius = POLY_R): Pt {
  const rad = (deg * Math.PI) / 180
  return {
    x: POLY_CX + radius * Math.cos(rad),
    y: POLY_CY + radius * Math.sin(rad)
  }
}

function classifyGeometry(perm: number[]): RigidGeometry {
  const n = perm.length
  if (perm.every((v, i) => v === i)) {
    return { kind: 'identity', label: 'Identité (aucun déplacement)' }
  }
  const shift = (perm[0] - 0 + n) % n
  if (perm.every((v, i) => v === (i + shift) % n)) {
    const rawDeg = shift * (360 / n)
    const angleDeg = rawDeg > 180 ? rawDeg - 360 : rawDeg
    const sign = angleDeg > 0 ? '+' : ''
    return {
      kind: 'rotation',
      angleDeg,
      label: `Rotation ${sign}${angleDeg}°`
    }
  }
  if (n === 3) {
    const fixedSlot = perm.findIndex((v, i) => v === i)
    if (fixedSlot !== -1) {
      return {
        kind: 'reflection',
        axisDeg: slotAngleDeg(fixedSlot, 3),
        label: `Symétrie axiale (sommet ${fixedSlot + 1} fixe)`
      }
    }
  } else {
    // D4 reflections: swap (1,3) fixing 0,2 -> axis -135°; swap (0,2) fixing 1,3 -> axis -45°;
    // swap (0,3)&(1,2) -> horizontal 0°; swap (0,1)&(2,3) -> vertical 90°
    if (perm[0] === 0 && perm[2] === 2 && perm[1] === 3 && perm[3] === 1) {
      return { kind: 'reflection', axisDeg: -135, label: 'Symétrie diagonale 1–3' }
    }
    if (perm[1] === 1 && perm[3] === 3 && perm[0] === 2 && perm[2] === 0) {
      return { kind: 'reflection', axisDeg: -45, label: 'Symétrie diagonale 2–4' }
    }
    if (perm[0] === 3 && perm[3] === 0 && perm[1] === 2 && perm[2] === 1) {
      return { kind: 'reflection', axisDeg: 0, label: 'Symétrie axe horizontal' }
    }
    if (perm[0] === 1 && perm[1] === 0 && perm[2] === 3 && perm[3] === 2) {
      return { kind: 'reflection', axisDeg: 90, label: 'Symétrie axe vertical' }
    }
  }
  return {
    kind: 'non-isometry',
    label: 'Permutation hors D₄ (non-isométrie du carré)'
  }
}

// État d'animation géométrique (0 = repos initial, 'tau' = phase 1, 'sigma' = phase 2, 'done' = état final)
type AnimStage = 'idle' | 'tau' | 'pause' | 'sigma' | 'done'

const animStage = ref<AnimStage>('idle')
const animProgress = ref<number>(0)
let rafId: number | null = null
let timerId: ReturnType<typeof setTimeout> | null = null

function stopAnimationTimers() {
  if (rafId !== null && typeof window !== 'undefined') {
    window.cancelAnimationFrame(rafId)
    rafId = null
  }
  if (timerId !== null) {
    clearTimeout(timerId)
    timerId = null
  }
}

onBeforeUnmount(() => {
  stopAnimationTimers()
})

function resetAnimation() {
  stopAnimationTimers()
  animStage.value = 'idle'
  animProgress.value = 0
}

function runTween(durationMs: number, onUpdate: (t: number) => void, onDone: () => void) {
  const start = performance.now()
  const step = (now: number) => {
    const raw = Math.min(1, (now - start) / durationMs)
    const eased = raw < 0.5 ? 2 * raw * raw : 1 - Math.pow(-2 * raw + 2, 2) / 2
    onUpdate(eased)
    if (raw < 1) {
      rafId = window.requestAnimationFrame(step)
    } else {
      rafId = null
      onDone()
    }
  }
  rafId = window.requestAnimationFrame(step)
}

function startTwoStepAnimation() {
  if (typeof window === 'undefined') return
  stopAnimationTimers()
  animStage.value = 'tau'
  animProgress.value = 0

  runTween(
    850,
    (t) => {
      animProgress.value = t
    },
    () => {
      animStage.value = 'pause'
      timerId = setTimeout(() => {
        animStage.value = 'sigma'
        animProgress.value = 0
        runTween(
          850,
          (t) => {
            animProgress.value = t
          },
          () => {
            animStage.value = 'done'
            animProgress.value = 1
          }
        )
      }, 320)
    }
  )
}

function interpolateStepPoints(
  fromSlotOfVertex: number[],
  perm: number[],
  t: number,
  n: number
): Pt[] {
  const geom = classifyGeometry(perm)
  return fromSlotOfVertex.map((slot) => {
    const nextSlot = perm[slot]
    if (geom.kind === 'rotation' && geom.angleDeg !== undefined) {
      const a0 = slotAngleDeg(slot, n)
      return pointAtAngle(a0 + geom.angleDeg * t)
    }
    const p0 = pointAtAngle(slotAngleDeg(slot, n))
    const p1 = pointAtAngle(slotAngleDeg(nextSlot, n))
    return {
      x: p0.x + (p1.x - p0.x) * t,
      y: p0.y + (p1.y - p0.y) * t
    }
  })
}

const currentVertexPoints = computed<Pt[]>(() => {
  const n = degree.value
  const idSlots = Array.from({ length: n }, (_, i) => i)
  const afterTauSlots = tauItem.value.perm
  const afterBothSlots = prodLR.value.perm

  if (animStage.value === 'idle') {
    return idSlots.map((slot) => pointAtAngle(slotAngleDeg(slot, n)))
  }
  if (animStage.value === 'tau') {
    return interpolateStepPoints(idSlots, tauItem.value.perm, animProgress.value, n)
  }
  if (animStage.value === 'pause') {
    return afterTauSlots.map((slot) => pointAtAngle(slotAngleDeg(slot, n)))
  }
  if (animStage.value === 'sigma') {
    return interpolateStepPoints(afterTauSlots, sigmaItem.value.perm, animProgress.value, n)
  }
  return afterBothSlots.map((slot) => pointAtAngle(slotAngleDeg(slot, n)))
})

const activeGeometryHint = computed<RigidGeometry>(() => {
  if (animStage.value === 'tau' || animStage.value === 'pause') {
    return classifyGeometry(tauItem.value.perm)
  }
  if (animStage.value === 'sigma') {
    return classifyGeometry(sigmaItem.value.perm)
  }
  if (animStage.value === 'done') {
    return classifyGeometry(prodLR.value.perm)
  }
  return classifyGeometry(prodLR.value.perm)
})

const reflectionAxisCoords = computed(() => {
  const g = activeGeometryHint.value
  if (g.kind !== 'reflection' || g.axisDeg === undefined) return null
  const p1 = pointAtAngle(g.axisDeg, POLY_R + 20)
  const p2 = pointAtAngle(g.axisDeg + 180, POLY_R + 20)
  return { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y }
})

const rotationArcPath = computed(() => {
  const g = activeGeometryHint.value
  if (g.kind !== 'rotation' || g.angleDeg === undefined) return null
  const r = 28
  const startDeg = -90
  const endDeg = startDeg + g.angleDeg
  const sRad = (startDeg * Math.PI) / 180
  const eRad = (endDeg * Math.PI) / 180
  const x1 = POLY_CX + r * Math.cos(sRad)
  const y1 = POLY_CY + r * Math.sin(sRad)
  const x2 = POLY_CX + r * Math.cos(eRad)
  const y2 = POLY_CY + r * Math.sin(eRad)
  const largeArc = Math.abs(g.angleDeg) > 180 ? 1 : 0
  const sweep = g.angleDeg >= 0 ? 1 : 0
  return {
    d: `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} ${sweep} ${x2} ${y2}`,
    label: `${g.angleDeg > 0 ? '+' : ''}${g.angleDeg}°`
  }
})

const basePolygonPts = computed(() => {
  const n = degree.value
  return Array.from({ length: n }, (_, i) => {
    const p = pointAtAngle(slotAngleDeg(i, n))
    return `${p.x},${p.y}`
  }).join(' ')
})

const movingPolygonPts = computed(() =>
  currentVertexPoints.value.map((p) => `${p.x},${p.y}`).join(' ')
)

const bipartiteCols = [48, 170, 292]
const bipartiteYs = computed(() =>
  degree.value === 3 ? [52, 108, 164] : [44, 90, 136, 182]
)

function selectGroup(choice: GroupChoice) {
  resetAnimation()
  groupChoice.value = choice
  if (choice === 's3') {
    sigmaId.value = 'sigma1'
    tauId.value = 'tau3'
  } else if (choice === 'd4') {
    sigmaId.value = 'r'
    tauId.value = 's'
  } else {
    const r = findByPerm(S4_ITEMS, [1, 2, 3, 0])
    const t = findByPerm(S4_ITEMS, [1, 0, 2, 3])
    sigmaId.value = r.id
    tauId.value = t.id
  }
}

function selectSigma(id: string) {
  resetAnimation()
  sigmaId.value = id
}

function selectTau(id: string) {
  resetAnimation()
  tauId.value = id
}

function composeOnS4(target: 'sigma' | 'tau', genPerm: number[] | null) {
  resetAnimation()
  if (!genPerm) {
    if (target === 'sigma') sigmaId.value = S4_ITEMS[0].id
    else tauId.value = S4_ITEMS[0].id
    return
  }
  const current = target === 'sigma' ? sigmaItem.value.perm : tauItem.value.perm
  const next = findByPerm(S4_ITEMS, composePerm(current, genPerm))
  if (target === 'sigma') sigmaId.value = next.id
  else tauId.value = next.id
}
</script>

<template>
  <section class="jc-lab-card" data-lab="permutations">
    <header class="jc-card-header">
      <div class="jc-card-title">
        Laboratoire — Composition de permutations &amp; isométries du polygone
      </div>
      <span class="jc-fold-badge">Notations (1.15) · I § 1 D</span>
    </header>

    <div class="jc-card-body">
      <div class="jc-controls">
        <span class="jc-perm-lbl">Groupe :</span>
        <button
          type="button"
          class="jc-btn"
          :class="{ active: groupChoice === 's3' }"
          @click="selectGroup('s3')"
        >
          S₃ — Notations (1.15)
        </button>
        <button
          type="button"
          class="jc-btn"
          :class="{ active: groupChoice === 'd4' }"
          @click="selectGroup('d4')"
        >
          D₄ ⊂ S₄ (carré)
        </button>
        <button
          type="button"
          class="jc-btn"
          :class="{ active: groupChoice === 's4' }"
          @click="selectGroup('s4')"
        >
          S₄ (24 éléments)
        </button>
      </div>

      <div v-if="groupChoice !== 's4'" class="jc-controls jc-perm-pickers">
        <div class="jc-perm-row">
          <span class="jc-perm-lbl">Gauche σ :</span>
          <button
            v-for="item in activeItems"
            :key="`s-${item.id}`"
            type="button"
            class="jc-btn"
            :class="{ active: sigmaItem.id === item.id }"
            @click="selectSigma(item.id)"
            v-html="renderMath(item.tex)"
          />
        </div>
        <div class="jc-perm-row">
          <span class="jc-perm-lbl">Droite τ (agit d’abord) :</span>
          <button
            v-for="item in activeItems"
            :key="`t-${item.id}`"
            type="button"
            class="jc-btn teal"
            :class="{ active: tauItem.id === item.id }"
            @click="selectTau(item.id)"
            v-html="renderMath(item.tex)"
          />
        </div>
      </div>

      <div v-else class="jc-controls jc-perm-pickers">
        <div class="jc-perm-row">
          <label class="jc-perm-lbl" for="s4-sigma-select">Gauche σ :</label>
          <select
            id="s4-sigma-select"
            class="jc-select"
            :value="sigmaItem.id"
            @change="selectSigma(($event.target as HTMLSelectElement).value)"
          >
            <option v-for="item in S4_ITEMS" :key="`s4s-${item.id}`" :value="item.id">
              {{ item.label }}
            </option>
          </select>
          <button type="button" class="jc-btn" @click="composeOnS4('sigma', null)">e</button>
          <button
            v-for="g in S4_GENERATORS"
            :key="`s4sg-${g.label}`"
            type="button"
            class="jc-btn"
            @click="composeOnS4('sigma', g.perm)"
          >
            ∘ {{ g.label }}
          </button>
        </div>

        <div class="jc-perm-row">
          <label class="jc-perm-lbl" for="s4-tau-select">Droite τ :</label>
          <select
            id="s4-tau-select"
            class="jc-select"
            :value="tauItem.id"
            @change="selectTau(($event.target as HTMLSelectElement).value)"
          >
            <option v-for="item in S4_ITEMS" :key="`s4t-${item.id}`" :value="item.id">
              {{ item.label }}
            </option>
          </select>
          <button type="button" class="jc-btn" @click="composeOnS4('tau', null)">e</button>
          <button
            v-for="g in S4_GENERATORS"
            :key="`s4tg-${g.label}`"
            type="button"
            class="jc-btn teal"
            @click="composeOnS4('tau', g.perm)"
          >
            ∘ {{ g.label }}
          </button>
        </div>
      </div>

      <div class="jc-grid-2">
        <div class="jc-perm-stage-card">
          <div class="jc-perm-stage-title">Diagramme de flèches (τ puis σ)</div>
          <svg
            viewBox="0 0 340 212"
            style="max-width: 100%; height: auto; display: block; margin: 0 auto;"
            role="img"
            aria-label="Diagramme de composition en trois colonnes"
          >
            <defs>
              <marker
                id="jc-perm-arrow"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="5"
                markerHeight="5"
                orient="auto"
              >
                <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="var(--jc-text-muted)" />
              </marker>
            </defs>

            <text :x="bipartiteCols[0]" y="18" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--jc-navy)">
              Départ
            </text>
            <text :x="bipartiteCols[1]" y="18" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--jc-teal)">
              Après {{ tauItem.label }}
            </text>
            <text :x="bipartiteCols[2]" y="18" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--jc-amber)">
              Après {{ sigmaItem.label }}
            </text>

            <g v-for="i in degree" :key="`edge-${i}`">
              <line
                :x1="bipartiteCols[0] + 14"
                :y1="bipartiteYs[i - 1]"
                :x2="bipartiteCols[1] - 15"
                :y2="bipartiteYs[tauItem.perm[i - 1]]"
                :stroke="VERTEX_COLORS[i - 1]"
                :stroke-width="animStage === 'tau' ? 3.2 : 2.2"
                :opacity="animStage === 'sigma' ? 0.35 : 0.9"
                marker-end="url(#jc-perm-arrow)"
              />
              <line
                :x1="bipartiteCols[1] + 14"
                :y1="bipartiteYs[tauItem.perm[i - 1]]"
                :x2="bipartiteCols[2] - 15"
                :y2="bipartiteYs[prodLR.perm[i - 1]]"
                :stroke="VERTEX_COLORS[i - 1]"
                :stroke-width="animStage === 'sigma' ? 3.2 : 2.2"
                :opacity="animStage === 'tau' ? 0.35 : 0.9"
                marker-end="url(#jc-perm-arrow)"
              />
            </g>

            <g v-for="(colX, cIdx) in bipartiteCols" :key="`col-${cIdx}`">
              <g v-for="i in degree" :key="`n-${cIdx}-${i}`">
                <circle
                  :cx="colX"
                  :cy="bipartiteYs[i - 1]"
                  r="13"
                  :fill="cIdx === 0 ? VERTEX_COLORS[i - 1] : 'var(--jc-surface)'"
                  :stroke="cIdx === 0 ? 'var(--jc-surface)' : 'var(--jc-border)'"
                  stroke-width="1.8"
                />
                <text
                  :x="colX"
                  :y="bipartiteYs[i - 1] + 4"
                  text-anchor="middle"
                  font-size="12"
                  font-weight="700"
                  :fill="cIdx === 0 ? '#ffffff' : 'var(--jc-text)'"
                >
                  {{ i }}
                </text>
              </g>
            </g>

            <text x="170" y="204" text-anchor="middle" font-size="11.5" font-weight="600" fill="var(--jc-text-muted)">
              {{ sigmaItem.label }} ∘ {{ tauItem.label }} = {{ prodLR.label }}
            </text>
          </svg>
        </div>

        <div class="jc-perm-stage-card">
          <div class="jc-perm-geom-head">
            <span class="jc-perm-stage-title">Action géométrique ({{ degree === 3 ? 'triangle' : 'carré' }})</span>
            <div class="jc-perm-anim-btns">
              <button type="button" class="jc-btn primary" @click="startTwoStepAnimation">
                Animer τ puis σ
              </button>
              <button type="button" class="jc-btn" @click="resetAnimation">
                Réinitialiser
              </button>
            </div>
          </div>

          <svg
            viewBox="0 0 280 230"
            style="max-width: 100%; height: auto; display: block; margin: 0 auto;"
            role="img"
            aria-label="Animation géométrique des sommets du polygone"
          >
            <defs>
              <marker
                id="jc-rot-arrow"
                viewBox="0 0 10 10"
                refX="7"
                refY="5"
                markerWidth="5"
                markerHeight="5"
                orient="auto"
              >
                <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="var(--jc-teal)" />
              </marker>
            </defs>

            <text x="140" y="16" text-anchor="middle" font-size="11" font-weight="600" fill="var(--jc-text-muted)">
              <template v-if="animStage === 'idle'">Position initiale (1…{{ degree }})</template>
              <template v-else-if="animStage === 'tau' || animStage === 'pause'">Étape 1 : action de τ ({{ tauItem.label }})</template>
              <template v-else-if="animStage === 'sigma'">Étape 2 : action de σ ({{ sigmaItem.label }})</template>
              <template v-else>Résultat final : {{ sigmaItem.label }} ∘ {{ tauItem.label }} = {{ prodLR.label }}</template>
            </text>

            <polygon
              :points="basePolygonPts"
              fill="none"
              stroke="var(--jc-border)"
              stroke-dasharray="4,3"
              stroke-width="1.3"
            />

            <polygon
              :points="movingPolygonPts"
              fill="var(--jc-navy-soft)"
              stroke="var(--jc-navy)"
              stroke-width="2"
              opacity="0.88"
            />

            <line
              v-if="reflectionAxisCoords"
              :x1="reflectionAxisCoords.x1"
              :y1="reflectionAxisCoords.y1"
              :x2="reflectionAxisCoords.x2"
              :y2="reflectionAxisCoords.y2"
              stroke="var(--jc-crimson)"
              stroke-width="2"
              stroke-dasharray="5,4"
            />

            <path
              v-if="rotationArcPath"
              :d="rotationArcPath.d"
              fill="none"
              stroke="var(--jc-teal)"
              stroke-width="2.2"
              marker-end="url(#jc-rot-arrow)"
            />
            <text
              v-if="rotationArcPath"
              :x="POLY_CX"
              :y="POLY_CY + 4"
              text-anchor="middle"
              font-size="10.5"
              font-weight="700"
              fill="var(--jc-teal)"
            >
              {{ rotationArcPath.label }}
            </text>

            <g v-for="(pt, vIdx) in currentVertexPoints" :key="`v-${vIdx}`">
              <circle
                :cx="pt.x"
                :cy="pt.y"
                r="14"
                :fill="VERTEX_COLORS[vIdx]"
                stroke="var(--jc-surface)"
                stroke-width="2"
              />
              <text
                :x="pt.x"
                :y="pt.y + 4.5"
                text-anchor="middle"
                font-size="12.5"
                font-weight="700"
                fill="#ffffff"
              >
                {{ vIdx + 1 }}
              </text>
            </g>

            <text x="140" y="218" text-anchor="middle" font-size="10.5" fill="var(--jc-text-muted)">
              {{ activeGeometryHint.label }}
            </text>
          </svg>
        </div>
      </div>

      <div class="jc-panel" style="margin-top: 0.9rem;">
        <div class="jc-perm-info-line">
          <strong>Gauche :</strong> <span v-html="statsHtml.sigmaEq" />
          &nbsp;·&nbsp;
          <strong>Droite :</strong> <span v-html="statsHtml.tauEq" />
        </div>
        <div class="jc-perm-info-line">
          <strong>Produit σ ∘ τ :</strong> <span v-html="statsHtml.prodLREq" />
          &nbsp;|&nbsp;
          <strong>Produit τ ∘ σ :</strong> <span v-html="statsHtml.prodRLEq" />
          &nbsp;→&nbsp;
          <span v-if="commutes" class="jc-status-ok">✔ Elles commutent</span>
          <span v-else class="jc-status-err">✘ Elles ne commutent pas</span>
        </div>
        <div class="jc-perm-info-line">
          <span v-html="statsHtml.cycles" />
          &nbsp;·&nbsp;
          <span v-html="statsHtml.sigs" />
          &nbsp;·&nbsp;
          <span v-html="statsHtml.orders" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.jc-perm-lbl {
  font-size: 0.84rem;
  font-weight: 700;
  color: var(--jc-text);
}

.jc-perm-pickers {
  flex-direction: column;
  align-items: flex-start;
  gap: 0.55rem;
}

.jc-perm-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
}

.jc-perm-stage-card {
  min-width: 0;
  padding: 0.65rem;
  border-radius: 8px;
  border: 1px solid var(--jc-border);
  background: var(--jc-surface-muted);
}

.jc-perm-stage-title {
  font-size: 0.86rem;
  font-weight: 700;
  color: var(--jc-navy);
  margin-bottom: 0.4rem;
}

.jc-perm-geom-head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.25rem;
}

.jc-perm-anim-btns {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.jc-perm-info-line {
  margin-top: 0.35rem;
  line-height: 1.6;
}

.jc-perm-info-line:first-child {
  margin-top: 0;
}
</style>
