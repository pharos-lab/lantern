<template>
    <div class="l-accordion overflow-hidden" :class="[themeClasses, pharos.getStaticClass('Accordion')]">
        <slot></slot>
    </div>
</template>

<script setup>
import { inject, computed, provide } from 'vue'

const pharos = inject('pharos')

const props = defineProps({
    color: String,
    variant: String,
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


provide('accordion', { props })

const themeClasses = computed(() => {
    return pharos.getThemeClasses(props, 'Accordion')
})
</script>

<style scoped>

</style>