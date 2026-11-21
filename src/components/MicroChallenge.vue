<script setup lang="ts">
import { ref } from 'vue'
import { renderSafeMarkdownMath } from '../math/katex-macros'

defineProps<{
  title: string
  hint?: string
}>()

const showAnswer = ref(false)
</script>

<template>
  <section class="jc-challenge-card">
    <header class="jc-card-header">
      <span class="jc-card-title" v-html="renderSafeMarkdownMath(title, { inline: true })" />
      <span class="jc-fold-badge">Micro-défi</span>
    </header>
    <div class="jc-card-body">
      <slot />
      <p v-if="hint" style="font-size: 0.88rem; color: var(--jc-text-muted); margin-top: 0.5rem;">
        <strong>Piste :</strong> <span v-html="renderSafeMarkdownMath(hint, { inline: true })" />
      </p>
      <div style="margin-top: 0.7rem;">
        <button
          type="button"
          class="jc-btn"
          :class="{ active: showAnswer }"
          @click="showAnswer = !showAnswer"
        >
          {{ showAnswer ? 'Masquer l’élément de réponse' : 'Vérifier avec l’élément de réponse' }}
        </button>
      </div>
      <div v-if="showAnswer" class="jc-panel" style="margin-top: 0.65rem;">
        <slot name="answer" />
      </div>
    </div>
  </section>
</template>
