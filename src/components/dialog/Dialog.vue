<template>
  <div class="l-dialog" :data-open="isOpen">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, provide, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)

const open = () => {
    isOpen.value = true
}

const close = () => {
    isOpen.value = false
}

// Gérer la touche Escape
const handleKeyDown = (e) => {
  if (e.key === 'Escape') {
    close()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})

provide('dialog', { open, close, isOpen })
</script>

<style scoped>
/* Ajouter des styles pour la modale */
</style>
