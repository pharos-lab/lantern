<template>
    <slot></slot>
</template>

<script setup>
import { ref, provide } from 'vue'

const isOpen = ref(false)

const open = () => {
    isOpen.value = true
}

const close = () => {
    isOpen.value = false
}

provide('dialog', { open, close, isOpen })
</script>

<style scoped>
/* Ajouter des styles pour la modale */
</style>
