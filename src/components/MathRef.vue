<script setup lang="ts">
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'
import { REGISTRY } from '../data/registry'
import { renderSafeMarkdownMath } from '../math/katex-macros'

const props = defineProps<{
  id: string
}>()

const showPopover = ref(false)
const entry = computed(() => REGISTRY[props.id])
const href = computed(() => {
  if (!entry.value) return `#ref-${props.id}`
  return withBase(`${entry.value.route}.html#${entry.value.anchor}`)
})
const summaryHtml = computed(() => {
  if (!entry.value) return 'Énoncé non trouvé dans le registre.'
  return renderSafeMarkdownMath(entry.value.summaryTex)
})
const labelHtml = computed(() => {
  if (!entry.value) return `(${props.id})`
  return renderSafeMarkdownMath(entry.value.label, { inline: true })
})
</script>

<template>
  <span
    class="jc-ref-wrap"
    @mouseenter="showPopover = true"
    @mouseleave="showPopover = false"
    @focusin="showPopover = true"
    @focusout="showPopover = false"
  >
    <a class="jc-ref-link" :href="href">
      <slot>{{ entry?.shortLabel ?? `(${id})` }}</slot>
    </a>
    <span
      v-if="showPopover && entry"
      class="jc-popover"
      role="tooltip"
    >
      <span class="jc-popover-head">
        <span v-html="labelHtml" />
        <span class="jc-popover-page">p. {{ entry.page }}</span>
      </span>
      <span v-html="summaryHtml" />
    </span>
  </span>
</template>
