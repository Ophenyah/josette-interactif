<script setup lang="ts">
import { computed, ref } from 'vue'
import { GLOSSARY } from '../data/glossary'
import { renderSafeMarkdownMath } from '../math/katex-macros'

const props = defineProps<{
  id: string
}>()

const hovered = ref(false)
const pinned = ref(false)
const open = computed(() => hovered.value || pinned.value)
const item = computed(() => GLOSSARY[props.id])
const termHtml = computed(() =>
  item.value ? renderSafeMarkdownMath(item.value.term, { inline: true }) : props.id
)
const equivHtml = computed(() =>
  item.value
    ? renderSafeMarkdownMath(item.value.modernEquivalent, { inline: true })
    : ''
)
const bodyHtml = computed(() =>
  item.value ? renderSafeMarkdownMath(item.value.explanationTex) : ''
)
</script>

<template>
  <span
    class="jc-glossary-wrap"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
    @focusin="hovered = true"
    @focusout="hovered = false; pinned = false"
  >
    <button
      type="button"
      class="jc-glossary-btn"
      :aria-expanded="open"
      @click="pinned = !pinned"
    >
      <slot>{{ item?.term ?? id }}</slot>
    </button>
    <span v-if="open && item" class="jc-popover" role="tooltip">
      <span class="jc-popover-head">
        <span v-html="termHtml" />
        <span class="jc-popover-page">p. {{ item.firstSeenPage }}</span>
      </span>
      <span style="display: block; margin-bottom: 0.3rem;">
        <strong>Équivalent actuel :</strong> <span v-html="equivHtml" />
      </span>
      <span v-html="bodyHtml" />
    </span>
  </span>
</template>
