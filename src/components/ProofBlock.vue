<script setup lang="ts">
import { computed, ref } from 'vue'
import { renderSafeMarkdownMath } from '../math/katex-macros'

export interface ProofStep {
  title: string
  body: string
  why?: string
}

const props = defineProps<{
  label?: string
  steps?: ProofStep[]
}>()

const stepMode = ref(false)
const openWhy = ref<Record<number, boolean>>({})

const hasSteps = computed(() => Array.isArray(props.steps) && props.steps.length > 0)

function toggleWhy(idx: number) {
  openWhy.value = { ...openWhy.value, [idx]: !openWhy.value[idx] }
}
</script>

<template>
  <div class="jc-proof-box">
    <div class="jc-proof-header">
      <span class="jc-proof-label">{{ label ?? 'Preuve' }}</span>
      <button
        v-if="hasSteps"
        type="button"
        class="jc-btn"
        :class="{ active: stepMode }"
        @click="stepMode = !stepMode"
      >
        {{ stepMode ? 'Vue continue' : 'Lecture pas à pas' }}
      </button>
    </div>

    <div v-if="!stepMode" class="jc-proof-body">
      <slot />
    </div>

    <div v-else class="jc-proof-steps">
      <div v-for="(step, idx) in steps" :key="idx" class="jc-step-card">
        <div style="font-weight: 700; margin-bottom: 0.25rem;" v-html="renderSafeMarkdownMath(step.title, { inline: true })" />
        <div v-html="renderSafeMarkdownMath(step.body)" />
        <div v-if="step.why" style="margin-top: 0.45rem;">
          <button
            type="button"
            class="jc-btn"
            @click="toggleWhy(idx)"
          >
            {{ openWhy[idx] ? 'Masquer l’explication' : 'Pourquoi cette étape ?' }}
          </button>
          <div
            v-if="openWhy[idx]"
            class="jc-why-box"
            v-html="renderSafeMarkdownMath(step.why)"
          />
        </div>
      </div>
    </div>

    <div class="jc-proof-qed" aria-label="Fin de démonstration">∎</div>
  </div>
</template>
