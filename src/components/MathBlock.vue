<script setup lang="ts">
import { computed } from 'vue'
import { REGISTRY } from '../data/registry'
import { renderSafeMarkdownMath } from '../math/katex-macros'

const props = defineProps<{
  id: string
  kind?: 'def' | 'not' | 'thm' | 'prop' | 'cor' | 'lem' | 'rem' | 'ex'
  title?: string
}>()

const entry = computed(() => REGISTRY[props.id])
const resolvedKind = computed(() => props.kind ?? entry.value?.kind ?? 'rem')
const resolvedTitleHtml = computed(() => {
  const raw = props.title ?? entry.value?.label ?? `Énoncé (${props.id})`
  return renderSafeMarkdownMath(raw, { inline: true })
})
const anchorId = computed(() => `ref-${props.id}`)
</script>

<template>
  <section :id="anchorId" class="jc-math-box" :class="`kind-${resolvedKind}`">
    <header class="jc-math-box-header">
      <div class="jc-math-box-title" v-html="resolvedTitleHtml" />
      <div class="jc-box-meta">
        <span v-if="entry">p. {{ entry.page }}</span>
        <a
          class="jc-anchor-link"
          :href="`#${anchorId}`"
          :aria-label="`Lien permanent vers ${id}`"
          title="Lien permanent"
          >#</a
        >
      </div>
    </header>
    <div class="jc-math-box-body">
      <slot />
    </div>
  </section>
</template>
