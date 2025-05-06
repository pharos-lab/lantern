<template>
    <span class="l-badge inline-flex items-center gap-2 transition" :class="[themeClasses]">
        <slot></slot>
    </span>
</template>

<script setup>
import { inject, computed } from 'vue'

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
    size: {
        type: String,
        default: 'base',
        validator(value) {
            return ['base', 'large', 'small'].includes(value)
        }
    },
    hover: {
        type: Boolean,
        default: true
    },
    rounded: {
        type: String,
        default: 'full',
        validator(value) {
            return ['normal', 'none', 'large', 'full'].includes(value)
        }
    },
})

const pharos = inject('pharos')

const themeClasses = computed(() => {
    return pharos.getThemeClasses(props, 'badge')
})
</script>

<style scoped>

</style>