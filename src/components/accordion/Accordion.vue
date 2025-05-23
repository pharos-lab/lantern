<template>
    <div class="l-accordion overflow-hidden" :class="[themeClasses]">
        <slot></slot>
    </div>
</template>

<script setup>
import { inject, computed, provide } from 'vue'

const props = defineProps({
    color: {
        type: String,
        default: 'default'
    },
    variant: {
        type: String,
        default: 'plain',
        validator(value) {
            return ['plain', 'outline', 'light', 'text'].includes(value)
        }
    },
    rounded: {
        type: String,
        default: 'medium',
        validator(value) {
            return ['medium', 'none', 'large', 'full'].includes(value)
        }
    },
    shadow: {
        type: Boolean,
        default: false
    },
    icons: {
        type: Array,
        default: ['Minus', 'Close']
    },
    icon: {
        type: Boolean,
        default: true
    },
    unstyle: {
        type: Boolean,
        default: false
    },
})

const pharos = inject('pharos')
provide('accordion', { props })

const themeClasses = computed(() => {
    return pharos.getThemeClasses(props, 'accordion')
})
</script>

<style scoped>

</style>