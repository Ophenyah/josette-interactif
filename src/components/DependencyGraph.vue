<script setup lang="ts">
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'
import { REGISTRY, type RegistryEntry, type RegistryKind } from '../data/registry'
import { renderSafeMarkdownMath } from '../math/katex-macros'

type ChapterFilter = 'all' | 1 | 2 | 3
type ThemeFilter =
  | 'all'
  | 'axioms'
  | 'subgroups'
  | 'morphisms'
  | 'product'
  | 'quotient'
  | 'cyclic'
  | 'symmetric'
  | 'dihedral'

interface PositionedNode {
  entry: RegistryEntry
  layer: number
  x: number
  y: number
}

interface GraphEdge {
  from: string
  to: string
  bridged: boolean
}

const KIND_LABELS: Record<RegistryKind, string> = {
  def: 'Définition',
  not: 'Notation',
  thm: 'Théorème',
  prop: 'Proposition',
  cor: 'Corollaire',
  lem: 'Lemme',
  rem: 'Remarque',
  ex: 'Exemple',
  eq: 'Équation',
  table: 'Table'
}

const THEME_OPTIONS: Array<{ value: ThemeFilter; label: string }> = [
  { value: 'all', label: 'Tous les thèmes' },
  { value: 'axioms', label: 'Axiomes & loi (I § 1)' },
  { value: 'subgroups', label: 'Sous-groupes (I § 2)' },
  { value: 'morphisms', label: 'Morphismes (I § 3)' },
  { value: 'product', label: 'Produit direct (I § 4)' },
  { value: 'quotient', label: 'Classes & quotient (II § 1–2)' },
  { value: 'cyclic', label: 'Groupes monogènes & φ(n) (III § 1)' },
  { value: 'symmetric', label: 'Groupes symétriques Sₙ & Aₙ (III § 2)' },
  { value: 'dihedral', label: 'Groupes diédraux Dₙ (III § 3)' }
]

const ALL_ENTRIES: RegistryEntry[] = Object.values(REGISTRY).sort(
  (a, b) => a.orderIndex - b.orderIndex
)

const DEPENDENTS_BY_ID: Record<string, RegistryEntry[]> = (() => {
  const map: Record<string, RegistryEntry[]> = {}
  for (const entry of ALL_ENTRIES) {
    map[entry.id] = []
  }
  for (const entry of ALL_ENTRIES) {
    for (const depId of entry.dependsOn) {
      if (map[depId]) {
        map[depId].push(entry)
      }
    }
  }
  return map
})()

function normalizeText(raw: string): string {
  return raw
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

function themeOfSection(section: string): Exclude<ThemeFilter, 'all'> {
  if (section.startsWith('I § 1')) return 'axioms'
  if (section.startsWith('I § 2')) return 'subgroups'
  if (section.startsWith('I § 3')) return 'morphisms'
  if (section.startsWith('I § 4')) return 'product'
  if (section.startsWith('III § 1')) return 'cyclic'
  if (section.startsWith('III § 2')) return 'symmetric'
  if (section.startsWith('III § 3')) return 'dihedral'
  return 'quotient'
}

const chapterFilter = ref<ChapterFilter>('all')
const themeFilter = ref<ThemeFilter>('all')
const searchQuery = ref<string>('')
const includeEquations = ref<boolean>(false)
const selectedId = ref<string>('1.3')

const hasActiveFilter = computed(
  () =>
    chapterFilter.value !== 'all' ||
    themeFilter.value !== 'all' ||
    searchQuery.value.trim() !== '' ||
    includeEquations.value
)

const visibleEntries = computed<RegistryEntry[]>(() => {
  const q = normalizeText(searchQuery.value.trim())
  return ALL_ENTRIES.filter((entry) => {
    if (!includeEquations.value && entry.kind === 'eq') return false
    if (chapterFilter.value !== 'all' && entry.chapter !== chapterFilter.value) return false
    if (themeFilter.value !== 'all' && themeOfSection(entry.section) !== themeFilter.value) {
      return false
    }
    if (q !== '') {
      const hay = normalizeText(
        `${entry.id} ${entry.shortLabel} ${entry.label} ${entry.section} ${entry.summaryTex}`
      )
      if (!hay.includes(q)) return false
    }
    return true
  })
})

const visibleIdSet = computed(() => new Set(visibleEntries.value.map((e) => e.id)))

const effectiveSelectedId = computed<string>(() => {
  if (visibleIdSet.value.has(selectedId.value)) return selectedId.value
  return visibleEntries.value[0]?.id ?? ''
})

const effectiveEntry = computed<RegistryEntry | null>(() => {
  const id = effectiveSelectedId.value
  return id ? REGISTRY[id] ?? null : null
})

function collectVisibleAncestors(
  startDepId: string,
  visibleIds: Set<string>,
  allowBridgeEq: boolean
): Array<{ id: string; bridged: boolean }> {
  if (visibleIds.has(startDepId)) {
    return [{ id: startDepId, bridged: false }]
  }
  if (!allowBridgeEq) return []

  const startEntry = REGISTRY[startDepId]
  if (!startEntry || startEntry.kind !== 'eq') return []

  const results: Array<{ id: string; bridged: boolean }> = []
  const visited = new Set<string>([startDepId])
  const queue = [...startEntry.dependsOn]
  while (queue.length > 0) {
    const curId = queue.shift()!
    if (visited.has(curId)) continue
    visited.add(curId)
    if (visibleIds.has(curId)) {
      results.push({ id: curId, bridged: true })
      continue
    }
    const cur = REGISTRY[curId]
    if (cur && cur.kind === 'eq') {
      for (const parentId of cur.dependsOn) {
        if (!visited.has(parentId)) queue.push(parentId)
      }
    }
  }
  return results
}

const visibleEdges = computed<GraphEdge[]>(() => {
  const visibleIds = visibleIdSet.value
  const allowBridge = !includeEquations.value
  const seen = new Map<string, GraphEdge>()

  for (const entry of visibleEntries.value) {
    for (const depId of entry.dependsOn) {
      const ancestors = collectVisibleAncestors(depId, visibleIds, allowBridge)
      for (const anc of ancestors) {
        const key = `${anc.id}->${entry.id}`
        const existing = seen.get(key)
        if (!existing) {
          seen.set(key, { from: anc.id, to: entry.id, bridged: anc.bridged })
        } else if (existing.bridged && !anc.bridged) {
          existing.bridged = false
        }
      }
    }
  }
  return Array.from(seen.values())
})

const SVG_WIDTH = 468
const NODE_W = 66
const NODE_H = 26
const GAP_X = 8
const ROW_H = 38
const LAYER_GAP = 14
const PAD_Y = 22
const MAX_PER_ROW = 6

const graphLayout = computed(() => {
  const entries = visibleEntries.value
  const incomingMap = new Map<string, string[]>()
  for (const e of entries) incomingMap.set(e.id, [])
  for (const edge of visibleEdges.value) {
    incomingMap.get(edge.to)?.push(edge.from)
  }

  const depthMap = new Map<string, number>()
  const computeDepth = (id: string): number => {
    const cached = depthMap.get(id)
    if (cached !== undefined) return cached
    const parents = incomingMap.get(id) ?? []
    const d =
      parents.length === 0 ? 0 : 1 + Math.max(...parents.map((p) => computeDepth(p)))
    depthMap.set(id, d)
    return d
  }
  for (const e of entries) computeDepth(e.id)

  const byLayer = new Map<number, RegistryEntry[]>()
  for (const e of entries) {
    const d = depthMap.get(e.id) ?? 0
    const list = byLayer.get(d)
    if (list) list.push(e)
    else byLayer.set(d, [e])
  }

  const layerKeys = Array.from(byLayer.keys()).sort((a, b) => a - b)
  const nodes: PositionedNode[] = []
  const nodeById = new Map<string, PositionedNode>()

  let curY = PAD_Y + NODE_H / 2
  for (const d of layerKeys) {
    const layerNodes = byLayer.get(d)!
    const rows: RegistryEntry[][] = []
    for (let i = 0; i < layerNodes.length; i += MAX_PER_ROW) {
      rows.push(layerNodes.slice(i, i + MAX_PER_ROW))
    }
    for (const row of rows) {
      const totalW = row.length * NODE_W + (row.length - 1) * GAP_X
      const startX = (SVG_WIDTH - totalW) / 2 + NODE_W / 2
      row.forEach((entry, idx) => {
        const pos: PositionedNode = {
          entry,
          layer: d,
          x: startX + idx * (NODE_W + GAP_X),
          y: curY
        }
        nodes.push(pos)
        nodeById.set(entry.id, pos)
      })
      curY += ROW_H
    }
    curY += LAYER_GAP
  }

  const height = Math.max(200, nodes.length === 0 ? 200 : curY + 8)
  return { nodes, nodeById, height, layerCount: layerKeys.length }
})

const directUpstreamIds = computed(() => {
  const e = effectiveEntry.value
  return new Set(e ? e.dependsOn : [])
})

const directDownstreamIds = computed(() => {
  const e = effectiveEntry.value
  if (!e) return new Set<string>()
  return new Set((DEPENDENTS_BY_ID[e.id] ?? []).map((x) => x.id))
})

const visibleUpstreamIds = computed(() => {
  const sel = effectiveSelectedId.value
  const s = new Set<string>()
  for (const edge of visibleEdges.value) {
    if (edge.to === sel) s.add(edge.from)
  }
  return s
})

const visibleDownstreamIds = computed(() => {
  const sel = effectiveSelectedId.value
  const s = new Set<string>()
  for (const edge of visibleEdges.value) {
    if (edge.from === sel) s.add(edge.to)
  }
  return s
})

const renderedEdges = computed(() => {
  const sel = effectiveSelectedId.value
  const map = graphLayout.value.nodeById
  const normal: Array<{ key: string; d: string; bridged: boolean }> = []
  const highlighted: Array<{
    key: string
    d: string
    role: 'in' | 'out'
    bridged: boolean
  }> = []

  for (const edge of visibleEdges.value) {
    const fromNode = map.get(edge.from)
    const toNode = map.get(edge.to)
    if (!fromNode || !toNode) continue
    const x1 = fromNode.x
    const y1 = fromNode.y + NODE_H / 2
    const x2 = toNode.x
    const y2 = toNode.y - NODE_H / 2
    const cpOffset = Math.max(20, Math.abs(y2 - y1) * 0.48)
    const d = `M ${x1} ${y1} C ${x1} ${y1 + cpOffset}, ${x2} ${y2 - cpOffset}, ${x2} ${y2}`
    const key = `${edge.from}-${edge.to}`

    if (edge.to === sel) {
      highlighted.push({ key, d, role: 'in', bridged: edge.bridged })
    } else if (edge.from === sel) {
      highlighted.push({ key, d, role: 'out', bridged: edge.bridged })
    } else {
      normal.push({ key, d, bridged: edge.bridged })
    }
  }
  return { normal, highlighted }
})

const selectedTitleHtml = computed(() =>
  effectiveEntry.value
    ? renderSafeMarkdownMath(effectiveEntry.value.label, { inline: true })
    : ''
)

const selectedSummaryHtml = computed(() =>
  effectiveEntry.value ? renderSafeMarkdownMath(effectiveEntry.value.summaryTex) : ''
)

const selectedCourseHref = computed(() => {
  const e = effectiveEntry.value
  if (!e) return '#'
  return withBase(`${e.route}.html#${e.anchor}`)
})

const upstreamEntries = computed<RegistryEntry[]>(() => {
  const e = effectiveEntry.value
  if (!e) return []
  return e.dependsOn
    .map((id) => REGISTRY[id])
    .filter((item): item is RegistryEntry => Boolean(item))
})

const downstreamEntries = computed<RegistryEntry[]>(() => {
  const e = effectiveEntry.value
  if (!e) return []
  return DEPENDENTS_BY_ID[e.id] ?? []
})

function formatShortChipLabel(entry: RegistryEntry): string {
  if (entry.kind === 'table') return `Table ${entry.shortLabel}`
  if (entry.kind === 'eq') return `Éq. ${entry.shortLabel}`
  if (entry.id === '1.9-1') return '(1.9)¹'
  if (entry.id === '1.9-2') return '(1.9)²'
  return entry.shortLabel
}

function renderEntryBtnHtml(entry: RegistryEntry): string {
  return renderSafeMarkdownMath(entry.label, { inline: true })
}

function nodeColors(entry: RegistryEntry): {
  fill: string
  stroke: string
  text: string
  strokeWidth: number
} {
  const sel = effectiveSelectedId.value
  if (entry.id === sel) {
    return {
      fill: 'var(--jc-navy)',
      stroke: 'var(--jc-navy)',
      text: 'var(--jc-surface)',
      strokeWidth: 2.4
    }
  }
  if (visibleUpstreamIds.value.has(entry.id) || directUpstreamIds.value.has(entry.id)) {
    return {
      fill: 'var(--jc-amber-soft)',
      stroke: 'var(--jc-amber)',
      text: 'var(--jc-text)',
      strokeWidth: 2
    }
  }
  if (visibleDownstreamIds.value.has(entry.id) || directDownstreamIds.value.has(entry.id)) {
    return {
      fill: 'var(--jc-teal-soft)',
      stroke: 'var(--jc-teal)',
      text: 'var(--jc-text)',
      strokeWidth: 2
    }
  }
  if (entry.kind === 'thm' || entry.kind === 'prop' || entry.kind === 'cor' || entry.kind === 'lem') {
    return {
      fill: 'var(--jc-navy-soft)',
      stroke: 'var(--jc-border)',
      text: 'var(--jc-navy)',
      strokeWidth: 1.2
    }
  }
  if (entry.kind === 'def' || entry.kind === 'not') {
    return {
      fill: 'var(--jc-teal-soft)',
      stroke: 'var(--jc-border)',
      text: 'var(--jc-teal)',
      strokeWidth: 1.2
    }
  }
  if (entry.kind === 'ex' || entry.kind === 'table') {
    return {
      fill: 'var(--jc-amber-soft)',
      stroke: 'var(--jc-border)',
      text: 'var(--jc-amber)',
      strokeWidth: 1.2
    }
  }
  if (entry.kind === 'eq') {
    return {
      fill: 'var(--jc-violet-soft)',
      stroke: 'var(--jc-border)',
      text: 'var(--jc-violet)',
      strokeWidth: 1.2
    }
  }
  return {
    fill: 'var(--jc-surface-muted)',
    stroke: 'var(--jc-border)',
    text: 'var(--jc-text-muted)',
    strokeWidth: 1.2
  }
}

function selectNode(id: string) {
  selectedId.value = id
}

function navigateToId(id: string) {
  const target = REGISTRY[id]
  if (!target) return
  if (target.kind === 'eq' && !includeEquations.value) {
    includeEquations.value = true
  }
  if (chapterFilter.value !== 'all' && target.chapter !== chapterFilter.value) {
    chapterFilter.value = 'all'
  }
  if (themeFilter.value !== 'all' && themeOfSection(target.section) !== themeFilter.value) {
    themeFilter.value = 'all'
  }
  if (searchQuery.value.trim() !== '') {
    searchQuery.value = ''
  }
  selectedId.value = id
}

function resetFilters() {
  chapterFilter.value = 'all'
  themeFilter.value = 'all'
  searchQuery.value = ''
  includeEquations.value = false
}
</script>

<template>
  <section class="jc-lab-card" data-lab="dependencies">
    <header class="jc-card-header">
      <div class="jc-card-title">
        Carte interactive des dépendances du cours
      </div>
      <span class="jc-fold-badge">
        {{ visibleEntries.length }} nœud{{ visibleEntries.length > 1 ? 's' : '' }} · {{ visibleEdges.length }} lien{{ visibleEdges.length > 1 ? 's' : '' }}
      </span>
    </header>

    <div class="jc-card-body">
      <div class="jc-controls">
        <div class="jc-dep-filter-group">
          <span class="jc-dep-label">Chapitre :</span>
          <button
            type="button"
            class="jc-btn"
            :class="{ active: chapterFilter === 'all' }"
            @click="chapterFilter = 'all'"
          >
            Tous
          </button>
          <button
            type="button"
            class="jc-btn"
            :class="{ active: chapterFilter === 1 }"
            @click="chapterFilter = 1"
          >
            Chapitre I
          </button>
          <button
            type="button"
            class="jc-btn"
            :class="{ active: chapterFilter === 2 }"
            @click="chapterFilter = 2"
          >
            Chapitre II
          </button>
          <button
            type="button"
            class="jc-btn"
            :class="{ active: chapterFilter === 3 }"
            @click="chapterFilter = 3"
          >
            Chapitre III
          </button>
        </div>

        <label class="jc-dep-filter-group">
          <span class="jc-dep-label">Thème :</span>
          <select v-model="themeFilter" class="jc-select" aria-label="Filtrer par thème">
            <option
              v-for="opt in THEME_OPTIONS"
              :key="opt.value"
              :value="opt.value"
            >
              {{ opt.label }}
            </option>
          </select>
        </label>

        <label class="jc-dep-filter-group">
          <span class="jc-dep-label">Recherche :</span>
          <input
            v-model="searchQuery"
            type="search"
            class="jc-dep-search"
            placeholder="Ex. 2.9, Lagrange, noyau…"
            aria-label="Rechercher un énoncé par numéro ou mot-clé"
          />
        </label>

        <label class="jc-dep-checkbox">
          <input v-model="includeEquations" type="checkbox" />
          <span>Inclure les équations</span>
        </label>

        <button
          v-if="hasActiveFilter"
          type="button"
          class="jc-btn"
          @click="resetFilters"
        >
          Réinitialiser
        </button>
      </div>

      <div class="jc-dep-layout">
        <div class="jc-dep-graph-pane">
          <div v-if="graphLayout.nodes.length === 0" class="jc-panel">
            Aucun énoncé ne correspond aux filtres actuels.
            <button type="button" class="jc-btn" style="margin-left: 0.5rem;" @click="resetFilters">
              Tout afficher
            </button>
          </div>

          <template v-else>
            <div class="jc-dep-svg-wrap">
              <svg
                :viewBox="`0 0 ${SVG_WIDTH} ${graphLayout.height}`"
                style="max-width: 100%; height: auto; display: block;"
                role="img"
                aria-label="Graphe des dépendances entre les énoncés"
              >
                <defs>
                  <marker
                    id="jc-dep-arrow-in"
                    viewBox="0 0 10 10"
                    refX="8"
                    refY="5"
                    markerWidth="5"
                    markerHeight="5"
                    orient="auto"
                  >
                    <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="var(--jc-amber)" />
                  </marker>
                  <marker
                    id="jc-dep-arrow-out"
                    viewBox="0 0 10 10"
                    refX="8"
                    refY="5"
                    markerWidth="5"
                    markerHeight="5"
                    orient="auto"
                  >
                    <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="var(--jc-teal)" />
                  </marker>
                </defs>

                <g>
                  <path
                    v-for="edge in renderedEdges.normal"
                    :key="edge.key"
                    :d="edge.d"
                    fill="none"
                    stroke="var(--jc-border)"
                    stroke-width="1"
                    :stroke-dasharray="edge.bridged ? '3,3' : undefined"
                    opacity="0.45"
                  />
                  <path
                    v-for="edge in renderedEdges.highlighted"
                    :key="edge.key"
                    :d="edge.d"
                    fill="none"
                    :stroke="edge.role === 'in' ? 'var(--jc-amber)' : 'var(--jc-teal)'"
                    stroke-width="2.2"
                    :stroke-dasharray="edge.bridged ? '5,3' : undefined"
                    :marker-end="edge.role === 'in' ? 'url(#jc-dep-arrow-in)' : 'url(#jc-dep-arrow-out)'"
                  />
                </g>

                <g
                  v-for="node in graphLayout.nodes"
                  :key="node.entry.id"
                  class="jc-dep-node"
                  role="button"
                  tabindex="0"
                  :aria-pressed="node.entry.id === effectiveSelectedId"
                  :aria-label="`${node.entry.label} (page ${node.entry.page})`"
                  @click="selectNode(node.entry.id)"
                  @keydown.enter.prevent="selectNode(node.entry.id)"
                  @keydown.space.prevent="selectNode(node.entry.id)"
                >
                  <rect
                    :x="node.x - NODE_W / 2"
                    :y="node.y - NODE_H / 2"
                    :width="NODE_W"
                    :height="NODE_H"
                    rx="6"
                    :fill="nodeColors(node.entry).fill"
                    :stroke="nodeColors(node.entry).stroke"
                    :stroke-width="nodeColors(node.entry).strokeWidth"
                  />
                  <text
                    :x="node.x"
                    :y="node.y + 3.5"
                    text-anchor="middle"
                    font-size="10.5"
                    font-weight="700"
                    :fill="nodeColors(node.entry).text"
                  >
                    {{ formatShortChipLabel(node.entry) }}
                  </text>
                </g>
              </svg>
            </div>

            <div class="jc-dep-legend">
              <span class="jc-dep-legend-item">
                <span class="jc-dep-swatch swatch-sel" /> Sélectionné
              </span>
              <span class="jc-dep-legend-item">
                <span class="jc-dep-swatch swatch-in" /> Prérequis en amont
              </span>
              <span class="jc-dep-legend-item">
                <span class="jc-dep-swatch swatch-out" /> Conséquences en aval
              </span>
              <span class="jc-dep-legend-item">
                Couches topologiques : {{ graphLayout.layerCount }} niveau{{ graphLayout.layerCount > 1 ? 'x' : '' }}
              </span>
            </div>
          </template>
        </div>

        <aside class="jc-panel jc-dep-side" aria-live="polite">
          <template v-if="effectiveEntry">
            <div class="jc-dep-side-head">
              <span class="jc-fold-badge">{{ KIND_LABELS[effectiveEntry.kind] }}</span>
              <span class="jc-dep-meta">
                Chap. {{ effectiveEntry.chapter === 1 ? 'I' : effectiveEntry.chapter === 2 ? 'II' : 'III' }} · {{ effectiveEntry.section }} · p. {{ effectiveEntry.page }}
              </span>
            </div>

            <h3 class="jc-dep-side-title" v-html="selectedTitleHtml" />

            <div class="jc-dep-summary" v-html="selectedSummaryHtml" />

            <div style="margin: 0.75rem 0;">
              <a class="jc-btn primary" :href="selectedCourseHref">
                Ouvrir dans le cours (p. {{ effectiveEntry.page }}) →
              </a>
            </div>

            <div class="jc-dep-rel-block">
              <div class="jc-dep-rel-title">
                Prérequis en amont ({{ upstreamEntries.length }}) :
              </div>
              <div v-if="upstreamEntries.length === 0" class="jc-dep-empty">
                Point de départ (aucun prérequis direct).
              </div>
              <div v-else class="jc-dep-chip-list">
                <button
                  v-for="dep in upstreamEntries"
                  :key="`up-${dep.id}`"
                  type="button"
                  class="jc-btn jc-dep-chip"
                  @click="navigateToId(dep.id)"
                  v-html="renderEntryBtnHtml(dep)"
                />
              </div>
            </div>

            <div class="jc-dep-rel-block">
              <div class="jc-dep-rel-title">
                Conséquences en aval ({{ downstreamEntries.length }}) :
              </div>
              <div v-if="downstreamEntries.length === 0" class="jc-dep-empty">
                Aucun énoncé ne dépend directement de celui-ci dans le registre.
              </div>
              <div v-else class="jc-dep-chip-list">
                <button
                  v-for="child in downstreamEntries"
                  :key="`down-${child.id}`"
                  type="button"
                  class="jc-btn jc-dep-chip"
                  @click="navigateToId(child.id)"
                  v-html="renderEntryBtnHtml(child)"
                />
              </div>
            </div>
          </template>
          <div v-else class="jc-dep-empty">
            Sélectionnez un nœud du graphe pour afficher l’énoncé et ses dépendances.
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.jc-dep-filter-group {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
}

.jc-dep-label {
  font-size: 0.83rem;
  font-weight: 700;
  color: var(--jc-text);
}

.jc-dep-search {
  padding: 0.32rem 0.6rem;
  border-radius: 6px;
  border: 1px solid var(--jc-border);
  background: var(--jc-surface);
  color: var(--jc-text);
  font-size: 0.85rem;
  min-width: 170px;
  max-width: 100%;
}

.jc-dep-checkbox {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
}

.jc-dep-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(260px, 1fr);
  gap: 1rem;
  align-items: start;
}

@media (max-width: 860px) {
  .jc-dep-layout {
    grid-template-columns: minmax(0, 1fr);
  }
}

.jc-dep-graph-pane {
  min-width: 0;
}

.jc-dep-svg-wrap {
  border: 1px solid var(--jc-border);
  border-radius: 8px;
  background: var(--jc-surface);
  padding: 0.45rem;
  max-height: 540px;
  overflow-y: auto;
}

.jc-dep-node {
  cursor: pointer;
}

.jc-dep-node:focus-visible rect {
  outline: 2px solid var(--jc-navy);
  outline-offset: 2px;
}

.jc-dep-node:hover rect {
  filter: brightness(0.95);
}

.jc-dep-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem 1rem;
  margin-top: 0.55rem;
  font-size: 0.8rem;
  color: var(--jc-text-muted);
}

.jc-dep-legend-item {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.jc-dep-swatch {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 3px;
  border: 1.5px solid var(--jc-border);
}

.jc-dep-swatch.swatch-sel {
  background: var(--jc-navy);
  border-color: var(--jc-navy);
}

.jc-dep-swatch.swatch-in {
  background: var(--jc-amber-soft);
  border-color: var(--jc-amber);
}

.jc-dep-swatch.swatch-out {
  background: var(--jc-teal-soft);
  border-color: var(--jc-teal);
}

.jc-dep-side {
  min-width: 0;
}

.jc-dep-side-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem;
  margin-bottom: 0.45rem;
}

.jc-dep-meta {
  font-size: 0.8rem;
  color: var(--jc-text-muted);
}

.jc-dep-side-title {
  margin: 0.15rem 0 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  color: var(--jc-navy);
}

.jc-dep-summary {
  font-size: 0.9rem;
  line-height: 1.55;
  color: var(--jc-text);
}

.jc-dep-rel-block {
  margin-top: 0.75rem;
  padding-top: 0.6rem;
  border-top: 1px solid var(--jc-border);
}

.jc-dep-rel-title {
  font-size: 0.84rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  color: var(--jc-text);
}

.jc-dep-chip-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.jc-dep-chip {
  font-size: 0.8rem;
  padding: 0.24rem 0.52rem;
  text-align: left;
}

.jc-dep-empty {
  font-size: 0.83rem;
  color: var(--jc-text-muted);
  font-style: italic;
}
</style>
