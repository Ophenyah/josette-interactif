<script setup lang="ts">
import { computed, ref, useId } from 'vue'
import {
  allSubgroups,
  checkEquivalenceCompatibility,
  checkMorphism,
  cyclicGroup,
  dihedralGroup,
  fromTable,
  isNormalSubgroup,
  kleinGroup,
  leftCosets,
  quotientGroup,
  rightCosets,
  symmetricGroup,
  type FiniteGroup
} from '../../math/groups'
import { renderMath } from '../../math/katex-macros'

type TabKey = 'compat' | 'iso'
type CompatGroupKey = 's3' | 'z6' | 'd4'
type IsoMorphKey = 'z12-z4' | 's3-sgn' | 'd4-v4' | 'cstar-mod'

const COMPAT_GROUPS: Array<{ key: CompatGroupKey; label: string; group: FiniteGroup }> = [
  { key: 's3', label: 'S₃', group: symmetricGroup(3) },
  { key: 'z6', label: 'ℤ/(6)', group: cyclicGroup(6) },
  { key: 'd4', label: 'D₄', group: dihedralGroup(4) }
]

const uid = useId()
const activeTab = ref<TabKey>('compat')

// =========================================================================
// Onglet 1 : Compatibilité d'une relation d'équivalence (Prop 2.21 & 2.23)
// =========================================================================
const compatGroupKey = ref<CompatGroupKey>('s3')
const compatGroup = computed(
  () => (COMPAT_GROUPS.find((g) => g.key === compatGroupKey.value) ?? COMPAT_GROUPS[0]).group
)
const compatSubs = computed(() => allSubgroups(compatGroup.value))

function initialPartition(key: CompatGroupKey): number[] {
  const g = (COMPAT_GROUPS.find((x) => x.key === key) ?? COMPAT_GROUPS[0]).group
  const subs = allSubgroups(g)
  const nonNorm = subs.find((s) => !s.isNormal && s.order > 1)
  if (nonNorm) {
    const cos = rightCosets(g, nonNorm.elements)
    const arr = new Array<number>(g.elements.length).fill(0)
    cos.forEach((c, cIdx) => c.elements.forEach((el) => (arr[el] = cIdx)))
    return arr
  }
  const properNorm = subs.find((s) => s.isNormal && s.order > 1 && s.order < g.elements.length)
  if (properNorm) {
    const cos = rightCosets(g, properNorm.elements)
    const arr = new Array<number>(g.elements.length).fill(0)
    cos.forEach((c, cIdx) => c.elements.forEach((el) => (arr[el] = cIdx)))
    return arr
  }
  return g.elements.map((_, i) => i)
}

const classOfElement = ref<number[]>(initialPartition('s3'))
const presetNote = ref<string>('Classes à droite modulo ⟨τ₃⟩ (non distingué)')

const compatReport = computed(() =>
  checkEquivalenceCompatibility(compatGroup.value, classOfElement.value)
)

const compatElemHtmls = computed(() => compatGroup.value.elementTex.map((t) => renderMath(t)))

const distinctClasses = computed(() => {
  const groups = new Map<number, number[]>()
  classOfElement.value.forEach((cls, elIdx) => {
    const arr = groups.get(cls) ?? []
    arr.push(elIdx)
    groups.set(cls, arr)
  })
  return Array.from(groups.entries()).sort((a, b) => a[0] - b[0])
})

const failingWitnessHtmls = computed(() => {
  const g = compatGroup.value
  return compatReport.value.failingWitnesses.slice(0, 5).map((w) => {
    const parts: string[] = []
    if (!w.rightOk) {
      const xa = g.table[w.x][w.a]
      const ya = g.table[w.y][w.a]
      parts.push(
        `\\text{(7) droite : } ${g.elementTex[w.x]} \\sim ${g.elementTex[w.y]} \\text{ mais } ${g.elementTex[w.x]} ${g.opTex} ${g.elementTex[w.a]} = ${g.elementTex[xa]} \\not\\sim ${g.elementTex[ya]} = ${g.elementTex[w.y]} ${g.opTex} ${g.elementTex[w.a]}`
      )
    }
    if (!w.leftOk) {
      const ax = g.table[w.a][w.x]
      const ay = g.table[w.a][w.y]
      parts.push(
        `\\text{(7') gauche : } ${g.elementTex[w.x]} \\sim ${g.elementTex[w.y]} \\text{ mais } ${g.elementTex[w.a]} ${g.opTex} ${g.elementTex[w.x]} = ${g.elementTex[ax]} \\not\\sim ${g.elementTex[ay]} = ${g.elementTex[w.a]} ${g.opTex} ${g.elementTex[w.y]}`
      )
    }
    return renderMath(parts.join(' \\quad '))
  })
})

const neutralClassSubgroup = computed(() => {
  const e = compatGroup.value.neutralIndex
  const eCls = classOfElement.value[e]
  return classOfElement.value.reduce<number[]>((acc, cls, idx) => {
    if (cls === eCls) acc.push(idx)
    return acc
  }, [])
})

const generatedQuotient = computed<FiniteGroup | null>(() => {
  if (!compatReport.value.isCompatible) return null
  const h = neutralClassSubgroup.value
  if (!isNormalSubgroup(compatGroup.value, h)) return null
  return quotientGroup(compatGroup.value, h)
})

const quotientOpHtml = computed(() =>
  generatedQuotient.value ? renderMath(generatedQuotient.value.opTex) : ''
)
const quotientElemHtmls = computed(() =>
  generatedQuotient.value ? generatedQuotient.value.elementTex.map((t) => renderMath(t)) : []
)

function selectCompatGroup(nextKey: CompatGroupKey) {
  compatGroupKey.value = nextKey
  classOfElement.value = initialPartition(nextKey)
  presetNote.value = nextKey === 'z6'
    ? 'Classes modulo sous-groupe normal ⟨2̄⟩'
    : nextKey === 's3'
      ? 'Classes à droite modulo ⟨τ₃⟩ (non distingué)'
      : 'Classes à droite modulo ⟨s⟩ (non distingué)'
}

function applySubgroupCosets(subElements: readonly number[], side: 'right' | 'left', label: string) {
  const g = compatGroup.value
  const cos = side === 'right' ? rightCosets(g, subElements) : leftCosets(g, subElements)
  const arr = new Array<number>(g.elements.length).fill(0)
  cos.forEach((c, cIdx) => c.elements.forEach((el) => (arr[el] = cIdx)))
  classOfElement.value = arr
  presetNote.value = `Classes à ${side === 'right' ? 'droite' : 'gauche'} modulo ${label}`
}

function applyArbitraryBadPartition() {
  const n = compatGroup.value.elements.length
  classOfElement.value = Array.from({ length: n }, (_, i) => (i <= 1 ? 0 : 1))
  presetNote.value = 'Partition arbitraire {{e, x₁}, reste}'
}

function setElementClass(elIdx: number, clsVal: number) {
  const next = [...classOfElement.value]
  next[elIdx] = clsVal
  classOfElement.value = next
  presetNote.value = 'Partition personnalisée'
}

// =========================================================================
// Onglet 2 : Premier théorème d'isomorphisme animé (Thm 2.27)
// =========================================================================
const isoKey = ref<IsoMorphKey>('z12-z4')
const folded = ref<boolean>(false)
const activeFiberIdx = ref<number>(0)

const PM1_GROUP = fromTable({
  id: 'pm1',
  name: '{+1, -1}',
  texName: '\\{+1, -1\\}',
  opSymbol: '·',
  opTex: '\\cdot',
  elements: ['+1', '-1'],
  elementTex: ['+1', '-1'],
  neutralIndex: 0,
  table: [
    [0, 1],
    [1, 0]
  ]
})

const finiteIsoModel = computed(() => {
  if (isoKey.value === 'cstar-mod') return null

  let src: FiniteGroup
  let tgt: FiniteGroup
  let map: number[]
  let titleTex: string

  if (isoKey.value === 'z12-z4') {
    src = cyclicGroup(12)
    tgt = cyclicGroup(4)
    map = Array.from({ length: 12 }, (_, x) => x % 4)
    titleTex = '\\pi : \\Zn{12} \\longrightarrow \\Zn{4},\\; \\overline{x} \\longmapsto \\overline{x}'
  } else if (isoKey.value === 's3-sgn') {
    src = symmetricGroup(3)
    tgt = PM1_GROUP
    map = [0, 0, 0, 1, 1, 1]
    titleTex = '\\varepsilon : S_3 \\longrightarrow \\{+1, -1\\}'
  } else {
    src = dihedralGroup(4)
    tgt = kleinGroup()
    map = [0, 1, 0, 1, 2, 3, 2, 3]
    titleTex = 'f : D_4 \\longrightarrow V \\; (\\Ker f = Z(D_4))'
  }

  const mRep = checkMorphism(src, tgt, map)
  const quot = quotientGroup(src, mRep.kernel)
  const cos = rightCosets(src, mRep.kernel)

  const fibers = cos.map((c, cIdx) => {
    const imgIdx = map[c.representative]
    const elemsTex = `\\{ ${c.elements.map((e) => src.elementTex[e]).join(', ')} \\}`
    return {
      idx: cIdx,
      rep: c.representative,
      elements: c.elements,
      elemHtmls: c.elements.map((e) => renderMath(src.elementTex[e])),
      imgIdx,
      classTex: quot.elementTex[cIdx],
      classHtml: renderMath(quot.elementTex[cIdx]),
      classLabel: quot.elements[cIdx],
      imgTex: tgt.elementTex[imgIdx],
      imgHtml: renderMath(tgt.elementTex[imgIdx]),
      imgLabel: tgt.elements[imgIdx],
      elemsTex,
      detailHtml: renderMath(
        `f^{-1}(${tgt.elementTex[imgIdx]}) = ${elemsTex} = ${quot.elementTex[cIdx]} \\longleftrightarrow ${tgt.elementTex[imgIdx]}`
      )
    }
  })

  return {
    src,
    tgt,
    map,
    mRep,
    quot,
    fibers,
    titleHtml: renderMath(titleTex),
    kerHtml: renderMath(`\\Ker f = \\{ ${mRep.kernel.map((i) => src.elementTex[i]).join(', ')} \\}`),
    isoHtml: renderMath(`${quot.texName} \\simeq \\Im f`),
    quotTitleHtml: renderMath(quot.texName)
  }
})

const CONTINUOUS_RADII = [0.6, 1.0, 1.55]
const CONTINUOUS_ANGLES = [0, 60, 120, 180, 240, 300]

const isoQuotOpHtml = computed(() =>
  finiteIsoModel.value ? renderMath(finiteIsoModel.value.quot.opTex) : ''
)
const isoQuotElemHtmls = computed(() =>
  finiteIsoModel.value ? finiteIsoModel.value.quot.elementTex.map((t) => renderMath(t)) : []
)

function selectIsoMorph(nextKey: IsoMorphKey) {
  isoKey.value = nextKey
  folded.value = false
  activeFiberIdx.value = 0
}
</script>

<template>
  <section class="jc-lab-card" data-lab="quotient-iso">
    <header class="jc-card-header">
      <div class="jc-card-title">
        Laboratoire — Compatibilité, groupe quotient &amp; premier théorème d’isomorphisme
      </div>
      <span class="jc-fold-badge">II § 2 — Prop. (2.21) &amp; Thm (2.27)</span>
    </header>

    <div class="jc-card-body">
      <div class="jc-controls" role="tablist" aria-label="Onglets du quotient et isomorphisme">
        <button
          type="button"
          role="tab"
          :aria-selected="activeTab === 'compat'"
          class="jc-btn"
          :class="{ active: activeTab === 'compat' }"
          @click="activeTab = 'compat'"
        >
          Compatibilité d’une relation (Prop. 2.21 &amp; 2.23)
        </button>
        <button
          type="button"
          role="tab"
          :aria-selected="activeTab === 'iso'"
          class="jc-btn"
          :class="{ active: activeTab === 'iso' }"
          @click="activeTab = 'iso'"
        >
          Premier théorème d’isomorphisme animé (Thm 2.27)
        </button>
      </div>

      <!-- ONGLET 1 -->
      <template v-if="activeTab === 'compat'">
        <div class="jc-controls">
          <span class="jc-ctrl-label">Groupe G :</span>
          <button
            v-for="item in COMPAT_GROUPS"
            :key="`cg-${item.key}`"
            type="button"
            class="jc-btn"
            :class="{ active: compatGroupKey === item.key }"
            @click="selectCompatGroup(item.key)"
          >
            {{ item.label }}
          </button>

          <button type="button" class="jc-btn" @click="applyArbitraryBadPartition">
            Partition arbitraire
          </button>
        </div>

        <div class="jc-controls">
          <span class="jc-ctrl-label">Préréglages par sous-groupes :</span>
          <template v-for="sub in compatSubs" :key="`psub-${sub.id}`">
            <template v-if="sub.order > 1 && sub.order < compatGroup.elements.length">
              <button
                type="button"
                class="jc-btn"
                @click="applySubgroupCosets(sub.elements, 'right', sub.label)"
              >
                Droite {{ sub.label }} {{ sub.isNormal ? '◁' : '⋬' }}
              </button>
              <button
                v-if="!sub.isNormal"
                type="button"
                class="jc-btn"
                @click="applySubgroupCosets(sub.elements, 'left', sub.label)"
              >
                Gauche {{ sub.label }} ⋬
              </button>
            </template>
          </template>
        </div>

        <p class="jc-hint">
          <strong>Relation active :</strong> {{ presetNote }}. Modifiez librement la classe de chaque élément ci-dessous :
        </p>

        <div class="jc-grid-2">
          <div class="jc-panel" style="min-width: 0;">
            <div class="jc-subhead">Partition de G en classes d’équivalence</div>
            <div class="jc-part-grid">
              <div
                v-for="(elHtml, i) in compatElemHtmls"
                :key="`part-${i}`"
                class="jc-part-cell"
                :class="`pal-${classOfElement[i] % 12}`"
              >
                <span class="jc-part-el" v-html="elHtml" />
                <label class="jc-sr-only" :for="`cls-sel-${i}`">
                  Classe de {{ compatGroup.elements[i] }}
                </label>
                <select
                  :id="`cls-sel-${i}`"
                  class="jc-select jc-cls-select"
                  :value="classOfElement[i]"
                  @change="setElementClass(i, Number(($event.target as HTMLSelectElement).value))"
                >
                  <option v-for="c in compatGroup.elements.length" :key="`cl-${c - 1}`" :value="c - 1">
                    C{{ c }}
                  </option>
                </select>
              </div>
            </div>

            <div class="jc-classes-summary">
              <span
                v-for="[clsId, elems] in distinctClasses"
                :key="`csum-${clsId}`"
                class="jc-coset-chip"
                :class="`pal-${clsId % 12}`"
                v-html="renderMath(`C_{${clsId + 1}} = \\{ ${elems.map((e) => compatGroup.elementTex[e]).join(', ')} \\}`)"
              />
            </div>
          </div>

          <div class="jc-panel" style="min-width: 0;" data-lab-verdict>
            <div class="jc-subhead">Test de compatibilité</div>
            <ul class="jc-check-list">
              <li>
                <strong>(7) À droite (<span v-html="renderMath('x \\sim y \\Rightarrow xa \\sim ya')" />) :</strong>
                <span v-if="compatReport.rightCompatible" class="jc-status-ok"> ✔ Oui</span>
                <span v-else class="jc-status-err"> ✘ Non</span>
              </li>
              <li>
                <strong>(7′) À gauche (<span v-html="renderMath('x \\sim y \\Rightarrow ax \\sim ay')" />) :</strong>
                <span v-if="compatReport.leftCompatible" class="jc-status-ok"> ✔ Oui</span>
                <span v-else class="jc-status-err"> ✘ Non</span>
              </li>
              <li>
                <strong>(8) Bilatère (groupe quotient) :</strong>
                <span v-if="compatReport.isCompatible" class="jc-status-ok"> ✔ Oui</span>
                <span v-else class="jc-status-err"> ✘ Non</span>
              </li>
            </ul>

            <template v-if="!compatReport.isCompatible">
              <div class="jc-subhead" style="margin-top: 0.65rem;">Contre-exemples détectés :</div>
              <ul class="jc-witness-list">
                <li v-for="(wHtml, idx) in failingWitnessHtmls" :key="`wit-${idx}`" v-html="wHtml" />
              </ul>
            </template>

            <template v-else-if="generatedQuotient">
              <p class="jc-status-ok" style="margin: 0.55rem 0 0.4rem;">
                ✔ Loi quotient bien définie : <span v-html="renderMath(generatedQuotient.texName)" />
              </p>
              <div class="cayley-wrap">
                <table class="jc-cayley-table jc-cayley-compact" aria-label="Table du groupe quotient">
                  <thead>
                    <tr>
                      <th scope="col" v-html="quotientOpHtml" />
                      <th v-for="(h, j) in quotientElemHtmls" :key="`qth-${j}`" scope="col" v-html="h" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row, i) in generatedQuotient.table" :key="`qtr-${i}`">
                      <th scope="row" v-html="quotientElemHtmls[i]" />
                      <td v-for="(val, j) in row" :key="`qtd-${i}-${j}`" v-html="quotientElemHtmls[val]" />
                    </tr>
                  </tbody>
                </table>
              </div>
            </template>
          </div>
        </div>
      </template>

      <!-- ONGLET 2 -->
      <template v-else>
        <div class="jc-controls">
          <span class="jc-ctrl-label">Morphisme :</span>
          <button
            type="button"
            class="jc-btn"
            :class="{ active: isoKey === 'z12-z4' }"
            @click="selectIsoMorph('z12-z4')"
          >
            π : ℤ/(12) → ℤ/(4)
          </button>
          <button
            type="button"
            class="jc-btn"
            :class="{ active: isoKey === 's3-sgn' }"
            @click="selectIsoMorph('s3-sgn')"
          >
            ε : S₃ → {+1, −1}
          </button>
          <button
            type="button"
            class="jc-btn"
            :class="{ active: isoKey === 'd4-v4' }"
            @click="selectIsoMorph('d4-v4')"
          >
            D₄ → V (via Z(D₄))
          </button>
          <button
            type="button"
            class="jc-btn"
            :class="{ active: isoKey === 'cstar-mod' }"
            @click="selectIsoMorph('cstar-mod')"
          >
            |·| : ℂ* → ℝ₊*
          </button>

          <button
            type="button"
            class="jc-btn primary"
            @click="folded = !folded"
          >
            {{ folded ? 'Déplier les fibres (éléments de G)' : 'Replier les fibres au quotient' }}
          </button>
        </div>

        <!-- Cas finis -->
        <template v-if="finiteIsoModel">
          <div class="jc-panel" style="margin-bottom: 0.9rem;">
            <div class="jc-lagrange-row">
              <span v-html="finiteIsoModel.titleHtml" />
              <span v-html="finiteIsoModel.kerHtml" />
              <span class="jc-status-ok" v-html="finiteIsoModel.isoHtml" />
            </div>
          </div>

          <div class="jc-grid-2">
            <div class="jc-panel" style="min-width: 0;">
              <div class="jc-subhead">
                {{ folded ? 'Quotient G / Ker f ≃ Im f (bijection exacte)' : 'Fibres f⁻¹(y) dans G avant repliement' }}
              </div>

              <div class="jc-iso-stage" :class="{ 'is-folded': folded }">
                <div
                  v-for="fib in finiteIsoModel.fibers"
                  :key="`fib-${fib.idx}`"
                  class="jc-fiber-row"
                  :class="[`pal-${fib.idx % 12}`, { 'is-active': activeFiberIdx === fib.idx }]"
                  tabindex="0"
                  role="button"
                  :aria-label="`Sélectionner la fibre ${fib.classLabel}`"
                  @click="activeFiberIdx = fib.idx"
                  @keydown.enter.prevent="activeFiberIdx = fib.idx"
                  @keydown.space.prevent="activeFiberIdx = fib.idx"
                >
                  <div class="jc-fiber-left">
                    <div class="jc-fiber-elems" :class="{ collapsed: folded }">
                      <span
                        v-for="(elHtml, fPos) in fib.elemHtmls"
                        :key="`fe-${fib.idx}-${fPos}`"
                        class="jc-fiber-chip"
                        v-html="elHtml"
                      />
                    </div>
                    <div class="jc-fiber-class" :class="{ visible: folded }">
                      <span v-html="fib.classHtml" />
                    </div>
                  </div>

                  <div class="jc-fiber-arrow">
                    <span>{{ folded ? '⟷ φ' : '↦ f' }}</span>
                  </div>

                  <div class="jc-fiber-right">
                    <span class="jc-img-chip" v-html="fib.imgHtml" />
                  </div>
                </div>
              </div>
            </div>

            <div class="jc-panel" style="min-width: 0;" data-lab-verdict>
              <div class="jc-subhead">Fibre sélectionnée &amp; table du groupe quotient</div>
              <div
                v-if="finiteIsoModel.fibers[activeFiberIdx]"
                class="jc-diag-line"
                v-html="finiteIsoModel.fibers[activeFiberIdx].detailHtml"
              />

              <div class="jc-subhead" style="margin-top: 0.7rem;">
                Table de <span v-html="finiteIsoModel.quotTitleHtml" />
              </div>
              <div class="cayley-wrap">
                <table class="jc-cayley-table jc-cayley-compact" aria-label="Table du groupe quotient">
                  <thead>
                    <tr>
                      <th scope="col" v-html="isoQuotOpHtml" />
                      <th v-for="(h, j) in isoQuotElemHtmls" :key="`ith-${j}`" scope="col" v-html="h" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row, i) in finiteIsoModel.quot.table" :key="`itr-${i}`">
                      <th scope="row" v-html="isoQuotElemHtmls[i]" />
                      <td v-for="(val, j) in row" :key="`itd-${i}-${j}`" v-html="isoQuotElemHtmls[val]" />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </template>

        <!-- Cas continu |.| : C* -> R+* -->
        <template v-else>
          <div class="jc-grid-2">
            <div class="jc-panel" style="min-width: 0;">
              <svg
                viewBox="0 0 360 220"
                style="max-width: 100%; height: auto; display: block; margin: 0 auto;"
                role="img"
                aria-label="Fibres circulaires de C* modulo U repliées vers R+*"
              >
                <defs>
                  <marker
                    :id="`${uid}-iso-arr`"
                    viewBox="0 0 10 10"
                    refX="8"
                    refY="5"
                    markerWidth="5.5"
                    markerHeight="5.5"
                    orient="auto"
                  >
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--jc-teal)" />
                  </marker>
                </defs>

                <!-- Plan C* à gauche -->
                <line x1="16" y1="110" x2="196" y2="110" stroke="var(--jc-border)" />
                <line x1="106" y1="18" x2="106" y2="202" stroke="var(--jc-border)" />
                <circle cx="106" cy="110" r="3" fill="var(--jc-crimson)" />
                <text x="106" y="14" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--jc-navy)">
                  ℂ* (fibres rU)
                </text>

                <!-- Demi-droite R+* à droite -->
                <line x1="250" y1="175" x2="250" y2="35" stroke="var(--jc-navy)" stroke-width="2" />
                <text x="295" y="14" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--jc-teal)">
                  Im |·| = ℝ₊*
                </text>

                <g
                  v-for="(rad, rIdx) in CONTINUOUS_RADII"
                  :key="`rad-${rIdx}`"
                  tabindex="0"
                  role="button"
                  :aria-label="`Sélectionner le cercle de rayon ${rad}`"
                  style="cursor: pointer;"
                  @click="activeFiberIdx = rIdx"
                  @keydown.enter.prevent="activeFiberIdx = rIdx"
                  @keydown.space.prevent="activeFiberIdx = rIdx"
                >
                  <circle
                    cx="106"
                    cy="110"
                    :r="rad * 48"
                    fill="none"
                    :stroke="activeFiberIdx === rIdx ? 'var(--jc-teal)' : 'var(--jc-slate)'"
                    :stroke-width="activeFiberIdx === rIdx ? 2.8 : 1.5"
                    :stroke-dasharray="rad === 1.0 ? 'none' : '4,3'"
                    :opacity="folded ? 0.35 : 0.9"
                    class="jc-svg-anim"
                  />

                  <!-- Points sur le cercle qui se replient vers le représentant (106 + rad*48, 110) -->
                  <circle
                    v-for="ang in CONTINUOUS_ANGLES"
                    :key="`pt-${rIdx}-${ang}`"
                    :cx="106 + rad * 48 * Math.cos((ang * Math.PI) / 180)"
                    :cy="110 - rad * 48 * Math.sin((ang * Math.PI) / 180)"
                    r="4"
                    :fill="activeFiberIdx === rIdx ? 'var(--jc-teal)' : 'var(--jc-navy)'"
                    :style="{
                      transform: folded
                        ? `translate(${(rad * 48 * (1 - Math.cos((ang * Math.PI) / 180))).toFixed(2)}px, ${(rad * 48 * Math.sin((ang * Math.PI) / 180)).toFixed(2)}px)`
                        : 'translate(0px, 0px)'
                    }"
                    class="jc-svg-anim"
                  />

                  <!-- Flèche vers R+* -->
                  <line
                    :x1="106 + rad * 48 + 6"
                    y1="110"
                    x2="244"
                    :y2="165 - rIdx * 50"
                    :stroke="activeFiberIdx === rIdx ? 'var(--jc-teal)' : 'var(--jc-border)'"
                    :stroke-width="activeFiberIdx === rIdx ? 2 : 1.2"
                    :marker-end="`url(#${uid}-iso-arr)`"
                  />

                  <circle
                    cx="250"
                    :cy="165 - rIdx * 50"
                    r="5.5"
                    :fill="activeFiberIdx === rIdx ? 'var(--jc-teal)' : 'var(--jc-navy)'"
                  />
                  <text
                    x="262"
                    :y="169 - rIdx * 50"
                    font-size="11.5"
                    font-weight="700"
                    fill="var(--jc-text)"
                  >
                    r = {{ rad }}
                  </text>
                </g>
              </svg>
            </div>

            <div class="jc-panel" style="min-width: 0;" data-lab-verdict>
              <div class="jc-subhead">Isomorphisme continu <span v-html="renderMath('\\C^* / U \\simeq \\R_+^*')" /></div>
              <p class="jc-diag-line" v-html="renderMath('g : \\C^* \\to \\R_+^*,\\; z \\mapsto |z|')" />
              <p class="jc-diag-line" v-html="renderMath('\\Ker g = U = \\{z \\in \\C^* \\mid |z| = 1\\}')" />
              <p class="jc-diag-line">
                <strong>Fibre active :</strong>
                <span v-html="renderMath(`g^{-1}(${CONTINUOUS_RADII[activeFiberIdx % 3]}) = ${CONTINUOUS_RADII[activeFiberIdx % 3]} U \\longleftrightarrow ${CONTINUOUS_RADII[activeFiberIdx % 3]}`)" />
              </p>
              <p class="jc-hint">
                En repliant chaque cercle de rayon r en une unique classe rU du quotient ℂ*/U, on obtient une bijection exacte avec ℝ₊*.
              </p>
            </div>
          </div>
        </template>
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

.jc-subhead {
  font-weight: 700;
  color: var(--jc-navy);
  margin-bottom: 0.45rem;
}

.jc-hint {
  font-size: 0.84rem;
  color: var(--jc-text-muted);
  margin: 0 0 0.65rem;
}

.jc-lagrange-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem 1rem;
  overflow-x: auto;
}

.jc-part-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
  gap: 0.45rem;
}

.jc-part-cell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.35rem;
  padding: 0.32rem 0.5rem;
  border-radius: 7px;
  border: 1.5px solid;
}

.jc-part-el {
  font-weight: 700;
}

.jc-cls-select {
  padding: 0.16rem 0.3rem;
  font-size: 0.78rem;
}

.jc-classes-summary {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.7rem;
}

.jc-coset-chip {
  padding: 0.24rem 0.52rem;
  border-radius: 6px;
  border: 1.5px solid;
  font-size: 0.86rem;
}

.jc-check-list,
.jc-witness-list {
  margin: 0.3rem 0 0 1.05rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  overflow-x: auto;
}

.jc-cayley-compact th,
.jc-cayley-compact td {
  padding: 0.24rem 0.42rem;
  min-width: 2rem;
  font-size: 0.8rem;
}

.jc-iso-stage {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.jc-fiber-row {
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 0.55rem;
  padding: 0.45rem 0.65rem;
  border-radius: 8px;
  border: 1.5px solid;
  cursor: pointer;
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s ease;
}

.jc-fiber-row.is-active {
  outline: 2px solid var(--jc-navy);
}

.jc-fiber-left {
  position: relative;
  min-height: 2rem;
  display: flex;
  align-items: center;
}

.jc-fiber-elems {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  transition: opacity 0.45s ease, transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
  transform-origin: left center;
}

.jc-fiber-elems.collapsed {
  opacity: 0;
  transform: scaleX(0.35) translateX(24px);
  pointer-events: none;
}

.jc-fiber-chip {
  padding: 0.14rem 0.42rem;
  border-radius: 5px;
  background: var(--jc-surface);
  color: var(--jc-text);
  border: 1px solid var(--jc-border);
}

.jc-fiber-class {
  position: absolute;
  left: 0;
  opacity: 0;
  transform: scale(0.75);
  transition: opacity 0.45s ease 0.12s, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.12s;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background: var(--jc-surface);
  color: var(--jc-text);
  border: 1.5px solid currentColor;
  pointer-events: none;
}

.jc-fiber-class.visible {
  opacity: 1;
  transform: scale(1);
}

.jc-fiber-arrow {
  font-size: 0.85rem;
  font-weight: 700;
  white-space: nowrap;
}

.jc-img-chip {
  display: inline-block;
  padding: 0.18rem 0.55rem;
  border-radius: 6px;
  background: var(--jc-surface);
  color: var(--jc-text);
  border: 1px solid var(--jc-border);
  font-weight: 700;
}

.jc-svg-anim {
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.45s ease;
}

.jc-diag-line {
  margin: 0.45rem 0;
  overflow-x: auto;
}

.jc-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>
