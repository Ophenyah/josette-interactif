<script setup lang="ts">
import { computed } from 'vue'
import { renderMath } from '../math/katex-macros'
import type { FiniteGroup } from '../math/groups'

const props = defineProps<{
  group: FiniteGroup
  caption?: string
}>()

const opHtml = computed(() => renderMath(props.group.opTex))
const elemHtmls = computed(() => props.group.elementTex.map((t) => renderMath(t)))
</script>

<template>
  <div class="cayley-wrap">
    <table class="jc-cayley-table">
      <caption v-if="caption" style="margin-bottom: 0.4rem; font-size: 0.88rem; color: var(--jc-text-muted);">
        {{ caption }}
      </caption>
      <thead>
        <tr>
          <th scope="col" v-html="opHtml" />
          <th
            v-for="(h, j) in elemHtmls"
            :key="`h-${j}`"
            scope="col"
            v-html="h"
          />
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in group.table" :key="`r-${i}`">
          <th scope="row" v-html="elemHtmls[i]" />
          <td
            v-for="(val, j) in row"
            :key="`c-${i}-${j}`"
            v-html="elemHtmls[val]"
          />
        </tr>
      </tbody>
    </table>
  </div>
</template>
