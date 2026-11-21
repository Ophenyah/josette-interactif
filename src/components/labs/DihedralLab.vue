<script setup lang="ts">
import { computed, ref } from 'vue'
import { dihedralGroup, elementOrder, quaternionGroup } from '../../math/groups'
import { renderMath, renderSafeMarkdownMath } from '../../math/katex-macros'

const n = ref<number>(5)
const isReflection = ref<boolean>(false)
const kRot = ref<number>(1)

const cardTitleHtml = renderSafeMarkdownMath(
  'Laboratoire — Géométrie du groupe diédral $D_n = \\Gamma_n \\langle\\sigma\\rangle$ et plongement dans $S_n$',
  { inline: true }
)

const safeK = computed(() => ((kRot.value % n.value) + n.value) % n.value)

function vertexCoords(vertexZeroBased: number, deg: number, radius = 86): { x: number; y: number } {
  const ang = (2 * Math.PI * vertexZeroBased) / deg
  return {
    x: 140 + radius * Math.cos(ang),
    y: 120 - radius * Math.sin(ang)
  }
}

// Formule du livre p. 122 : rho_k(A_alpha) = A_{alpha+k mod n}, sigma(A_alpha) = A_{n - alpha + 2} (en 1-indexé, soit (n - idx) % n en 0-indexé)
const vertexMapping = computed<number[]>(() => {
  const deg = n.value
  const k = safeK.value
  return Array.from({ length: deg }, (_, idx) => {
    const afterSigma = isReflection.value ? (deg - idx) % deg : idx
    return (afterSigma + k) % deg
  })
})

const elementSummary = computed(() => {
  const deg = n.value
  const k = safeK.value
  const map = vertexMapping.value

  const opName = !isReflection.value
    ? k === 0
      ? 'e = \\rho_0'
      : k === 1
        ? '\\rho_1'
        : `\\rho_1^{${k}} = \\rho_{${k}}`
    : k === 0
      ? '\\sigma'
      : k === 1
        ? '\\rho_1 \\circ \\sigma'
        : `\\rho_1^{${k}} \\circ \\sigma`

  const top = Array.from({ length: deg }, (_, i) => String(i + 1)).join(' & ')
  const bot = map.map((v) => String(v + 1)).join(' & ')
  const permTex = `\\gamma_f = \\begin{pmatrix} ${top} \\\\ ${bot} \\end{pmatrix} \\in S_${deg}`

  // Ordre : pour rho_1^k c'est n/gcd(n,k), pour rho_1^k o sigma c'est 2
  const gcdVal = (a: number, b: number): number => {
    let x = a
    let y = b
    while (y !== 0) {
      const r = x % y
      x = y
      y = r
    }
    return x
  }
  const ord = isReflection.value ? 2 : k === 0 ? 1 : deg / gcdVal(deg, k)
  const commRelTex =
    k === 0
      ? '\\sigma \\circ e = e \\circ \\sigma'
      : `\\sigma \\circ \\rho_1^{${k}} = \\rho_1^{${deg - k}} \\circ \\sigma \\quad \\text{(formule (31))}`

  return {
    ord,
    opHtml: renderMath(
      `f = ${opName}, \\qquad o(f) = ${ord}, \\qquad \\text{angle } ${isReflection.value ? `\\text{symétrie axe } ${(k * 180) / deg}°` : `${(k * 360) / deg}°`}`
    ),
    permHtml: renderMath(permTex),
    commHtml: renderMath(commRelTex)
  }
})

// Comparaison D4 vs Q8 (Remarque 3.75)
const d4VsQ8 = computed(() => {
  const d4 = dihedralGroup(4)
  const q8 = quaternionGroup()
  const countOrd2 = (g: ReturnType<typeof dihedralGroup>) =>
    g.elements.filter((_, idx) => elementOrder(g, idx) === 2).length
  const d4Ord2 = countOrd2(d4)
  const q8Ord2 = countOrd2(q8)
  return {
    d4Ord2,
    q8Ord2,
    html: renderMath(
      `o(D_4) = o(Q_8) = 8, \\quad \\text{mais } D_4\\text{ a }${d4Ord2}\\text{ éléments d'ordre 2 et }Q_8\\text{ n'en a que }${q8Ord2}.`
    )
  }
})

const VERTEX_COLORS = ['#1d4ed8', '#0f766e', '#b45309', '#be185d', '#6d28d9', '#0369a1', '#4d7c0f', '#b91c1c']

const svgGeometry = computed(() => {
  const deg = n.value
  const map = vertexMapping.value
  const slots = Array.from({ length: deg }, (_, i) => {
    const pos = vertexCoords(i, deg, 84)
    const lbl = vertexCoords(i, deg, 105)
    return { idx: i, x: pos.x, y: pos.y, lx: lbl.x, ly: lbl.y }
  })
  // Qui occupe chaque emplacement après application de f ?
  // Si f(A_alpha) = A_beta, le sommet coloré d'indice alpha se trouve maintenant en position beta.
  const displaced = Array.from({ length: deg }, (_, alpha) => {
    const beta = map[alpha]
    const pos = vertexCoords(beta, deg, 84)
    return {
      alpha: alpha + 1,
      beta: beta + 1,
      x: pos.x,
      y: pos.y,
      color: VERTEX_COLORS[alpha % VERTEX_COLORS.length]
    }
  })

  const polyPoints = slots.map((s) => `${s.x},${s.y}`).join(' ')

  // Axe de symétrie si réflexion : rho_1^k o sigma a pour axe d'angle k * pi / n
  let axisLine: { x1: number; y1: number; x2: number; y2: number } | null = null
  if (isReflection.value) {
    const axisAng = (Math.PI * safeK.value) / deg
    const len = 104
    axisLine = {
      x1: 140 - len * Math.cos(axisAng),
      y1: 120 + len * Math.sin(axisAng),
      x2: 140 + len * Math.cos(axisAng),
      y2: 120 - len * Math.sin(axisAng)
    }
  }

  return { slots, displaced, polyPoints, axisLine }
})

function setN(val: number) {
  n.value = Math.max(2, Math.min(8, val))
  if (kRot.value >= n.value) kRot.value = 0
}
</script>

<template>
  <section class="jc-lab-card" data-lab="dihedral">
    <header class="jc-card-header">
      <div class="jc-card-title" v-html="cardTitleHtml" />
      <span class="jc-fold-badge">Propositions (3.71)–(3.75) · III § 3</span>
    </header>

    <div class="jc-card-body">
      <div class="jc-controls">
        <span style="font-size: 0.88rem; font-weight: 600;">
          Degré n = <strong>{{ n }}</strong> (ordre 2n = {{ 2 * n }}) :
        </span>
        <button
          type="button"
          class="jc-btn"
          :disabled="n <= 2"
          aria-label="Diminuer n"
          @click="setN(n - 1)"
        >
          −
        </button>
        <button
          type="button"
          class="jc-btn"
          :disabled="n >= 8"
          aria-label="Augmenter n"
          @click="setN(n + 1)"
        >
          +
        </button>
        <button type="button" class="jc-btn" @click="setN(2)">D₂ (Klein)</button>
        <button type="button" class="jc-btn" @click="setN(3)">D₃ (≃ S₃)</button>
        <button type="button" class="jc-btn" @click="setN(4)">D₄ (carré)</button>
        <button type="button" class="jc-btn" @click="setN(5)">D₅</button>
      </div>

      <div style="margin-bottom: 0.75rem;">
        <div style="font-size: 0.84rem; font-weight: 700; margin-bottom: 0.35rem;">
          Choisir une isométrie du polygone 𝒫<sub>{{ n }}</sub> :
        </div>
        <div class="jc-controls" style="margin-bottom: 0.35rem;">
          <button
            v-for="k in n"
            :key="`rot-${k - 1}`"
            type="button"
            class="jc-btn"
            :class="{ active: !isReflection && safeK === k - 1 }"
            @click="isReflection = false; kRot = k - 1"
          >
            {{ k - 1 === 0 ? 'e' : k - 1 === 1 ? 'ρ₁' : `ρ₁^${k - 1}` }}
          </button>
        </div>
        <div class="jc-controls">
          <button
            v-for="k in n"
            :key="`ref-${k - 1}`"
            type="button"
            class="jc-btn"
            :class="{ active: isReflection && safeK === k - 1 }"
            @click="isReflection = true; kRot = k - 1"
          >
            {{ k - 1 === 0 ? 'σ' : k - 1 === 1 ? 'ρ₁∘σ' : `ρ₁^${k - 1}∘σ` }}
          </button>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; align-items: start;">
        <div class="jc-panel" style="display: flex; justify-content: center;">
          <svg
            viewBox="0 0 280 240"
            style="max-width: 280px; width: 100%; height: auto;"
            role="img"
            :aria-label="`Polygone régulier P_${n} sous l'action de D_${n}`"
          >
            <circle cx="140" cy="120" r="84" fill="none" stroke="var(--jc-border)" stroke-dasharray="3,3" />
            <line x1="25" y1="120" x2="255" y2="120" stroke="var(--jc-border)" stroke-width="1" />
            <line x1="140" y1="15" x2="140" y2="225" stroke="var(--jc-border)" stroke-width="1" />

            <polygon
              v-if="n >= 3"
              :points="svgGeometry.polyPoints"
              fill="var(--jc-navy-soft)"
              stroke="var(--jc-navy)"
              stroke-width="1.6"
            />
            <line
              v-else
              :x1="svgGeometry.slots[0].x"
              :y1="svgGeometry.slots[0].y"
              :x2="svgGeometry.slots[1].x"
              :y2="svgGeometry.slots[1].y"
              stroke="var(--jc-navy)"
              stroke-width="2"
            />

            <line
              v-if="svgGeometry.axisLine"
              :x1="svgGeometry.axisLine.x1"
              :y1="svgGeometry.axisLine.y1"
              :x2="svgGeometry.axisLine.x2"
              :y2="svgGeometry.axisLine.y2"
              stroke="var(--jc-amber)"
              stroke-width="2"
              stroke-dasharray="5,3"
            />

            <text
              v-for="slot in svgGeometry.slots"
              :key="`lbl-${slot.idx}`"
              :x="slot.lx"
              :y="slot.ly + 4"
              text-anchor="middle"
              font-size="11"
              fill="var(--jc-text-muted)"
            >
              A{{ slot.idx + 1 }}
            </text>

            <g v-for="pt in svgGeometry.displaced" :key="`pt-${pt.alpha}`">
              <circle
                :cx="pt.x"
                :cy="pt.y"
                r="12"
                :fill="pt.color"
              />
              <text
                :x="pt.x"
                :y="pt.y + 4"
                text-anchor="middle"
                font-size="11"
                font-weight="700"
                fill="#ffffff"
              >
                {{ pt.alpha }}
              </text>
            </g>
          </svg>
        </div>

        <div class="jc-panel" style="display: flex; flex-direction: column; gap: 0.55rem;">
          <div data-lab-verdict v-html="elementSummary.opHtml" />
          <div style="overflow-x: auto;" v-html="elementSummary.permHtml" />
          <div style="font-size: 0.9rem;" v-html="elementSummary.commHtml" />
          <div style="border-top: 1px solid var(--jc-border); padding-top: 0.5rem; font-size: 0.86rem;">
            <strong>Remarque (3.75) — Non-isomorphisme :</strong>
            <div style="margin-top: 0.25rem;" v-html="d4VsQ8.html" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
