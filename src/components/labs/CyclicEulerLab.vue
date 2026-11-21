<script setup lang="ts">
import { computed, ref } from 'vue'
import { cyclicGroup, directProduct, elementOrder, unitsModN } from '../../math/groups'
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

function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b)
}

function phi(n: number): number {
  let c = 0
  for (let k = 1; k <= n; k++) {
    if (gcd(k, n) === 1) c++
  }
  return c
}

type TabMode = 'subgroups' | 'chinese'
const activeTab = ref<TabMode>('subgroups')

const n = ref<number>(12)
const selectedDiv = ref<number>(4)

const m = ref<number>(3)
const k = ref<number>(4)

const cardTitleHtml = renderSafeMarkdownMath(
  'Laboratoire — Groupes cycliques $\\Zn{n}$, indicateur $\\varphi(n)$ et théorème chinois',
  { inline: true }
)

const divisors = computed<number[]>(() => {
  const res: number[] = []
  for (let d = 1; d <= n.value; d++) {
    if (n.value % d === 0) res.push(d)
  }
  return res
})

const safeDiv = computed<number>(() =>
  divisors.value.includes(selectedDiv.value) ? selectedDiv.value : n.value
)

const cyclicN = computed(() => cyclicGroup(n.value))
const unitsGroupN = computed(() => (n.value >= 2 ? unitsModN(n.value) : null))

const generatorsOfN = computed<number[]>(() => {
  const res: number[] = []
  for (let x = 1; x < n.value; x++) {
    if (gcd(x, n.value) === 1) res.push(x)
  }
  return res
})

const subgroupInfo = computed(() => {
  const d = safeDiv.value
  const step = n.value / d
  const elements: number[] = []
  for (let i = 0; i < d; i++) {
    elements.push((i * step) % n.value)
  }
  const allGens: number[] = []
  for (let x = 0; x < n.value; x++) {
    if (elementOrder(cyclicN.value, x) === d) {
      allGens.push(x)
    }
  }
  const elementsTex = elements.map((v) => `\\overline{${v}}`).join(', ')
  const gensTex = allGens.map((v) => `\\overline{${v}}`).join(', ')
  return {
    d,
    step,
    elements,
    allGens,
    phiD: phi(d),
    titleHtml: renderMath(
      `\\langle \\overline{${step}} \\rangle = \\{ ${elementsTex} \\}\\;\\text{ (ordre }${d}\\text{)}`
    ),
    gensHtml: renderMath(
      `\\text{Générateurs de ce sous-groupe (au nombre de }\\varphi(${d})=${phi(d)}\\text{) : }\\{ ${gensTex} \\}`
    )
  }
})

const eulerSumFormulaHtml = computed(() => {
  const terms = divisors.value.map((d) => `\\varphi(${d})`).join(' + ')
  const vals = divisors.value.map((d) => String(phi(d))).join(' + ')
  return renderMath(`\\sum_{d \\mid ${n.value}} \\varphi(d) = ${terms} = ${vals} = ${n.value}`)
})

const gnFormulaHtml = computed(() => {
  const gens = generatorsOfN.value.map((x) => `\\overline{${x}}`).join(', ')
  const uName = unitsGroupN.value ? unitsGroupN.value.elements.length : 1
  return renderMath(
    `G_{${n.value}} = \\left(\\Zn{${n.value}}\\right)^{\\times} = \\{ ${gens} \\}, \\qquad \\varphi(${n.value}) = ${uName}`
  )
})

const chineseReport = computed(() => {
  const gM = cyclicGroup(m.value)
  const gK = cyclicGroup(k.value)
  const prod = directProduct(gM, gK)
  const d = gcd(m.value, k.value)
  const l = lcm(m.value, k.value)
  const isCyclic = d === 1

  let maxOrd = 1
  const ordersSample: Array<{ tex: string; order: number }> = []
  for (let idx = 0; idx < prod.elements.length; idx++) {
    const ord = elementOrder(prod, idx) ?? 1
    if (ord > maxOrd) maxOrd = ord
    if (idx < 12) {
      ordersSample.push({
        tex: `${prod.elementTex[idx]}`,
        order: ord
      })
    }
  }

  const pair11Idx = m.value > 1 && k.value > 1 ? k.value + 1 : 0
  const ord11 = elementOrder(prod, pair11Idx) ?? 1

  return {
    orderProd: prod.elements.length,
    gcdVal: d,
    lcmVal: l,
    isCyclic,
    maxOrd,
    ord11,
    ordersSample,
    headerHtml: renderMath(
      `\\Zn{${m.value}} \\times \\Zn{${k.value}} \\quad (\\text{ordre } ${m.value * k.value}), \\qquad \\pgcd(${m.value}, ${k.value}) = ${d}`
    ),
    verdictHtml: isCyclic
      ? renderMath(
          `\\Zn{${m.value}} \\times \\Zn{${k.value}} \\simeq \\Zn{${m.value * k.value}} \\quad \\text{(cyclique, engendré par }(\\overline{1}, \\overline{1})\\text{ d'ordre }${ord11}\\text{)}`
        )
      : renderMath(
          `\\Zn{${m.value}} \\times \\Zn{${k.value}} \\not\\simeq \\Zn{${m.value * k.value}} \\quad (\\text{ordre maximal }\\ppcm(${m.value},${k.value}) = ${l} < ${m.value * k.value})`
        )
  }
})

function setN(val: number) {
  n.value = Math.max(2, Math.min(24, val))
  if (!divisors.value.includes(selectedDiv.value)) {
    selectedDiv.value = n.value
  }
}
</script>

<template>
  <section class="jc-lab-card" data-lab="cyclic-euler">
    <header class="jc-card-header">
      <div class="jc-card-title" v-html="cardTitleHtml" />
      <span class="jc-fold-badge">Théorèmes (3.14) &amp; (3.29) · III § 1</span>
    </header>

    <div class="jc-card-body">
      <div class="jc-controls">
        <button
          type="button"
          class="jc-btn"
          :class="{ active: activeTab === 'subgroups' }"
          @click="activeTab = 'subgroups'"
        >
          Sous-groupes &amp; φ(n) (Thm 3.14)
        </button>
        <button
          type="button"
          class="jc-btn"
          :class="{ active: activeTab === 'chinese' }"
          @click="activeTab = 'chinese'"
        >
          Théorème chinois (Thm 3.29)
        </button>
      </div>

      <div v-if="activeTab === 'subgroups'">
        <div class="jc-controls">
          <span style="font-size: 0.88rem; font-weight: 600;">
            Ordre n = <strong>{{ n }}</strong> :
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
          <input
            type="range"
            min="2"
            max="24"
            :value="n"
            aria-label="Choisir l'ordre n"
            @input="setN(Number(($event.target as HTMLInputElement).value))"
          />
          <button
            type="button"
            class="jc-btn"
            :disabled="n >= 24"
            aria-label="Augmenter n"
            @click="setN(n + 1)"
          >
            +
          </button>
          <button type="button" class="jc-btn" @click="setN(6)">n = 6</button>
          <button type="button" class="jc-btn" @click="setN(12)">n = 12</button>
          <button type="button" class="jc-btn" @click="setN(15)">n = 15</button>
        </div>

        <div class="jc-panel" style="margin-bottom: 0.8rem;">
          <div style="margin-bottom: 0.45rem;" v-html="gnFormulaHtml" />
          <div style="font-size: 0.92rem;" v-html="eulerSumFormulaHtml" />
        </div>

        <div style="font-size: 0.86rem; font-weight: 700; margin-bottom: 0.4rem;">
          Diviseurs de {{ n }} ({{ divisors.length }} sous-groupes distincts, Corollaire 3.12) :
        </div>
        <div class="jc-controls" style="margin-bottom: 0.7rem;">
          <button
            v-for="d in divisors"
            :key="d"
            type="button"
            class="jc-btn"
            :class="{ active: safeDiv === d }"
            @click="selectedDiv = d"
          >
            d = {{ d }} (φ = {{ phi(d) }})
          </button>
        </div>

        <div class="jc-panel">
          <div style="margin-bottom: 0.45rem;" v-html="subgroupInfo.titleHtml" />
          <div style="font-size: 0.9rem;" v-html="subgroupInfo.gensHtml" />
        </div>
      </div>

      <div v-else>
        <div class="jc-controls">
          <label style="font-size: 0.88rem; font-weight: 600;">
            m =
            <select v-model.number="m" class="jc-select" aria-label="Choisir m">
              <option v-for="val in 11" :key="val + 1" :value="val + 1">
                {{ val + 1 }}
              </option>
            </select>
          </label>
          <label style="font-size: 0.88rem; font-weight: 600;">
            n =
            <select v-model.number="k" class="jc-select" aria-label="Choisir n">
              <option v-for="val in 11" :key="val + 1" :value="val + 1">
                {{ val + 1 }}
              </option>
            </select>
          </label>
          <button type="button" class="jc-btn" @click="m = 3; k = 4">3 × 4 (premiers entre eux)</button>
          <button type="button" class="jc-btn" @click="m = 2; k = 6">2 × 6 (non cyclique)</button>
        </div>

        <div class="jc-panel">
          <div style="margin-bottom: 0.45rem;" v-html="chineseReport.headerHtml" />
          <div
            class="jc-verdict"
            :class="chineseReport.isCyclic ? 'ok' : 'ko'"
            data-lab-verdict
            v-html="chineseReport.verdictHtml"
          />
          <div style="margin-top: 0.65rem; font-size: 0.86rem; font-weight: 600;">
            Premiers éléments et leurs ordres dans le produit direct :
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 0.45rem; margin-top: 0.4rem;">
            <span
              v-for="(item, idx) in chineseReport.ordersSample"
              :key="idx"
              class="jc-badge"
              style="padding: 0.2rem 0.5rem; border: 1px solid var(--jc-border); border-radius: 6px; font-size: 0.82rem;"
              v-html="renderMath(`${item.tex} : o=${item.order}`)"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
