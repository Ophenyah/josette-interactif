<script setup lang="ts">
import { computed, ref } from 'vue'
import { renderSafeMarkdownMath } from '../math/katex-macros'

const props = defineProps<{
  num: string | number
  text: string
}>()

const hovered = ref(false)
const pinned = ref(false)
const open = computed(() => hovered.value || pinned.value)
const html = computed(() => renderSafeMarkdownMath(props.text, { inline: true }))
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
      class="jc-fn-btn"
      :aria-label="`Note de bas de page (${num})`"
      :aria-expanded="open"
      @click="pinned = !pinned"
    >
      <sup>({{ num }})</sup>
    </button>
    <span v-if="open" class="jc-popover" role="tooltip">
      <span class="jc-popover-head">
        <span>Note ({{ num }}) du livre</span>
      </span>
      <span v-html="html" />
    </span>
  </span>
</template>
