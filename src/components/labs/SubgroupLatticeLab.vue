<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  allSubgroups,
  checkHKequalsKH,
  cyclicGroup,
  dihedralGroup,
  generatedSubgroup,
  kleinGroup,
  quaternionGroup,
  subgroupLattice,
  symmetricGroup,
  unitsModN,
  type FiniteGroup,
  type SubgroupNode
} from '../../math/groups'
import { renderMath } from '../../math/katex-macros'

type TabKind = 'gen' | 'hk'
type CatalogKey = 'z6' | 'z8' | 'z12' | 'u12' | 'v4' | 's3' | 'd4' | 'q8'

interface CatalogEntry {
  key: CatalogKey
  btnLabel: string
  shortGroupLabel: string
  build: () => FiniteGroup
  defaultSeed: number[]
  defaultHIdx: number
  defaultKIdx: number
}

const CATALOG: CatalogEntry[] = [
  { key: 'z6', btnLabel: 'ℤ/(6)', shortGroupLabel: 'ℤ/(6)', build: () => cyclicGroup(6), defaultSeed: [2], defaultHIdx: 1, defaultKIdx: 2 },
  { key: 'z8', btnLabel: 'ℤ/(8)', shortGroupLabel: 'ℤ/(8)', build: () => cyclicGroup(8), defaultSeed: [2], defaultHIdx: 1, defaultKIdx: 2 },
  { key: 'z12', btnLabel: 'ℤ/(12)', shortGroupLabel: 'ℤ/(12)', build: () => cyclicGroup(12), defaultSeed: [4, 6], defaultHIdx: 2, defaultKIdx: 3 },
  { key: 'u12', btnLabel: '(ℤ/12ℤ)×', shortGroupLabel: '(ℤ/12ℤ)×', build: () => unitsModN(12), defaultSeed: [1], defaultHIdx: 1, defaultKIdx: 2 },
  { key: 'v4', btnLabel: 'Klein V', shortGroupLabel: 'V', build: () => kleinGroup(), defaultSeed: [1], defaultHIdx: 1, defaultKIdx: 2 },
  { key: 's3', btnLabel: 'S₃', shortGroupLabel: 'S₃', build: () => symmetricGroup(3), defaultSeed: [1, 3], defaultHIdx: 1, defaultKIdx: 2 },
  { key: 'd4', btnLabel: 'D₄', shortGroupLabel: 'D₄', build: () => dihedralGroup(4), defaultSeed: [1, 4], defaultHIdx: 2, defaultKIdx: 3 },
  { key: 'q8', btnLabel: 'Q₈', shortGroupLabel: 'Q₈', build: () => quaternionGroup(), defaultSeed: [2], defaultHIdx: 2, defaultKIdx: 3 }
]

const tab = ref<TabKind>('gen')
const groupKey = ref<CatalogKey>('s3')
const selectedS = ref<number[]>([1, 3])
const inspectedNodeId = ref<string | null>(null)
const hSubId = ref<string>('')
const kSubId = ref<string>('')

const activeEntry = computed<CatalogEntry>(
  () => CATALOG.find((c) => c.key === groupKey.value) ?? CATALOG[5]
)

const group = computed<FiniteGroup>(() => activeEntry.value.build())
const lattice = computed(() => subgroupLattice(group.value))
const subgroups = computed<SubgroupNode[]>(() => allSubgroups(group.value))

const generatedElements = computed<number[]>(() =>
  generatedSubgroup(group.value, selectedS.value)
)

const activeNode = computed<SubgroupNode>(() => {
  const key = `sg-${generatedElements.value.join('-')}`
  return lattice.value.nodes.find((n) => n.id === key) ?? lattice.value.nodes[0]
})

const inspectedNode = computed<SubgroupNode>(() => {
  if (inspectedNodeId.value) {
    const found = lattice.value.nodes.find((n) => n.id === inspectedNodeId.value)
    if (found) return found
  }
  return activeNode.value
})

interface LatticePosNode {
  node: SubgroupNode
  x: number
  y: number
  w: number
  shortText: string
}

function shortSvgNodeLabel(node: SubgroupNode): string {
  if (node.order === group.value.elements.length) {
    return activeEntry.value.shortGroupLabel
  }
  return node.label
}

const latticeSvgLayout = computed(() => {
  const nodes = lattice.value.nodes
  const byOrder = new Map<number, SubgroupNode[]>()
  for (const node of nodes) {
    const arr = byOrder.get(node.order)
    if (arr) arr.push(node)
    else byOrder.set(node.order, [node])
  }
  // Ordres décroissants du haut (G) vers le bas ((e))
  const ordersDesc = Array.from(byOrder.keys()).sort((a, b) => b - a)

  const boxH = 30
  const gapX = 12
  const levelStepY = 58
  const padX = 20
  const padY = 26

  const nodeWidths = new Map<string, number>()
  for (const node of nodes) {
    const shortText = shortSvgNodeLabel(node)
    const charBonus = node.isNormal ? 18 : 0
    nodeWidths.set(node.id, Math.max(82, Math.min(132, Math.ceil(shortText.length * 7.2 + 22 + charBonus))))
  }

  const rowWidths = ordersDesc.map((ord) => {
    const row = byOrder.get(ord)!
    const sumW = row.reduce((acc, node) => acc + (nodeWidths.get(node.id) ?? 86), 0)
    return sumW + Math.max(0, row.length - 1) * gapX
  })

  const width = Math.max(380, ...rowWidths.map((rw) => rw + 2 * padX))
  const height = Math.max(210, ordersDesc.length * levelStepY + 2 * padY - 18)

  const posNodes: LatticePosNode[] = []
  const posById = new Map<string, LatticePosNode>()

  ordersDesc.forEach((ord, rowIdx) => {
    const row = byOrder.get(ord)!
    const totalW = rowWidths[rowIdx]
    let curX = (width - totalW) / 2
    const y = padY + boxH / 2 + rowIdx * levelStepY

    row.forEach((node) => {
      const shortText = shortSvgNodeLabel(node)
      const w = nodeWidths.get(node.id) ?? 86
      const x = curX + w / 2
      curX += w + gapX
      const item: LatticePosNode = {
        node,
        x,
        y,
        w,
        shortText
      }
      posNodes.push(item)
      posById.set(node.id, item)
    })
  })

  const edges = lattice.value.edges
    .map((e) => {
      const from = posById.get(e.from)
      const to = posById.get(e.to)
      if (!from || !to) return null
      return {
        key: `${e.from}->${e.to}`,
        fromId: e.from,
        toId: e.to,
        x1: from.x,
        y1: from.y,
        x2: to.x,
        y2: to.y
      }
    })
    .filter((x): x is NonNullable<typeof x> => x !== null)

  return { width, height, boxH, posNodes, edges }
})

function formatElementSetTex(indices: readonly number[]): string {
  if (indices.length === 0) return '\\varnothing'
  return `\\{ ${indices.map((i) => group.value.elementTex[i]).join(', ')} \\}`
}

const genInfoHtml = computed(() => {
  const g = group.value
  const sTex =
    selectedS.value.length === 0
      ? '\\varnothing \\;(\\text{convention } (e))'
      : formatElementSetTex(selectedS.value)
  const genTex = formatElementSetTex(generatedElements.value)
  const insp = inspectedNode.value
  const inspElemsTex = formatElementSetTex(insp.elements)
  const inspGensTex =
    insp.minimalGenerators.length === 0
      ? '\\varnothing'
      : formatElementSetTex(insp.minimalGenerators)

  return {
    groupTitle: renderMath(`${g.texName} \\quad (\\text{ordre } ${g.elements.length})`),
    sSet: renderMath(`S = ${sTex}`),
    genSet: renderMath(`\\langle S \\rangle = ${genTex}`),
    activeLabel: renderMath(activeNode.value.texLabel),
    inspLabel: renderMath(insp.texLabel),
    inspElems: renderMath(inspElemsTex),
    inspGens: renderMath(inspGensTex),
    inspIndex: renderMath(`[G : H] = ${g.elements.length / insp.order}`)
  }
})

// Onglet 2 : HK vs KH
const selectedH = computed<SubgroupNode>(() => {
  const found = subgroups.value.find((s) => s.id === hSubId.value)
  if (found) return found
  const defIdx = Math.min(activeEntry.value.defaultHIdx, subgroups.value.length - 1)
  return subgroups.value[defIdx] ?? subgroups.value[0]
})

const selectedK = computed<SubgroupNode>(() => {
  const found = subgroups.value.find((s) => s.id === kSubId.value)
  if (found) return found
  const defIdx = Math.min(activeEntry.value.defaultKIdx, subgroups.value.length - 1)
  return subgroups.value[defIdx] ?? subgroups.value[0]
})

const hkReport = computed(() =>
  checkHKequalsKH(group.value, selectedH.value.elements, selectedK.value.elements)
)

const hkWitness = computed(() => {
  const r = hkReport.value
  if (r.isSubgroup) return null
  const g = group.value
  const hkSet = new Set(r.hk)

  // 1. Chercher k in K, h in H tel que kh not in HK
  let khOutside: { k: number; h: number; prod: number } | null = null
  outer1: for (const k of selectedK.value.elements) {
    for (const h of selectedH.value.elements) {
      const prod = g.table[k][h]
      if (!hkSet.has(prod)) {
        khOutside = { k, h, prod }
        break outer1
      }
    }
  }

  // 2. Chercher x in HK tel que x^{-1} not in HK
  let invOutside: { x: number; inv: number } | null = null
  for (const x of r.hk) {
    const inv = g.table[x].indexOf(g.neutralIndex)
    if (inv !== -1 && !hkSet.has(inv)) {
      invOutside = { x, inv }
      break
    }
  }

  // 3. Chercher x, y in HK tel que xy not in HK
  let prodOutside: { x: number; y: number; prod: number } | null = null
  outer3: for (const x of r.hk) {
    for (const y of r.hk) {
      const prod = g.table[x][y]
      if (!hkSet.has(prod)) {
        prodOutside = { x, y, prod }
        break outer3
      }
    }
  }

  return { khOutside, invOutside, prodOutside }
})

const hkHtml = computed(() => {
  const g = group.value
  const H = selectedH.value
  const K = selectedK.value
  const r = hkReport.value
  const w = hkWitness.value

  const spanHK = generatedSubgroup(g, [...H.elements, ...K.elements])

  let witnessTex = ''
  if (w) {
    const parts: string[] = []
    if (w.khOutside) {
      parts.push(
        `${g.elementTex[w.khOutside.k]} ${g.opTex} ${g.elementTex[w.khOutside.h]} = ${g.elementTex[w.khOutside.prod]} \\in KH \\setminus HK`
      )
    }
    if (w.invOutside) {
      parts.push(
        `(${g.elementTex[w.invOutside.x]})^{-1} = ${g.elementTex[w.invOutside.inv]} \\notin HK`
      )
    } else if (w.prodOutside) {
      parts.push(
        `${g.elementTex[w.prodOutside.x]} ${g.opTex} ${g.elementTex[w.prodOutside.y]} = ${g.elementTex[w.prodOutside.prod]} \\notin HK`
      )
    }
    witnessTex = parts.join(' \\quad ; \\quad ')
  }

  return {
    hDesc: renderMath(`H = ${H.texLabel} = ${formatElementSetTex(H.elements)}`),
    kDesc: renderMath(`K = ${K.texLabel} = ${formatElementSetTex(K.elements)}`),
    hkSet: renderMath(`HK = ${formatElementSetTex(r.hk)}`),
    khSet: renderMath(`KH = ${formatElementSetTex(r.kh)}`),
    spanSet: renderMath(`\\langle H \\cup K \\rangle = ${formatElementSetTex(spanHK)}`),
    witness: witnessTex ? renderMath(witnessTex) : ''
  }
})

function selectGroup(key: CatalogKey) {
  groupKey.value = key
  const entry = CATALOG.find((c) => c.key === key) ?? CATALOG[0]
  selectedS.value = [...entry.defaultSeed]
  inspectedNodeId.value = null
  const subs = allSubgroups(entry.build())
  hSubId.value = subs[Math.min(entry.defaultHIdx, subs.length - 1)]?.id ?? ''
  kSubId.value = subs[Math.min(entry.defaultKIdx, subs.length - 1)]?.id ?? ''
}

function toggleSeedElement(idx: number) {
  if (selectedS.value.includes(idx)) {
    selectedS.value = selectedS.value.filter((v) => v !== idx)
  } else {
    selectedS.value = [...selectedS.value, idx].sort((a, b) => a - b)
  }
  inspectedNodeId.value = null
}

function clearSeed() {
  selectedS.value = []
  inspectedNodeId.value = null
}

function inspectNode(node: SubgroupNode) {
  inspectedNodeId.value = node.id
}

function loadNodeGeneratorsAsS(node: SubgroupNode) {
  selectedS.value = [...node.minimalGenerators]
  inspectedNodeId.value = node.id
}
</script>

<template>
  <section class="jc-lab-card" data-lab="subgroup-lattice">
    <header class="jc-card-header">
      <div class="jc-card-title">
        Laboratoire — Sous-groupes engendrés ⟨S⟩, treillis de Hasse &amp; produit HK
      </div>
      <span class="jc-fold-badge">Prop. (1.38) &amp; (1.47) · I § 2</span>
    </header>

    <div class="jc-card-body">
      <div class="jc-controls">
        <div class="jc-lat-ctrl-row">
          <span class="jc-lat-lbl">Mode :</span>
          <button
            type="button"
            class="jc-btn"
            :class="{ active: tab === 'gen' }"
            @click="tab = 'gen'"
          >
            ⟨S⟩ &amp; Treillis de Hasse
          </button>
          <button
            type="button"
            class="jc-btn"
            :class="{ active: tab === 'hk' }"
            @click="tab = 'hk'"
          >
            Tester HK vs KH (Prop. 1.47)
          </button>
        </div>

        <div class="jc-lat-ctrl-row">
          <span class="jc-lat-lbl">Groupe :</span>
          <button
            v-for="entry in CATALOG"
            :key="entry.key"
            type="button"
            class="jc-btn teal"
            :class="{ active: groupKey === entry.key }"
            @click="selectGroup(entry.key)"
          >
            {{ entry.btnLabel }}
          </button>
        </div>
      </div>

      <template v-if="tab === 'gen'">
        <div class="jc-controls">
          <span class="jc-lat-lbl">Partie S ⊆ G :</span>
          <button
            v-for="(tex, idx) in group.elementTex"
            :key="`el-${idx}`"
            type="button"
            class="jc-btn"
            :class="{ active: selectedS.includes(idx) }"
            :aria-pressed="selectedS.includes(idx)"
            @click="toggleSeedElement(idx)"
            v-html="renderMath(tex)"
          />
          <button type="button" class="jc-btn" @click="clearSeed">
            Vider S
          </button>
        </div>

        <div class="jc-grid-2">
          <div class="jc-lat-svg-col">
            <div class="jc-lat-svg-wrap">
              <svg
                :viewBox="`0 0 ${latticeSvgLayout.width} ${latticeSvgLayout.height}`"
                style="max-width: 100%; height: auto; display: block; margin: 0 auto;"
                role="img"
                :aria-label="`Diagramme de Hasse des sous-groupes de ${group.name}`"
              >
                <g>
                  <line
                    v-for="edge in latticeSvgLayout.edges"
                    :key="edge.key"
                    :x1="edge.x1"
                    :y1="edge.y1"
                    :x2="edge.x2"
                    :y2="edge.y2"
                    :stroke="
                      edge.fromId === activeNode.id || edge.toId === activeNode.id
                        ? 'var(--jc-teal)'
                        : 'var(--jc-border)'
                    "
                    :stroke-width="
                      edge.fromId === activeNode.id || edge.toId === activeNode.id ? 2.4 : 1.5
                    "
                  />
                </g>

                <g
                  v-for="item in latticeSvgLayout.posNodes"
                  :key="item.node.id"
                  class="jc-lat-node"
                  role="button"
                  tabindex="0"
                  :aria-pressed="item.node.id === inspectedNode.id"
                  :aria-label="`Sous-groupe ${item.node.label}, ordre ${item.node.order}${item.node.isNormal ? ', distingué' : ''}`"
                  @click="inspectNode(item.node)"
                  @keydown.enter.prevent="inspectNode(item.node)"
                  @keydown.space.prevent="inspectNode(item.node)"
                >
                  <rect
                    v-if="item.node.isNormal"
                    :x="item.x - item.w / 2 - 3"
                    :y="item.y - latticeSvgLayout.boxH / 2 - 3"
                    :width="item.w + 6"
                    :height="latticeSvgLayout.boxH + 6"
                    rx="8"
                    fill="none"
                    stroke="var(--jc-navy)"
                    stroke-width="1.3"
                    stroke-dasharray="3,2"
                  />
                  <rect
                    :x="item.x - item.w / 2"
                    :y="item.y - latticeSvgLayout.boxH / 2"
                    :width="item.w"
                    :height="latticeSvgLayout.boxH"
                    rx="6"
                    :fill="
                      item.node.id === activeNode.id
                        ? 'var(--jc-teal)'
                        : item.node.id === inspectedNode.id
                          ? 'var(--jc-amber-soft)'
                          : 'var(--jc-surface)'
                    "
                    :stroke="
                      item.node.id === activeNode.id
                        ? 'var(--jc-teal)'
                        : item.node.id === inspectedNode.id
                          ? 'var(--jc-amber)'
                          : 'var(--jc-navy)'
                    "
                    :stroke-width="
                      item.node.id === activeNode.id || item.node.id === inspectedNode.id ? 2.2 : 1.4
                    "
                  />
                  <text
                    :x="item.x"
                    :y="item.y + 4"
                    text-anchor="middle"
                    font-size="11"
                    font-weight="700"
                    :fill="item.node.id === activeNode.id ? 'var(--jc-surface)' : 'var(--jc-text)'"
                  >
                    {{ item.shortText }}{{ item.node.isNormal ? ' ◁' : '' }}
                  </text>
                </g>
              </svg>
            </div>

            <div class="jc-lat-legend">
              <span><span class="sw sw-teal" /> ⟨S⟩ actif</span>
              <span><span class="sw sw-amber" /> Nœud inspecté</span>
              <span><span class="sw sw-norm" /> Sous-groupe normal (◁)</span>
            </div>
          </div>

          <div class="jc-panel">
            <div class="jc-lat-line">
              <strong>Groupe :</strong> <span v-html="genInfoHtml.groupTitle" />
              <span> — {{ subgroups.length }} sous-groupes</span>
            </div>
            <div class="jc-lat-line">
              <strong>Partie choisie :</strong> <span v-html="genInfoHtml.sSet" />
            </div>
            <div class="jc-lat-line">
              <strong>Sous-groupe engendré :</strong> <span v-html="genInfoHtml.genSet" />
            </div>
            <div class="jc-lat-line">
              <strong>Nœud correspondant :</strong> <span v-html="genInfoHtml.activeLabel" />
              (ordre {{ activeNode.order }}) —
              <span v-if="activeNode.order === group.elements.length" class="jc-status-ok">
                ✔ S engendre tout G
              </span>
              <span v-else>sous-groupe propre</span>
            </div>

            <hr class="jc-lat-sep" />

            <div class="jc-lat-line">
              <strong>Nœud inspecté :</strong> <span v-html="genInfoHtml.inspLabel" />
              <span class="jc-fold-badge" style="margin-left: 0.35rem;">
                {{ inspectedNode.isNormal ? 'Distingué (normal)' : 'Non distingué' }}
              </span>
            </div>
            <div class="jc-lat-line">
              <strong>Éléments :</strong> <span v-html="genInfoHtml.inspElems" />
            </div>
            <div class="jc-lat-line">
              <strong>Générateurs minimaux :</strong> <span v-html="genInfoHtml.inspGens" />
            </div>
            <div class="jc-lat-line">
              <strong>Ordre &amp; indice :</strong> o(H) = {{ inspectedNode.order }} ·
              <span v-html="genInfoHtml.inspIndex" />
            </div>
            <div style="margin-top: 0.55rem;">
              <button
                type="button"
                class="jc-btn"
                @click="loadNodeGeneratorsAsS(inspectedNode)"
              >
                Charger ces générateurs dans S
              </button>
            </div>
          </div>
        </div>
      </template>

      <template v-else>
        <div class="jc-controls jc-lat-hk-pickers">
          <div class="jc-lat-ctrl-row">
            <span class="jc-lat-lbl">Sous-groupe H :</span>
            <button
              v-for="sub in subgroups"
              :key="`h-${sub.id}`"
              type="button"
              class="jc-btn"
              :class="{ active: selectedH.id === sub.id }"
              @click="hSubId = sub.id"
              v-html="renderMath(sub.texLabel)"
            />
          </div>
          <div class="jc-lat-ctrl-row">
            <span class="jc-lat-lbl">Sous-groupe K :</span>
            <button
              v-for="sub in subgroups"
              :key="`k-${sub.id}`"
              type="button"
              class="jc-btn teal"
              :class="{ active: selectedK.id === sub.id }"
              @click="kSubId = sub.id"
              v-html="renderMath(sub.texLabel)"
            />
          </div>
        </div>

        <div class="jc-panel">
          <div class="jc-lat-line">
            <span v-html="hkHtml.hDesc" /> (cardinal {{ selectedH.order }})
            &nbsp;|&nbsp;
            <span v-html="hkHtml.kDesc" /> (cardinal {{ selectedK.order }})
          </div>
          <div class="jc-lat-line">
            <span v-html="hkHtml.hkSet" /> — cardinal <strong>{{ hkReport.hk.length }}</strong>
          </div>
          <div class="jc-lat-line">
            <span v-html="hkHtml.khSet" /> — cardinal <strong>{{ hkReport.kh.length }}</strong>
          </div>

          <div class="jc-lat-line" style="margin-top: 0.6rem;">
            <template v-if="hkReport.equal && hkReport.isSubgroup">
              <span class="jc-status-ok">
                ✔ HK = KH : d’après la proposition (1.47), HK est un sous-groupe de G (égal à ⟨H ∪ K⟩).
              </span>
            </template>
            <template v-else>
              <span class="jc-status-err">
                ✘ HK ≠ KH : ni HK ni KH ne sont des sous-groupes de G.
              </span>
              <div v-if="hkHtml.witness" style="margin-top: 0.35rem;">
                <strong>Témoin d’échec :</strong> <span v-html="hkHtml.witness" />
              </div>
              <div style="margin-top: 0.3rem;">
                <strong>Sous-groupe engendré par H ∪ K :</strong> <span v-html="hkHtml.spanSet" />
              </div>
            </template>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<style scoped>
.jc-lat-ctrl-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
}

.jc-lat-lbl {
  font-size: 0.84rem;
  font-weight: 700;
  color: var(--jc-text);
}

.jc-lat-hk-pickers {
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
}

.jc-lat-svg-col {
  min-width: 0;
}

.jc-lat-svg-wrap {
  border: 1px solid var(--jc-border);
  border-radius: 8px;
  background: var(--jc-surface);
  padding: 0.45rem;
}

.jc-lat-node {
  cursor: pointer;
}

.jc-lat-node:focus-visible rect {
  outline: 2px solid var(--jc-navy);
  outline-offset: 2px;
}

.jc-lat-legend {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.45rem 0.9rem;
  margin-top: 0.45rem;
  font-size: 0.78rem;
  color: var(--jc-text-muted);
}

.jc-lat-legend > span {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

.sw {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 3px;
}

.sw-teal {
  background: var(--jc-teal);
}

.sw-amber {
  background: var(--jc-amber-soft);
  border: 2px solid var(--jc-amber);
}

.sw-norm {
  background: var(--jc-surface);
  border: 1.5px dashed var(--jc-navy);
}

.jc-lat-line {
  margin-top: 0.4rem;
  line-height: 1.55;
}

.jc-lat-line:first-child {
  margin-top: 0;
}

.jc-lat-sep {
  border: none;
  border-top: 1px solid var(--jc-border);
  margin: 0.65rem 0;
}

.jc-panel {
  min-width: 0;
}
</style>
