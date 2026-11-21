<script setup lang="ts">
import { computed, ref } from 'vue'
import { composePerm } from '../../math/groups'
import { renderMath, renderSafeMarkdownMath } from '../../math/katex-macros'

const n = ref<number>(6)
const perm = ref<number[]>([4, 1, 0, 5, 2, 3]) // Exemple (3.42)

const cardTitleHtml = renderSafeMarkdownMath(
  'Laboratoire — $\\sigma$-orbites, décomposition canonique et signature dans $S_n$',
  { inline: true }
)

function applyPreset(degree: number, mappingOneBased: number[]) {
  n.value = degree
  perm.value = mappingOneBased.map((v) => v - 1)
}

function setDegree(degree: number) {
  n.value = degree
  perm.value = Array.from({ length: degree }, (_, i) => i)
}

function setImage(posZeroBased: number, targetOneBased: number) {
  const target = targetOneBased - 1
  const next = [...perm.value]
  const oldVal = next[posZeroBased]
  const otherPos = next.indexOf(target)
  if (otherPos !== -1) {
    next[otherPos] = oldVal
  }
  next[posZeroBased] = target
  perm.value = next
}

function makeCircular() {
  perm.value = Array.from({ length: n.value }, (_, i) => (i + 1) % n.value)
}

function makeIdentity() {
  perm.value = Array.from({ length: n.value }, (_, i) => i)
}

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

const analysis = computed(() => {
  const p = perm.value
  const deg = p.length
  const seen = Array<boolean>(deg).fill(false)
  const orbits: number[][] = []
  for (let i = 0; i < deg; i++) {
    if (seen[i]) continue
    const orb: number[] = []
    let cur = i
    while (!seen[cur]) {
      seen[cur] = true
      orb.push(cur + 1)
      cur = p[cur]
    }
    orbits.push(orb)
  }

  const support = Array.from({ length: deg }, (_, i) => i + 1).filter(
    (x, idx) => p[idx] !== idx
  )
  const nonTrivialCycles = orbits.filter((o) => o.length > 1)
  const orderVal = nonTrivialCycles.reduce((acc, c) => lcm(acc, c.length), 1)
  const numOrbits = orbits.length
  const sig = (deg - numOrbits) % 2 === 0 ? 1 : -1

  // Décomposition en transpositions par la formule (20)
  const transpositions: Array<[number, number]> = []
  for (const cyc of nonTrivialCycles) {
    for (let idx = 0; idx < cyc.length - 1; idx++) {
      transpositions.push([cyc[idx], cyc[idx + 1]])
    }
  }

  // Puissance inverse / carré pour voir la composition
  const square = composePerm(p, p)

  const twoLineTop = Array.from({ length: deg }, (_, i) => String(i + 1)).join(' & ')
  const twoLineBot = p.map((v) => String(v + 1)).join(' & ')
  const matrixTex = `\\sigma = \\begin{pmatrix} ${twoLineTop} \\\\ ${twoLineBot} \\end{pmatrix}`

  const cyclesTex =
    nonTrivialCycles.length === 0
      ? 'e'
      : nonTrivialCycles.map((c) => `(${c.join(',\\,')})`).join('')

  const transpTex =
    transpositions.length === 0
      ? 'e \\;\\text{(0 transposition)}'
      : transpositions.map(([a, b]) => `(${a},\\,${b})`).join('')

  const suppTex =
    support.length === 0 ? '\\varnothing' : `\\{ ${support.join(', ')} \\}`

  const sqTop = Array.from({ length: deg }, (_, i) => String(i + 1)).join(' & ')
  const sqBot = square.map((v) => String(v + 1)).join(' & ')

  return {
    orbits,
    support,
    nonTrivialCycles,
    orderVal,
    numOrbits,
    sig,
    isAlternating: sig === 1,
    transpositions,
    matrixHtml: renderMath(matrixTex),
    suppHtml: renderMath(`\\supp(\\sigma) = ${suppTex}`),
    canonHtml: renderMath(`\\sigma = ${cyclesTex}, \\qquad o(\\sigma) = ${orderVal}`),
    transpHtml: renderMath(
      `\\sigma = ${transpTex} \\quad (k = ${transpositions.length}\\text{ transposition(s)})`
    ),
    sigHtml: renderMath(
      `\\varepsilon(\\sigma) = (-1)^{${deg} - ${numOrbits}} = (-1)^{${deg - numOrbits}} = ${sig === 1 ? '1' : '-1'} \\implies \\sigma ${sig === 1 ? '\\in' : '\\notin'} A_${deg}`
    ),
    squareHtml: renderMath(
      `\\sigma^2 = \\begin{pmatrix} ${sqTop} \\\\ ${sqBot} \\end{pmatrix}`
    )
  }
})

// Positionnement SVG des sommets sur un cercle
const SVG_W = 340
const SVG_H = 260
const CX = 170
const CY = 130
const RAD = 92

const ORBIT_COLORS = ['#1d4ed8', '#0f766e', '#b45309', '#be185d', '#6d28d9', '#0369a1', '#4d7c0f', '#b91c1c']

const svgGraph = computed(() => {
  const deg = n.value
  const p = perm.value
  const orbitColorByNode = new Map<number, string>()
  analysis.value.orbits.forEach((orb, oIdx) => {
    const col = ORBIT_COLORS[oIdx % ORBIT_COLORS.length]
    orb.forEach((node1) => orbitColorByNode.set(node1 - 1, col))
  })

  const nodes = Array.from({ length: deg }, (_, i) => {
    const ang = -Math.PI / 2 + (2 * Math.PI * i) / deg
    return {
      idx: i,
      label: i + 1,
      x: CX + RAD * Math.cos(ang),
      y: CY + RAD * Math.sin(ang),
      color: orbitColorByNode.get(i) ?? '#1d4ed8'
    }
  })

  const edges = nodes.map((src) => {
    const dstIdx = p[src.idx]
    const dst = nodes[dstIdx]
    if (dstIdx === src.idx) {
      return { isSelf: true, x: src.x, y: src.y, d: '', color: src.color }
    }
    const dx = dst.x - src.x
    const dy = dst.y - src.y
    const dist = Math.hypot(dx, dy) || 1
    const ux = dx / dist
    const uy = dy / dist
    const rPad = 17
    const x1 = src.x + ux * rPad
    const y1 = src.y + uy * rPad
    const x2 = dst.x - ux * (rPad + 4)
    const y2 = dst.y - uy * (rPad + 4)
    const mx = (x1 + x2) / 2 - uy * 16
    const my = (y1 + y2) / 2 + ux * 16
    return {
      isSelf: false,
      x: src.x,
      y: src.y,
      d: `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`,
      color: src.color
    }
  })

  return { nodes, edges }
})
</script>

<template>
  <section class="jc-lab-card" data-lab="symmetric-cycles">
    <header class="jc-card-header">
      <div class="jc-card-title" v-html="cardTitleHtml" />
      <span class="jc-fold-badge">Théorèmes (3.55) &amp; (3.70) · III § 2</span>
    </header>

    <div class="jc-card-body">
      <div class="jc-controls">
        <label style="font-size: 0.86rem; font-weight: 600;">
          Degré n :
          <select
            :value="n"
            class="jc-select"
            aria-label="Choisir le degré n de Sn"
            @change="setDegree(Number(($event.target as HTMLSelectElement).value))"
          >
            <option v-for="d in [3, 4, 5, 6, 7, 8]" :key="d" :value="d">
              S_{{ d }} (ordre {{ d }}!)
            </option>
          </select>
        </label>
        <button type="button" class="jc-btn" @click="applyPreset(6, [5, 2, 1, 6, 3, 4])">
          Exemple (3.42) — S₆
        </button>
        <button type="button" class="jc-btn" @click="applyPreset(6, [1, 4, 3, 6, 2, 5])">
          Exemple (3.61) — S₆
        </button>
        <button type="button" class="jc-btn" @click="applyPreset(8, [4, 2, 5, 6, 8, 1, 7, 3])">
          Exemple (3.73) — S₈
        </button>
        <button type="button" class="jc-btn" @click="makeCircular">
          Cycle circulaire γ₁
        </button>
        <button type="button" class="jc-btn" @click="makeIdentity">
          Identité e
        </button>
      </div>

      <div style="margin-bottom: 0.8rem;">
        <div style="font-size: 0.84rem; font-weight: 700; margin-bottom: 0.35rem;">
          Éditer la permutation (changer une image permute automatiquement pour rester dans S<sub>{{ n }}</sub>) :
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
          <label
            v-for="i in n"
            :key="i"
            style="display: inline-flex; flex-direction: column; align-items: center; padding: 0.25rem 0.4rem; border: 1px solid var(--jc-border); border-radius: 6px; font-size: 0.8rem;"
          >
            <span>{{ i }} ↦</span>
            <select
              :value="perm[i - 1] + 1"
              class="jc-select"
              :aria-label="`Image de ${i}`"
              @change="setImage(i - 1, Number(($event.target as HTMLSelectElement).value))"
            >
              <option v-for="j in n" :key="j" :value="j">{{ j }}</option>
            </select>
          </label>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; align-items: start;">
        <div class="jc-panel" style="display: flex; justify-content: center;">
          <svg
            :viewBox="`0 0 ${SVG_W} ${SVG_H}`"
            style="max-width: 340px; width: 100%; height: auto;"
            role="img"
            :aria-label="`Graphe des orbites dans S_${n}`"
          >
            <defs>
              <marker
                id="jc-sym-arrow"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="5.5"
                markerHeight="5.5"
                orient="auto"
              >
                <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="currentColor" />
              </marker>
            </defs>

            <g v-for="(edge, idx) in svgGraph.edges" :key="`e-${idx}`" :style="{ color: edge.color }">
              <circle
                v-if="edge.isSelf"
                :cx="edge.x"
                :cy="edge.y"
                r="22"
                fill="none"
                :stroke="edge.color"
                stroke-width="1.4"
                stroke-dasharray="3,2"
              />
              <path
                v-else
                :d="edge.d"
                fill="none"
                :stroke="edge.color"
                stroke-width="2"
                marker-end="url(#jc-sym-arrow)"
              />
            </g>

            <g v-for="node in svgGraph.nodes" :key="`n-${node.idx}`">
              <circle
                :cx="node.x"
                :cy="node.y"
                r="16"
                fill="var(--jc-surface)"
                :stroke="node.color"
                stroke-width="2.2"
              />
              <text
                :x="node.x"
                :y="node.y + 4.5"
                text-anchor="middle"
                font-size="13"
                font-weight="700"
                fill="var(--jc-text)"
              >
                {{ node.label }}
              </text>
            </g>
          </svg>
        </div>

        <div class="jc-panel" style="display: flex; flex-direction: column; gap: 0.5rem;">
          <div style="overflow-x: auto;" v-html="analysis.matrixHtml" />
          <div v-html="analysis.suppHtml" />
          <div v-html="analysis.canonHtml" />
          <div style="overflow-x: auto;" v-html="analysis.transpHtml" />
          <div
            class="jc-verdict"
            :class="analysis.isAlternating ? 'ok' : 'ko'"
            data-lab-verdict
            v-html="analysis.sigHtml"
          />
          <div style="font-size: 0.85rem;">
            <strong>{{ analysis.numOrbits }} orbite(s) :</strong>
            <span
              v-for="(orb, oIdx) in analysis.orbits"
              :key="oIdx"
              style="margin-right: 0.5rem;"
              v-html="renderMath(`\\Omega_\\sigma(${orb[0]}) = \\{${orb.join(', ')}\\}`)"
            />
          </div>
          <div style="overflow-x: auto; font-size: 0.9rem;" v-html="analysis.squareHtml" />
        </div>
      </div>
    </div>
  </section>
</template>
