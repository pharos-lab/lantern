<template>
    <div class="l-panel overflow-hidden">
        <slot></slot> 
    </div>
</template>
  
<script setup>
import { provide, ref } from 'vue'

const props = defineProps({
    color: {
        type: String,
        default: 'default'
    },
    variant: {
        type: String,
        default: 'base',
        validator(value) {
            return ['base', 'outline', 'light', 'text'].includes(value)
        }
    },
    unstyle: {
        type: Boolean,
        default: false
    },
})

const isOpen = ref(false)

const toggle = () => {
    isOpen.value = !isOpen.value
}

provide('panel', {
    isOpen: isOpen, 
    toggle,
    props: props
})
</script>
  