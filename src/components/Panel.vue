<template>
    <div class="l-panel">
        <slot></slot> 
    </div>
</template>
  
<script setup>
import { provide, ref } from 'vue'

const isOpen = ref(false)

const toggle = () => {
    isOpen.value = !isOpen.value
}

provide('panel', {
    isOpen: isOpen, 
    toggle
})
</script>
  