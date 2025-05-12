<template>
    <div class="l-accordion-item overflow-hidden" :class="[themeClasses]">
        <slot></slot> 
    </div>
</template>
  
<script setup>
import { provide, ref, inject, computed } from 'vue'

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
    rounded: {
        type: String,
        default: 'medium',
        validator(value) {
            return ['medium', 'none', 'large', 'full'].includes(value)
        }
    },
    unstyle: {
        type: Boolean,
        default: false
    },
    icons: {
        type: Array,
        default: ['Minus', 'Close']
    },
    open: {
        type: Boolean,
        default: false
    }
})

const pharos = inject('pharos')

const themeClasses = computed(() => {
    return pharos.getThemeClasses(props, 'panel')
})

const isOpen = ref(props.open)

const toggle = () => {
    isOpen.value = !isOpen.value
}

provide('accordionItem', {
    isOpen,
    toggle,
    icons: props.icons
})
</script>
  