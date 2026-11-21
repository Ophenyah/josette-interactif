<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import { renderMath, renderSafeMarkdownMath } from '../../math/katex-macros'

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

const cardTitleHtml = renderSafeMarkdownMath(
  'Laboratoire — Cercle unité et racines $n$-ièmes de l’unité $U_n$',
  { inline: true }
)

const CX = 170
const CY = 170
const R = 112

const n = ref<number>(8)
const k1 = ref<number>(3)
const k2 = ref<number>(2)

const safeK1 = computed(() => ((k1.value % n.value) + n.value) % n.value)
const safeK2 = computed(() => ((k2.value % n.value) + n.value) % n.value)
const prodIdx = computed(() => (safeK1.value + safeK2.value) % n.value)
const invIdx = computed(() => (n.value - safeK1.value) % n.value)

const order = computed(() => n.value / gcd(n.value, safeK1.value))
const generators = computed(() =>
  Array.from({ length: n.value }, (_, i) => i).filter((i) => gcd(n.value, i) === 1)
)
const generatorSet = computed(() => new Set(generators.value))

const subgroupSequence = computed<number[]>(() => {
  const ord = order.value
  const step = safeK1.value
  return Array.from({ length: ord }, (_, m) => (m * step) % n.value)
})
const subgroupSet = computed(() => new Set(subgroupSequence.value))

const subgroupSorted = computed<number[]>(() =>
  [...subgroupSequence.value].sort((a, b) => a - b)
)

function pointAt(idx: number, radius = R): { x: number; y: number } {
  const ang = (2 * Math.PI * idx) / n.value
  return {
    x: CX + radius * Math.cos(ang),
    y: CY - radius * Math.sin(ang)
  }
}

const outerPolygonPoints = computed(() => {
  if (n.value < 3) return ''
  return Array.from({ length: n.value }, (_, i) => {
    const p = pointAt(i)
    return `${p.x},${p.y}`
  }).join(' ')
})

const subgroupPolygonPoints = computed(() => {
  if (subgroupSorted.value.length < 2) return ''
  return subgroupSorted.value
    .map((idx) => {
      const p = pointAt(idx)
      return `${p.x},${p.y}`
    })
    .join(' ')
})

const starPathD = computed(() => {
  const seq = subgroupSequence.value
  if (seq.length < 2) return ''
  const pts = seq.map((idx) => pointAt(idx))
  return (
    pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z'
  )
})

// Animation de l'addition des arguments
const animProgress = ref<number>(1)
const isAnimating = ref<boolean>(false)
let rafId: number | null = null

function stopAnim() {
  if (rafId !== null && typeof window !== 'undefined') {
    window.cancelAnimationFrame(rafId)
    rafId = null
  }
  isAnimating.value = false
}

onBeforeUnmount(() => {
  stopAnim()
})

function replayArgAnimation() {
  if (typeof window === 'undefined') return
  stopAnim()
  isAnimating.value = true
  animProgress.value = 0
  const start = performance.now()
  const duration = 900
  const step = (now: number) => {
    const t = Math.min(1, (now - start) / duration)
    const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
    animProgress.value = eased
    if (t < 1) {
      rafId = window.requestAnimationFrame(step)
    } else {
      rafId = null
      isAnimating.value = false
    }
  }
  rafId = window.requestAnimationFrame(step)
}

function arcSvgPath(startAngle: number, deltaAngle: number, radius: number): string {
  if (deltaAngle <= 0.001) return ''
  const clamped = Math.min(deltaAngle, 2 * Math.PI - 0.001)
  const x1 = CX + radius * Math.cos(startAngle)
  const y1 = CY - radius * Math.sin(startAngle)
  const endAngle = startAngle + clamped
  const x2 = CX + radius * Math.cos(endAngle)
  const y2 = CY - radius * Math.sin(endAngle)
  const largeArc = clamped > Math.PI ? 1 : 0
  // En coordonnées SVG (y vers le bas), sens trigonométrique = sweep 0
  return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 0 ${x2} ${y2}`
}

const theta1 = computed(() => (2 * Math.PI * safeK1.value) / n.value)
const theta2 = computed(() => (2 * Math.PI * safeK2.value) / n.value)

const arc1D = computed(() => arcSvgPath(0, theta1.value, 28))
const arc2D = computed(() =>
  arcSvgPath(theta1.value, theta2.value * animProgress.value, 42)
)

const animatedRayEnd = computed(() => {
  const ang = theta1.value + theta2.value * animProgress.value
  return {
    x: CX + R * Math.cos(ang),
    y: CY - R * Math.sin(ang)
  }
})

const p1Coord = computed(() => pointAt(safeK1.value))
const prodCoord = computed(() => pointAt(prodIdx.value))

const vertices = computed(() =>
  Array.from({ length: n.value }, (_, i) => {
    const p = pointAt(i)
    const lbl = pointAt(i, R + 21)
    return {
      idx: i,
      x: p.x,
      y: p.y,
      lx: lbl.x,
      ly: lbl.y,
      inSub: subgroupSet.value.has(i),
      isGen: generatorSet.value.has(i),
      isPrimary: i === safeK1.value,
      isProd: i === prodIdx.value,
      isInv: i === invIdx.value
    }
  })
)

const infoHtml = computed(() => {
  const curN = n.value
  const a1 = safeK1.value
  const a2 = safeK2.value
  const prod = prodIdx.value
  const inv = invIdx.value
  const ord = order.value
  const gens = generators.value

  const z1Exp =
    a1 === 0 ? '1' : `e^{i\\frac{${2 * a1}\\pi}{${curN}}}`
  const subTex = `\\langle z_{${a1}} \\rangle = \\{ ${subgroupSequence.value.map((i) => `z_{${i}}`).join(', ')} \\}`
  const ordTex = `o(z_{${a1}}) = \\dfrac{${curN}}{\\pgcd(${curN}, ${a1})} = ${ord}`
  const mulTex = `z_{${a1}} \\cdot z_{${a2}} = z_{(${a1}+${a2}) \\bmod ${curN}} = z_{${prod}}`
  const invTex = `z_{${a1}}^{-1} = z_{${inv}}`
  const gensTex = `\\{ ${gens.map((g) => `z_{${g}}`).join(', ')} \\},\\quad \\varphi(${curN}) = ${gens.length}`

  return {
    z1: renderMath(`z_{${a1}} = ${z1Exp}`),
    sub: renderMath(subTex),
    ord: renderMath(ordTex),
    mul: renderMath(mulTex),
    inv: renderMath(invTex),
    gens: renderMath(gensTex)
  }
})

function onNInput(val: number) {
  stopAnim()
  animProgress.value = 1
  n.value = Math.max(1, Math.min(24, val))
  if (k1.value >= n.value) k1.value = n.value - 1
  if (k2.value >= n.value) k2.value = n.value - 1
}

function selectK1(i: number) {
  k1.value = i
  replayArgAnimation()
}

function selectK2(i: number) {
  k2.value = i
  replayArgAnimation()
}
</script>

<template>
  <section class="jc-lab-card" data-lab="roots-unity">
    <header class="jc-card-header">
      <div class="jc-card-title" v-html="cardTitleHtml" />
      <span class="jc-fold-badge">Exemples (1.30) · I § 2 B</span>
    </header>

    <div class="jc-card-body">
      <div class="jc-controls">
        <div class="jc-roots-ctrl">
          <label for="roots-n-slider" class="jc-roots-lbl">
            Degré n = <strong>{{ n }}</strong> :
          </label>
          <button
            type="button"
            class="jc-btn"
            :disabled="n <= 1"
            aria-label="Diminuer n"
            @click="onNInput(n - 1)"
          >
            −
          </button>
          <input
            id="roots-n-slider"
            type="range"
            min="1"
            max="24"
            :value="n"
            @input="onNInput(Number(($event.target as HTMLInputElement).value))"
          />
          <button
            type="button"
            class="jc-btn"
            :disabled="n >= 24"
            aria-label="Augmenter n"
            @click="onNInput(n + 1)"
          >
            +
          </button>
        </div>

        <label class="jc-roots-ctrl">
          <span class="jc-roots-lbl">Élément actif zₖ₁ :</span>
          <select
            class="jc-select"
            :value="safeK1"
            aria-label="Choisir z k1"
            @change="selectK1(Number(($event.target as HTMLSelectElement).value))"
          >
            <option v-for="i in n" :key="`k1-${i}`" :value="i - 1">
              z{{ i - 1 }}
            </option>
          </select>
        </label>

        <label class="jc-roots-ctrl">
          <span class="jc-roots-lbl">Multiplier par zₖ₂ :</span>
          <select
            class="jc-select"
            :value="safeK2"
            aria-label="Choisir z k2"
            @change="selectK2(Number(($event.target as HTMLSelectElement).value))"
          >
            <option v-for="i in n" :key="`k2-${i}`" :value="i - 1">
              z{{ i - 1 }}
            </option>
          </select>
        </label>

        <button type="button" class="jc-btn primary" @click="replayArgAnimation">
          Animer l’addition des arguments
        </button>
      </div>

      <div class="jc-grid-2">
        <div class="jc-roots-svg-col">
          <svg
            viewBox="0 0 340 340"
            style="max-width: 100%; height: auto; display: block; margin: 0 auto;"
            role="img"
            :aria-label="`Cercle unité des ${n} racines de l'unité`"
          >
            <line x1="20" :y1="CY" x2="320" :y2="CY" stroke="var(--jc-border)" stroke-width="1" />
            <line :x1="CX" y1="20" :x2="CX" y2="320" stroke="var(--jc-border)" stroke-width="1" />
            <circle :cx="CX" :cy="CY" :r="R" fill="none" stroke="var(--jc-slate)" stroke-width="1.4" />

            <polygon
              v-if="outerPolygonPoints"
              :points="outerPolygonPoints"
              fill="none"
              stroke="var(--jc-border)"
              stroke-dasharray="4,3"
              stroke-width="1"
            />

            <polygon
              v-if="subgroupPolygonPoints && subgroupSorted.length >= 3"
              :points="subgroupPolygonPoints"
              fill="var(--jc-teal-soft)"
              stroke="var(--jc-teal)"
              stroke-width="1.4"
              opacity="0.7"
            />

            <path
              v-if="starPathD"
              :d="starPathD"
              fill="none"
              stroke="var(--jc-teal)"
              stroke-width="2.2"
              stroke-linejoin="round"
            />

            <!-- Rayons et arcs angulaires -->
            <line
              :x1="CX"
              :y1="CY"
              :x2="p1Coord.x"
              :y2="p1Coord.y"
              stroke="var(--jc-navy)"
              stroke-width="1.6"
              stroke-dasharray="3,2"
            />
            <line
              :x1="CX"
              :y1="CY"
              :x2="animatedRayEnd.x"
              :y2="animatedRayEnd.y"
              stroke="var(--jc-amber)"
              stroke-width="1.8"
            />

            <path
              v-if="arc1D"
              :d="arc1D"
              fill="none"
              stroke="var(--jc-navy)"
              stroke-width="2.5"
            />
            <path
              v-if="arc2D"
              :d="arc2D"
              fill="none"
              stroke="var(--jc-amber)"
              stroke-width="2.8"
            />

            <circle
              v-if="isAnimating"
              :cx="animatedRayEnd.x"
              :cy="animatedRayEnd.y"
              r="5"
              fill="var(--jc-amber)"
              stroke="var(--jc-surface)"
              stroke-width="1.5"
            />

            <!-- Sommets z_i -->
            <g
              v-for="v in vertices"
              :key="`pt-${v.idx}`"
              class="jc-root-node"
              role="button"
              tabindex="0"
              :aria-pressed="v.isPrimary"
              :aria-label="`Sélectionner z${v.idx}`"
              @click="selectK1(v.idx)"
              @keydown.enter.prevent="selectK1(v.idx)"
              @keydown.space.prevent="selectK1(v.idx)"
            >
              <circle
                v-if="v.isGen"
                :cx="v.x"
                :cy="v.y"
                :r="v.isPrimary ? 11.5 : 9.5"
                fill="none"
                stroke="var(--jc-emerald)"
                stroke-width="1.6"
                stroke-dasharray="2.5,2"
              />
              <circle
                :cx="v.x"
                :cy="v.y"
                :r="v.isPrimary ? 8 : v.isProd ? 7 : 5.5"
                :fill="v.isPrimary ? 'var(--jc-navy)' : v.inSub ? 'var(--jc-teal)' : 'var(--jc-surface)'"
                :stroke="v.isProd ? 'var(--jc-amber)' : 'var(--jc-navy)'"
                :stroke-width="v.isProd ? 3 : 1.6"
              />
              <text
                :x="v.lx"
                :y="v.ly + 3.5"
                text-anchor="middle"
                :font-size="n > 16 ? 9.5 : 11"
                :font-weight="v.isPrimary || v.isProd ? 700 : 500"
                :fill="v.isPrimary ? 'var(--jc-navy)' : 'var(--jc-text)'"
              >
                z{{ v.idx }}
              </text>
            </g>

            <circle
              :cx="prodCoord.x"
              :cy="prodCoord.y"
              r="11"
              fill="none"
              stroke="var(--jc-amber)"
              stroke-width="1.6"
              pointer-events="none"
            />
          </svg>

          <div class="jc-roots-legend">
            <span><span class="dot dot-navy" /> Actif zₖ₁</span>
            <span><span class="dot dot-teal" /> Sous-groupe ⟨zₖ₁⟩</span>
            <span><span class="dot dot-amber" /> Produit zₖ₁·zₖ₂</span>
            <span><span class="dot dot-gen" /> Générateur de Uₙ</span>
          </div>
        </div>

        <div class="jc-panel">
          <div class="jc-roots-line">
            <strong>Élément actif :</strong> <span v-html="infoHtml.z1" />
          </div>
          <div class="jc-roots-line">
            <strong>Sous-groupe engendré :</strong> <span v-html="infoHtml.sub" />
          </div>
          <div class="jc-roots-line">
            <strong>Ordre :</strong> <span v-html="infoHtml.ord" />
            <span v-if="order === n" class="jc-status-ok" style="margin-left: 0.4rem;">
              (générateur de Uₙ !)
            </span>
          </div>
          <div class="jc-roots-line">
            <strong>Multiplication :</strong> <span v-html="infoHtml.mul" />
          </div>
          <div class="jc-roots-line">
            <strong>Inverse :</strong> <span v-html="infoHtml.inv" />
          </div>
          <div class="jc-roots-line">
            <strong>Générateurs de Uₙ :</strong> <span v-html="infoHtml.gens" />
          </div>
          <p class="jc-roots-tip">
            Astuce : cliquez directement sur un sommet du cercle unité pour en faire l’élément actif et visualiser l’étoile de ses puissances.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.jc-roots-ctrl {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
}

.jc-roots-lbl {
  font-size: 0.84rem;
  font-weight: 600;
}

.jc-roots-svg-col {
  min-width: 0;
}

.jc-root-node {
  cursor: pointer;
}

.jc-root-node:focus-visible circle {
  outline: 2px solid var(--jc-navy);
  outline-offset: 2px;
}

.jc-roots-legend {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.45rem 0.9rem;
  margin-top: 0.4rem;
  font-size: 0.78rem;
  color: var(--jc-text-muted);
}

.jc-roots-legend > span {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 999px;
}

.dot-navy {
  background: var(--jc-navy);
}

.dot-teal {
  background: var(--jc-teal);
}

.dot-amber {
  border: 2.5px solid var(--jc-amber);
  background: var(--jc-surface);
}

.dot-gen {
  border: 2px dashed var(--jc-emerald);
  background: var(--jc-surface);
}

.jc-roots-line {
  margin-top: 0.45rem;
  line-height: 1.55;
}

.jc-roots-line:first-child {
  margin-top: 0;
}

.jc-roots-tip {
  margin: 0.65rem 0 0;
  font-size: 0.82rem;
  color: var(--jc-text-muted);
}

.jc-panel {
  min-width: 0;
}
</style>
