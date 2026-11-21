<script setup lang="ts">
import { computed, ref } from 'vue'
import { renderSafeMarkdownMath } from '../math/katex-macros'

const props = defineProps<{
  kind: 'prepa' | 'intuition' | 'piege' | 'edition' | 'indice' | 'correction'
  title: string
  defaultOpen?: boolean
}>()

const isOpen = ref(Boolean(props.defaultOpen))

const KIND_LABELS: Record<string, string> = {
  prepa: 'Précision prépa',
  intuition: 'Intuition',
  piege: 'Piège classique',
  edition: 'Note d’édition (1984)',
  indice: 'Indice',
  correction: 'Correction'
}

const badgeText = computed(() => KIND_LABELS[props.kind] ?? props.kind)
const titleHtml = computed(() => renderSafeMarkdownMath(props.title, { inline: true }))
</script>

<template>
  <div class="jc-fold" :class="`kind-${kind}`">
    <button
      type="button"
      class="jc-fold-summary"
      :aria-expanded="isOpen"
      @click="isOpen = !isOpen"
    >
      <span v-html="titleHtml" />
      <span class="jc-fold-badge">
        {{ badgeText }} {{ isOpen ? '▾' : '▸' }}
      </span>
    </button>
    <div v-show="isOpen" class="jc-fold-content">
      <slot />
    </div>
  </div>
</template>
