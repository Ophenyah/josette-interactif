<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  allSubgroups,
  checkMorphism,
  cyclicGroup,
  dihedralGroup,
  kleinGroup,
  symmetricGroup,
  unitsModN,
  type FiniteGroup
} from '../../math/groups'
import { renderMath } from '../../math/katex-macros'

interface GroupEntry {
  id: string
  shortLabel: string
  group: FiniteGroup
}

const CATALOG: GroupEntry[] = [
  { id: 'z2', shortLabel: 'ℤ/(2)', group: cyclicGroup(2) },
  { id: 'z3', shortLabel: 'ℤ/(3)', group: cyclicGroup(3) },
  { id: 'z4', shortLabel: 'ℤ/(4)', group: cyclicGroup(4) },
  { id: 'z5', shortLabel: 'ℤ/(5)', group: cyclicGroup(5) },
  { id: 'z6', shortLabel: 'ℤ/(6)', group: cyclicGroup(6) },
  { id: 'v4', shortLabel: 'Klein V', group: kleinGroup() },
  { id: 's3', shortLabel: 'S₃', group: symmetricGroup(3) },
  { id: 'd4', shortLabel: 'D₄', group: dihedralGroup(4) },
  { id: 'u8', shortLabel: '(ℤ/(8))×', group: unitsModN(8) }
]

interface CuratedPreset {
  label: string
  map: number[]
}

const CURATED_PRESETS: Record<string, CuratedPreset> = {
  's3->z2': { label: 'Signature ε : S₃ → ℤ/(2)', map: [0, 0, 0, 1, 1, 1] },
  'z6->z3': { label: 'Réduction mod 3 : ℤ/(6) → ℤ/(3)', map: [0, 1, 2, 0, 1, 2] },
  'z6->z2': { label: 'Réduction mod 2 : ℤ/(6) → ℤ/(2)', map: [0, 1, 0, 1, 0, 1] },
  'z4->z2': { label: 'Réduction mod 2 : ℤ/(4) → ℤ/(2)', map: [0, 1, 0, 1] },
  'z2->z4': { label: 'Injection 1̄ ↦ 2̄ : ℤ/(2) → ℤ/(4)', map: [0, 2] },
  'z2->z6': { label: 'Injection 1̄ ↦ 3̄ : ℤ/(2) → ℤ/(6)', map: [0, 3] },
  'z3->z6': { label: 'Injection 1̄ ↦ 2̄ : ℤ/(3) → ℤ/(6)', map: [0, 2, 4] },
  'z3->s3': { label: 'Plongement ⟨σ₁⟩ : ℤ/(3) → S₃', map: [0, 1, 2] },
  'z4->d4': { label: 'Plongement ⟨r⟩ : ℤ/(4) → D₄', map: [0, 1, 2, 3] },
  'd4->v4': { label: 'Quotient D₄ / Z(D₄) → V', map: [0, 1, 0, 1, 2, 3, 2, 3] },
  'd4->z2': { label: 'Parité des symétries : D₄ → ℤ/(2)', map: [0, 0, 0, 0, 1, 1, 1, 1] },
  'u8->v4': { label: 'Isomorphisme (ℤ/(8))× ≃ V', map: [0, 1, 2, 3] },
  'v4->u8': { label: 'Isomorphisme V ≃ (ℤ/(8))×', map: [0, 1, 2, 3] },
  'v4->d4': { label: 'Plongement ⟨r², s⟩ : V → D₄', map: [0, 2, 4, 6] },
  's3->s3': { label: 'Automorphisme intérieur (par τ₁)', map: [0, 2, 1, 3, 5, 4] },
  'z3->z3': { label: 'Automorphisme x̄ ↦ 2̄x̄', map: [0, 2, 1] },
  'z4->z4': { label: 'Automorphisme x̄ ↦ −x̄', map: [0, 3, 2, 1] },
  'z5->z5': { label: 'Automorphisme x̄ ↦ 2̄x̄', map: [0, 2, 4, 1, 3] },
  'z6->z6': { label: 'Automorphisme x̄ ↦ 5̄x̄', map: [0, 5, 4, 3, 2, 1] }
}

function getGroup(id: string): FiniteGroup {
  return (CATALOG.find((c) => c.id === id) ?? CATALOG[0]).group
}

function getMinimalGenerators(group: FiniteGroup): number[] {
  const subs = allSubgroups(group)
  return subs[subs.length - 1]?.minimalGenerators ?? []
}

function completeMapByGeneration(
  g1: FiniteGroup,
  g2: FiniteGroup,
  seedMap: readonly number[],
  generators: readonly number[]
): number[] {
  const n1 = g1.elements.length
  const next = new Array<number>(n1).fill(-1)
  next[g1.neutralIndex] = g2.neutralIndex
  const queue: number[] = [g1.neutralIndex]

  for (const gen of generators) {
    if (next[gen] === -1) {
      next[gen] = seedMap[gen] ?? g2.neutralIndex
      queue.push(gen)
    }
  }

  for (let i = 0; i < queue.length; i++) {
    const a = queue[i]
    for (let j = 0; j <= i; j++) {
      const b = queue[j]
      const ab = g1.table[a][b]
      if (next[ab] === -1) {
        next[ab] = g2.table[next[a]][next[b]]
        queue.push(ab)
      }
      const ba = g1.table[b][a]
      if (next[ba] === -1) {
        next[ba] = g2.table[next[b]][next[a]]
        queue.push(ba)
      }
    }
  }

  return next.map((v) => (v === -1 ? g2.neutralIndex : v))
}

function findInterestingPreset(g1: FiniteGroup, g2: FiniteGroup): CuratedPreset | null {
  const key = `${g1.id}->${g2.id}`
  if (CURATED_PRESETS[key]) {
    return CURATED_PRESETS[key]
  }
  if (g1.id === g2.id) {
    return {
      label: `Identité id : ${g1.name} → ${g2.name}`,
      map: g1.elements.map((_, i) => i)
    }
  }

  const gens = getMinimalGenerators(g1)
  const n2 = g2.elements.length
  const trivialMap = new Array<number>(g1.elements.length).fill(g2.neutralIndex)
  const chosen = new Array<number>(gens.length).fill(0)
  let best: { score: number; map: number[] } | null = null

  const search = (pos: number) => {
    if (pos === gens.length) {
      if (chosen.every((v) => v === g2.neutralIndex)) return
      const seed = [...trivialMap]
      gens.forEach((genIdx, k) => {
        seed[genIdx] = chosen[k]
      })
      const candidate = completeMapByGeneration(g1, g2, seed, gens)
      const rep = checkMorphism(g1, g2, candidate)
      if (!rep.isMorphism || rep.image.length <= 1) return
      const score = (rep.isBijective ? 100 : 0) + (rep.isSurjective ? 20 : 0) + (rep.isInjective ? 15 : 0) + rep.image.length
      if (!best || score > best.score) {
        best = { score, map: candidate }
      }
      return
    }
    for (let y = 0; y < n2; y++) {
      chosen[pos] = y
      search(pos + 1)
    }
  }

  if (gens.length <= 2) {
    search(0)
  }

  if (!best) return null
  const found = best as { score: number; map: number[] }
  return {
    label: `Morphisme non trivial ${g1.name} → ${g2.name}`,
    map: found.map
  }
}

const g1Id = ref<string>('s3')
const g2Id = ref<string>('z2')
const mapArray = ref<number[]>([...CURATED_PRESETS['s3->z2'].map])
const completionNote = ref<string>('')

const g1 = computed(() => getGroup(g1Id.value))
const g2 = computed(() => getGroup(g2Id.value))
const generators = computed(() => getMinimalGenerators(g1.value))
const generatorSet = computed(() => new Set(generators.value))
const interestingPreset = computed(() => findInterestingPreset(g1.value, g2.value))

const g1ElemHtmls = computed(() => g1.value.elementTex.map((t) => renderMath(t)))
const g2ElemHtmls = computed(() => g2.value.elementTex.map((t) => renderMath(t)))
const headerFormulaHtml = computed(() =>
  renderMath(`f : ${g1.value.texName} \\longrightarrow ${g2.value.texName}`)
)

const report = computed(() => checkMorphism(g1.value, g2.value, mapArray.value))

const failingHtmls = computed(() => {
  const a = g1.value
  const b = g2.value
  return report.value.failingPairs.slice(0, 6).map((fail) => {
    const xy = a.table[fail.x][fail.y]
    const fx = mapArray.value[fail.x]
    const fy = mapArray.value[fail.y]
    const tex =
      `f(${a.elementTex[fail.x]} ${a.opTex} ${a.elementTex[fail.y]})` +
      ` = f(${a.elementTex[xy]}) = ${b.elementTex[fail.fxy]}` +
      ` \\neq ${b.elementTex[fail.fxfy]}` +
      ` = ${b.elementTex[fx]} ${b.opTex} ${b.elementTex[fy]}` +
      ` = f(${a.elementTex[fail.x]}) ${b.opTex} f(${a.elementTex[fail.y]})`
    return renderMath(tex)
  })
})

const neutralCheckHtml = computed(() => {
  const e1 = g1.value.neutralIndex
  const fe1 = mapArray.value[e1]
  const e2 = g2.value.neutralIndex
  if (fe1 === e2) return ''
  return renderMath(
    `f(${g1.value.elementTex[e1]}) = ${g2.value.elementTex[fe1]} \\neq ${g2.value.elementTex[e2]}`
  )
})

const kernelHtml = computed(() => {
  const ker = report.value.kernel
  const list = ker.map((i) => g1.value.elementTex[i]).join(', ')
  return renderMath(`\\Ker f = \\{ ${list} \\} \\quad (|\\Ker f| = ${ker.length})`)
})

const imageHtml = computed(() => {
  const im = report.value.image
  const list = im.map((i) => g2.value.elementTex[i]).join(', ')
  return renderMath(`\\Im f = \\{ ${list} \\} \\quad (|\\Im f| = ${im.length})`)
})

const cardFormulaHtml = computed(() => {
  const n1 = g1.value.elements.length
  const nk = report.value.kernel.length
  const ni = report.value.image.length
  return renderMath(`|G| = |\\Ker f| \\cdot |\\Im f| \\;:\\; ${n1} = ${nk} \\times ${ni}`)
})

const natureBadges = computed(() => {
  const r = report.value
  const list: string[] = []
  if (r.isBijective) {
    list.push(g1.value.id === g2.value.id ? 'Automorphisme (bijectif)' : 'Isomorphisme (bijectif)')
  } else {
    if (r.isInjective) list.push('Monomorphisme (injectif)')
    if (r.isSurjective) list.push('Épimorphisme (surjectif)')
    if (g1.value.id === g2.value.id) list.push('Endomorphisme')
    if (list.length === 0) list.push('Morphisme (ni injectif, ni surjectif)')
  }
  return list
})

function resetForNewPair(nextG1Id: string, nextG2Id: string) {
  g1Id.value = nextG1Id
  g2Id.value = nextG2Id
  completionNote.value = ''
  const nextG1 = getGroup(nextG1Id)
  const nextG2 = getGroup(nextG2Id)
  const preset = findInterestingPreset(nextG1, nextG2)
  if (preset) {
    mapArray.value = [...preset.map]
  } else {
    mapArray.value = new Array<number>(nextG1.elements.length).fill(nextG2.neutralIndex)
  }
}

function setElementImage(xIdx: number, yIdx: number) {
  const next = [...mapArray.value]
  next[xIdx] = yIdx
  mapArray.value = next
  completionNote.value = ''
}

function cycleElementImage(xIdx: number) {
  const n2 = g2.value.elements.length
  const current = mapArray.value[xIdx] ?? 0
  setElementImage(xIdx, (current + 1) % n2)
}

function applyTrivial() {
  mapArray.value = new Array<number>(g1.value.elements.length).fill(g2.value.neutralIndex)
  completionNote.value = ''
}

function applyPreset() {
  if (!interestingPreset.value) return
  mapArray.value = [...interestingPreset.value.map]
  completionNote.value = ''
}

function applyGenerateCompletion() {
  const completed = completeMapByGeneration(g1.value, g2.value, mapArray.value, generators.value)
  mapArray.value = completed
  const rep = checkMorphism(g1.value, g2.value, completed)
  const genNames = generators.value.map((idx) => g1.value.elements[idx]).join(', ')
  completionNote.value = rep.isMorphism
    ? `Complété par morphisme depuis les générateurs {${genNames}}.`
    : `Complété depuis les générateurs {${genNames}}, mais les images choisies ne respectent pas les relations de G.`
}
</script>

<template>
  <section class="jc-lab-card" data-lab="morphism">
    <header class="jc-card-header">
      <div class="jc-card-title">
        Laboratoire — Testeur libre de morphismes de groupes
      </div>
      <span class="jc-fold-badge">I § 3 — Définition (1.60)</span>
    </header>

    <div class="jc-card-body">
      <div class="jc-controls">
        <label class="jc-field-label" for="morph-g1">
          <span>Départ G :</span>
          <select
            id="morph-g1"
            class="jc-select"
            :value="g1Id"
            @change="resetForNewPair(($event.target as HTMLSelectElement).value, g2Id)"
          >
            <option v-for="item in CATALOG" :key="`g1-${item.id}`" :value="item.id">
              {{ item.shortLabel }} (ordre {{ item.group.elements.length }})
            </option>
          </select>
        </label>

        <label class="jc-field-label" for="morph-g2">
          <span>Arrivée G′ :</span>
          <select
            id="morph-g2"
            class="jc-select"
            :value="g2Id"
            @change="resetForNewPair(g1Id, ($event.target as HTMLSelectElement).value)"
          >
            <option v-for="item in CATALOG" :key="`g2-${item.id}`" :value="item.id">
              {{ item.shortLabel }} (ordre {{ item.group.elements.length }})
            </option>
          </select>
        </label>

        <span class="jc-header-math" v-html="headerFormulaHtml" />
      </div>

      <div class="jc-controls">
        <button type="button" class="jc-btn" @click="applyTrivial">
          Morphisme trivial
        </button>
        <button
          type="button"
          class="jc-btn teal active"
          :disabled="!interestingPreset"
          :title="interestingPreset ? interestingPreset.label : 'Aucun morphisme non trivial entre G et G′'"
          @click="applyPreset"
        >
          {{ interestingPreset ? `Préréglage : ${interestingPreset.label}` : 'Aucun morphisme non trivial' }}
        </button>
        <button type="button" class="jc-btn primary" @click="applyGenerateCompletion">
          Compléter par génération
        </button>
      </div>

      <p v-if="completionNote" class="jc-note-line">
        {{ completionNote }}
      </p>

      <div class="jc-grid-2">
        <div class="jc-panel" style="min-width: 0;">
          <div class="jc-subhead">
            Définition de <span v-html="renderMath('f(x)')" /> pour chaque <span v-html="renderMath('x \\in G')" />
          </div>
          <p class="jc-hint">
            Cliquez sur un élément pour faire défiler son image ou utilisez le sélecteur. Les éléments marqués <strong>gén.</strong> engendrent G.
          </p>

          <div class="jc-map-list">
            <div
              v-for="(elHtml, idx) in g1ElemHtmls"
              :key="`map-${g1.id}-${idx}`"
              class="jc-map-row"
              :class="{ 'is-gen': generatorSet.has(idx) }"
            >
              <button
                type="button"
                class="jc-btn jc-elem-btn"
                :aria-label="`Changer l'image de ${g1.elements[idx]}`"
                @click="cycleElementImage(idx)"
              >
                <span v-html="elHtml" />
                <span v-if="generatorSet.has(idx)" class="jc-gen-tag">gén.</span>
              </button>

              <span class="jc-arrow" aria-hidden="true">↦</span>

              <label class="jc-sr-only" :for="`morph-sel-${idx}`">
                Image de {{ g1.elements[idx] }}
              </label>
              <select
                :id="`morph-sel-${idx}`"
                class="jc-select"
                :value="mapArray[idx]"
                @change="setElementImage(idx, Number(($event.target as HTMLSelectElement).value))"
              >
                <option
                  v-for="(yLabel, yIdx) in g2.elements"
                  :key="`opt-${idx}-${yIdx}`"
                  :value="yIdx"
                >
                  {{ yLabel }}
                </option>
              </select>

              <span class="jc-mapped-preview" v-html="g2ElemHtmls[mapArray[idx]]" />
            </div>
          </div>
        </div>

        <div class="jc-panel" style="min-width: 0;" data-lab-verdict>
          <div style="margin-bottom: 0.5rem;">
            <strong>Verdict : </strong>
            <span v-if="report.isMorphism" class="jc-status-ok">
              ✔ Morphisme de groupes valide
            </span>
            <span v-else class="jc-status-err">
              ✘ Ce n’est pas un morphisme
            </span>
          </div>

          <template v-if="report.isMorphism">
            <div class="jc-badge-row">
              <span
                v-for="badge in natureBadges"
                :key="badge"
                class="jc-nature-badge"
              >
                {{ badge }}
              </span>
            </div>

            <div class="jc-diag-line" v-html="kernelHtml" />
            <div class="jc-diag-line" v-html="imageHtml" />
            <div class="jc-diag-line jc-card-check" v-html="cardFormulaHtml" />
          </template>

          <template v-else>
            <p v-if="neutralCheckHtml" class="jc-diag-line jc-status-err">
              Neutre non préservé : <span v-html="neutralCheckHtml" />
            </p>
            <p class="jc-diag-line">
              <strong>{{ report.failingPairs.length }}</strong> couple(s) en échec
              <span v-html="renderMath('f(xy) \\neq f(x)f(y)')" /> :
            </p>
            <ul class="jc-fail-list">
              <li v-for="(html, k) in failingHtmls" :key="`fail-${k}`" v-html="html" />
            </ul>
            <p v-if="report.failingPairs.length > failingHtmls.length" class="jc-hint">
              … et {{ report.failingPairs.length - failingHtmls.length }} autre(s) couple(s).
            </p>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.jc-field-label {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  font-weight: 600;
}

.jc-header-math {
  margin-left: auto;
  font-weight: 600;
}

.jc-note-line {
  margin: 0 0 0.75rem;
  padding: 0.45rem 0.7rem;
  border-radius: 6px;
  border-left: 3px solid var(--jc-teal);
  background: var(--jc-teal-soft);
  font-size: 0.86rem;
}

.jc-subhead {
  font-weight: 700;
  color: var(--jc-navy);
  margin-bottom: 0.25rem;
}

.jc-hint {
  margin: 0 0 0.65rem;
  font-size: 0.82rem;
  color: var(--jc-text-muted);
}

.jc-map-list {
  display: flex;
  flex-direction: column;
  gap: 0.42rem;
}

.jc-map-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem;
  padding: 0.3rem 0.45rem;
  border-radius: 6px;
  border: 1px solid var(--jc-border);
  background: var(--jc-surface);
}

.jc-map-row.is-gen {
  border-color: var(--jc-teal);
}

.jc-elem-btn {
  min-width: 4.5rem;
  justify-content: space-between;
}

.jc-gen-tag {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.05rem 0.3rem;
  border-radius: 4px;
  background: var(--jc-teal-soft);
  color: var(--jc-teal);
}

.jc-arrow {
  color: var(--jc-text-muted);
  font-weight: 700;
}

.jc-mapped-preview {
  margin-left: auto;
  padding: 0.1rem 0.45rem;
  border-radius: 5px;
  background: var(--jc-navy-soft);
  color: var(--jc-navy);
}

.jc-badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.6rem;
}

.jc-nature-badge {
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.18rem 0.55rem;
  border-radius: 999px;
  background: var(--jc-emerald-soft);
  border: 1px solid var(--jc-emerald);
  color: var(--jc-emerald);
}

.jc-diag-line {
  margin: 0.45rem 0;
  overflow-x: auto;
}

.jc-card-check {
  padding: 0.45rem 0.6rem;
  border-radius: 6px;
  background: var(--jc-surface);
  border: 1px solid var(--jc-border);
}

.jc-fail-list {
  margin: 0.35rem 0 0.4rem 1rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  overflow-x: auto;
}

.jc-btn:disabled {
  opacity: 0.55;
  cursor: not-allowed;
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
