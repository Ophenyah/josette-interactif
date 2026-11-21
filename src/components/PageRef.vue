<script setup lang="ts">
defineProps<{
  page: number
}>()
</script>

<template>
  <span class="jc-page-ref" :title="`Page ${page} de l’édition de 1984`">
    p. {{ page }}
  </span>
</template>
