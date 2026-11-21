<script setup lang="ts">
import { computed, ref, useId } from 'vue'
import {
  composePerm,
  cyclicGroup,
  dihedralGroup,
  kleinGroup,
  quaternionGroup,
  symmetricGroup,
  translationPermutations,
  type FiniteGroup
} from '../../math/groups'
import { renderMath } from '../../math/katex-macros'

type GroupKey = 'z4' | 'v4' | 's3' | 'd4' | 'q8'
type Side = 'left' | 'right'

const GROUPS: Array<{ key: GroupKey; label: string; group: FiniteGroup }> = [
  { key: 'z4', label: 'ℤ/(4)', group: cyclicGroup(4) },
  { key: 'v4', label: 'Klein V', group: kleinGroup() },
  { key: 's3', label: 'S₃', group: symmetricGroup(3) },
  { key: 'd4', label: 'D₄', group: dihedralGroup(4) },
  { key: 'q8', label: 'Q₈', group: quaternionGroup() }
]

const CYCLE_COLORS = [
  'var(--jc-teal)',
  'var(--jc-amber)',
  'var(--jc-violet)',
  'var(--jc-crimson)',
  'var(--jc-emerald)',
  'var(--jc-navy)'
]

const uid = useId()
const groupKey = ref<GroupKey>('s3')
const side = ref<Side>('left')
const g1 = ref<number>(1)
const g2 = ref<number>(5)
const hoveredNode = ref<number | null>(null)

const group = computed(() => (GROUPS.find((g) => g.key === groupKey.value) ?? GROUPS[2]).group)
const perms = computed(() => translationPermutations(group.value, side.value))
const perm1 = computed(() => perms.value[g1.value] ?? perms.value[0])
const perm2 = computed(() => perms.value[g2.value] ?? perms.value[0])
const comp12 = computed(() => composePerm(perm1.value, perm2.value))
const prod12 = computed(() => group.value.table[g1.value][g2.value])
const prod21 = computed(() => group.value.table[g2.value][g1.value])

const elemHtmls = computed(() => group.value.elementTex.map((t) => renderMath(t)))
const opHtml = computed(() => renderMath(group.value.opTex))

function extractCycles(perm: readonly number[]): number[][] {
  const n = perm.length
  const visited = new Array<boolean>(n).fill(false)
  const cycles: number[][] = []
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue
    const cyc: number[] = []
    let cur = i
    while (!visited[cur]) {
      visited[cur] = true
      cyc.push(cur)
      cur = perm[cur]
    }
    cycles.push(cyc)
  }
  return cycles
}

const cycles1 = computed(() => extractCycles(perm1.value))
const colorOfNode = computed(() => {
  const map = new Map<number, string>()
  cycles1.value.forEach((cyc, idx) => {
    const col = CYCLE_COLORS[idx % CYCLE_COLORS.length]
    cyc.forEach((node) => map.set(node, col))
  })
  return map
})

interface GraphNode {
  idx: number
  x: number
  y: number
  label: string
  color: string
}

interface GraphEdge {
  from: number
  to: number
  d: string
  color: string
  isSelf: boolean
}

const graphData = computed(() => {
  const g = group.value
  const n = g.elements.length
  const cx = 160
  const cy = 142
  const R = n >= 8 ? 96 : 86
  const nodeRadius = n >= 8 ? 16 : 18

  const nodes: GraphNode[] = g.elements.map((label, i) => {
    const ang = -Math.PI / 2 + (2 * Math.PI * i) / n
    return {
      idx: i,
      x: cx + R * Math.cos(ang),
      y: cy + R * Math.sin(ang),
      label,
      color: colorOfNode.value.get(i) ?? 'var(--jc-teal)'
    }
  })

  const edges: GraphEdge[] = perm1.value.map((to, from) => {
    const p1 = nodes[from]
    const p2 = nodes[to]
    const color = colorOfNode.value.get(from) ?? 'var(--jc-teal)'
    if (from === to) {
      const dx = p1.x - cx
      const dy = p1.y - cy
      const dist = Math.hypot(dx, dy) || 1
      const ux = dx / dist
      const uy = dy / dist
      const px = -uy
      const py = ux
      const sx = p1.x + ux * (nodeRadius * 0.72) + px * 7
      const sy = p1.y + uy * (nodeRadius * 0.72) + py * 7
      const ex = p1.x + ux * (nodeRadius * 0.72) - px * 7
      const ey = p1.y + uy * (nodeRadius * 0.72) - py * 7
      const c1x = p1.x + ux * (nodeRadius + 24) + px * 16
      const c1y = p1.y + uy * (nodeRadius + 24) + py * 16
      const c2x = p1.x + ux * (nodeRadius + 24) - px * 16
      const c2y = p1.y + uy * (nodeRadius + 24) - py * 16
      return {
        from,
        to,
        d: `M ${sx.toFixed(1)} ${sy.toFixed(1)} C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${ex.toFixed(1)} ${ey.toFixed(1)}`,
        color,
        isSelf: true
      }
    }

    const dx = p2.x - p1.x
    const dy = p2.y - p1.y
    const dist = Math.hypot(dx, dy) || 1
    const ux = dx / dist
    const uy = dy / dist
    const isTwoCycle = perm1.value[to] === from
    const curveOffset = isTwoCycle ? 22 : 16
    const sx = p1.x + ux * (nodeRadius + 2)
    const sy = p1.y + uy * (nodeRadius + 2)
    const ex = p2.x - ux * (nodeRadius + 5)
    const ey = p2.y - uy * (nodeRadius + 5)
    const mx = (sx + ex) / 2 - uy * curveOffset
    const my = (sy + ey) / 2 + ux * curveOffset
    return {
      from,
      to,
      d: `M ${sx.toFixed(1)} ${sy.toFixed(1)} Q ${mx.toFixed(1)} ${my.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`,
      color,
      isSelf: false
    }
  })

  return { nodes, edges, nodeRadius }
})

const symChar = computed(() => (side.value === 'left' ? '\\tau' : '\\delta'))

function twoLineMatrixTex(perm: readonly number[]): string {
  const top = group.value.elementTex.join(' & ')
  const bot = perm.map((i) => group.value.elementTex[i]).join(' & ')
  return `\\begin{pmatrix} ${top} \\\\ ${bot} \\end{pmatrix}`
}

const perm1MatrixHtml = computed(() => {
  const g1Tex = group.value.elementTex[g1.value]
  return renderMath(`${symChar.value}_{${g1Tex}} = ${twoLineMatrixTex(perm1.value)}`)
})

const cyclesTexHtml = computed(() => {
  const parts = cycles1.value.map((cyc) => {
    if (cyc.length === 1) return `(${group.value.elementTex[cyc[0]]})`
    return `(${cyc.map((i) => group.value.elementTex[i]).join(' \\; ')})`
  })
  return renderMath(`\\text{Orbites / cycles : } ${parts.join(' \\, ')}`)
})

const compositionHtml = computed(() => {
  const g = group.value
  const s = symChar.value
  const t1 = g.elementTex[g1.value]
  const t2 = g.elementTex[g2.value]
  const expectedIdx = side.value === 'left' ? prod12.value : prod21.value
  const tExp = g.elementTex[expectedIdx]
  return renderMath(
    `${s}_{${t1}} \\circ ${s}_{${t2}} = ${twoLineMatrixTex(comp12.value)} = ${s}_{${tExp}}`
  )
})

const morphismVerdictHtml = computed(() => {
  const g = group.value
  const t1 = g.elementTex[g1.value]
  const t2 = g.elementTex[g2.value]
  const t12 = g.elementTex[prod12.value]
  const t21 = g.elementTex[prod21.value]
  if (side.value === 'left') {
    return renderMath(
      `\\tau_{${t1}} \\circ \\tau_{${t2}} = \\tau_{${t1} ${g.opTex} ${t2}} = \\tau_{${t12}}`
    )
  }
  const commutes = prod12.value === prod21.value
  const cmp = commutes ? '=' : '\\neq'
  return renderMath(
    `\\delta_{${t1}} \\circ \\delta_{${t2}} = \\delta_{${t2} ${g.opTex} ${t1}} = \\delta_{${t21}} ${cmp} \\delta_{${t12}} = \\delta_{${t1} ${g.opTex} ${t2}}`
  )
})

const hoveredEvalHtml = computed(() => {
  if (hoveredNode.value === null) return ''
  const x = hoveredNode.value
  const y = perm1.value[x]
  const g = group.value
  const xg = side.value === 'left'
    ? `${g.elementTex[g1.value]} ${g.opTex} ${g.elementTex[x]}`
    : `${g.elementTex[x]} ${g.opTex} ${g.elementTex[g1.value]}`
  return renderMath(`${symChar.value}_{${g.elementTex[g1.value]}}(${g.elementTex[x]}) = ${xg} = ${g.elementTex[y]}`)
})

function selectGroup(nextKey: GroupKey) {
  groupKey.value = nextKey
  const n = getGroupOrder(nextKey)
  g1.value = 1 < n ? 1 : 0
  g2.value = nextKey === 's3' ? 5 : nextKey === 'd4' ? 4 : nextKey === 'q8' ? 4 : Math.min(2, n - 1)
  hoveredNode.value = null
}

function getGroupOrder(key: GroupKey): number {
  return (GROUPS.find((g) => g.key === key) ?? GROUPS[0]).group.elements.length
}
</script>

<template>
  <section class="jc-lab-card" data-lab="cayley-theorem">
    <header class="jc-card-header">
      <div class="jc-card-title">
        Laboratoire — Théorème de Cayley (<span v-html="renderMath('G \\simeq T_G \\leqslant S_G')" />)
      </div>
      <span class="jc-fold-badge">I § 3 B — Théorème (1.78)</span>
    </header>

    <div class="jc-card-body">
      <div class="jc-controls">
        <span class="jc-ctrl-label">Groupe G :</span>
        <button
          v-for="item in GROUPS"
          :key="item.key"
          type="button"
          class="jc-btn"
          :class="{ active: groupKey === item.key }"
          @click="selectGroup(item.key)"
        >
          {{ item.label }}
        </button>
      </div>

      <div class="jc-controls">
        <span class="jc-ctrl-label">Action :</span>
        <button
          type="button"
          class="jc-btn teal"
          :class="{ active: side === 'left' }"
          @click="side = 'left'"
        >
          Translation à gauche (<span v-html="renderMath('\\tau_g(x) = gx')" />)
        </button>
        <button
          type="button"
          class="jc-btn teal"
          :class="{ active: side === 'right' }"
          @click="side = 'right'"
        >
          Translation à droite (<span v-html="renderMath('\\delta_g(x) = xg')" />)
        </button>

        <label class="jc-field-label" for="cay-g1">
          <span>g₁ :</span>
          <select id="cay-g1" v-model.number="g1" class="jc-select">
            <option v-for="(el, i) in group.elements" :key="`g1-${i}`" :value="i">
              {{ el }}
            </option>
          </select>
        </label>

        <label class="jc-field-label" for="cay-g2">
          <span>g₂ :</span>
          <select id="cay-g2" v-model.number="g2" class="jc-select">
            <option v-for="(el, i) in group.elements" :key="`g2-${i}`" :value="i">
              {{ el }}
            </option>
          </select>
        </label>
      </div>

      <div class="jc-grid-2">
        <div class="jc-panel" style="min-width: 0;">
          <div class="jc-subhead">
            Graphe dirigé de
            <span v-html="renderMath(`${symChar}_{${group.elementTex[g1]}}`)" />
          </div>
          <svg
            viewBox="0 0 320 274"
            style="max-width: 100%; height: auto; display: block; margin: 0 auto;"
            role="img"
            :aria-label="`Graphe dirigé de la translation par ${group.elements[g1]}`"
          >
            <defs>
              <marker
                v-for="(col, cIdx) in CYCLE_COLORS"
                :id="`${uid}-arr-${cIdx}`"
                :key="`mk-${cIdx}`"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="5.5"
                markerHeight="5.5"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 10 5 L 0 9 z" :fill="col" />
              </marker>
            </defs>

            <path
              v-for="edge in graphData.edges"
              :key="`edge-${edge.from}`"
              :d="edge.d"
              fill="none"
              :stroke="edge.color"
              :stroke-width="hoveredNode === edge.from ? 3.2 : 2"
              :opacity="hoveredNode !== null && hoveredNode !== edge.from ? 0.35 : 0.92"
              :marker-end="`url(#${uid}-arr-${CYCLE_COLORS.indexOf(edge.color)})`"
            />

            <g
              v-for="node in graphData.nodes"
              :key="`node-${node.idx}`"
              tabindex="0"
              role="button"
              :aria-label="`Inspecter ${group.elements[node.idx]}`"
              style="cursor: pointer;"
              @mouseenter="hoveredNode = node.idx"
              @mouseleave="hoveredNode = null"
              @focus="hoveredNode = node.idx"
              @blur="hoveredNode = null"
              @click="hoveredNode = hoveredNode === node.idx ? null : node.idx"
              @keydown.enter.prevent="hoveredNode = hoveredNode === node.idx ? null : node.idx"
              @keydown.space.prevent="hoveredNode = hoveredNode === node.idx ? null : node.idx"
            >
              <circle
                :cx="node.x"
                :cy="node.y"
                :r="graphData.nodeRadius"
                :fill="hoveredNode === node.idx ? 'var(--jc-navy-soft)' : 'var(--jc-surface)'"
                :stroke="node.color"
                :stroke-width="hoveredNode === node.idx ? 3 : 2"
              />
              <text
                :x="node.x"
                :y="node.y + 4"
                text-anchor="middle"
                font-size="12"
                font-weight="700"
                fill="var(--jc-text)"
              >
                {{ node.label }}
              </text>
            </g>
          </svg>

          <p class="jc-hint" style="text-align: center; margin-top: 0.35rem;">
            <span v-if="hoveredEvalHtml" v-html="hoveredEvalHtml" />
            <span v-else>Survolez ou sélectionnez un sommet pour voir son image.</span>
          </p>
        </div>

        <div class="jc-panel" style="min-width: 0;" data-lab-verdict>
          <div class="jc-diag-block" v-html="perm1MatrixHtml" />
          <div class="jc-diag-block" v-html="cyclesTexHtml" />

          <p class="jc-hint">
            La ligne du bas est exactement la
            <strong>{{ side === 'left' ? 'ligne' : 'colonne' }}</strong>
            correspondant à
            <span v-html="elemHtmls[g1]" />
            dans la table de Cayley ci-dessous :
          </p>

          <div class="cayley-wrap">
            <table class="jc-cayley-table jc-cayley-compact" aria-label="Extrait de la table de Cayley">
              <thead>
                <tr>
                  <th scope="col" v-html="opHtml" />
                  <th
                    v-for="(h, j) in elemHtmls"
                    :key="`th-${j}`"
                    scope="col"
                    :class="{ 'hl-head': side === 'right' && j === g1 }"
                    v-html="h"
                  />
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, i) in group.table" :key="`tr-${i}`">
                  <th
                    scope="row"
                    :class="{ 'hl-head': side === 'left' && i === g1 }"
                    v-html="elemHtmls[i]"
                  />
                  <td
                    v-for="(val, j) in row"
                    :key="`td-${i}-${j}`"
                    :class="{
                      'hl-cell': (side === 'left' && i === g1) || (side === 'right' && j === g1)
                    }"
                    v-html="elemHtmls[val]"
                  />
                </tr>
              </tbody>
            </table>
          </div>

          <div class="jc-comp-box">
            <div><strong>Composition :</strong></div>
            <div class="jc-diag-block" v-html="compositionHtml" />
            <div v-if="side === 'left'" class="jc-status-ok">
              ✔ Morphisme : <span v-html="morphismVerdictHtml" />
            </div>
            <div v-else class="jc-antimorph-box">
              ⚠ Antimorphisme : <span v-html="morphismVerdictHtml" />
              <div class="jc-hint" style="margin-top: 0.25rem; margin-bottom: 0;">
                L’ordre des facteurs s’inverse (<span v-html="renderMath('g \\mapsto \\delta_{g^{-1}}')" /> donne un morphisme, Rem. 1.76).
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.jc-ctrl-label {
  font-size: 0.85rem;
  font-weight: 700;
}

.jc-field-label {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.85rem;
  font-weight: 600;
}

.jc-subhead {
  font-weight: 700;
  color: var(--jc-navy);
  margin-bottom: 0.4rem;
}

.jc-hint {
  font-size: 0.82rem;
  color: var(--jc-text-muted);
  margin: 0.3rem 0 0.5rem;
}

.jc-diag-block {
  margin: 0.45rem 0;
  overflow-x: auto;
}

.jc-cayley-compact th,
.jc-cayley-compact td {
  padding: 0.22rem 0.4rem;
  min-width: 1.85rem;
  font-size: 0.82rem;
}

.jc-cayley-compact td.hl-cell {
  background: var(--jc-teal-soft);
  font-weight: 700;
  outline: 1.5px solid var(--jc-teal);
}

.jc-cayley-compact th.hl-head {
  background: var(--jc-teal);
  color: var(--jc-surface);
}

.jc-comp-box {
  margin-top: 0.75rem;
  padding: 0.6rem 0.75rem;
  border-radius: 6px;
  border: 1px solid var(--jc-border);
  background: var(--jc-surface);
}

.jc-antimorph-box {
  color: var(--jc-amber);
  font-weight: 700;
  overflow-x: auto;
}
</style>
