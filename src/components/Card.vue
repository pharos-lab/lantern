<template>
    <div class="l-card overflow-hidden" :class="[themeClasses, pharos.theme.padding]">
        <slot></slot>   
    </div>
</template>

<script setup>
import { inject, computed, } from 'vue'

const props = defineProps({
    color: {
        type: String,
        default: 'default'
    },
    variant: {
        type: String,
        default: 'base',
        validator(value) {
            return ['light', 'dark', 'base', 'outline', 'text'].includes(value)
        }
    },
    rounded: {
        type: String,
        default: 'base'
    },
    hover: {
        type: Boolean,
        default: false
    },
    shadow: {
        type: Boolean,
        default: true
    },
    unstyled: { type: Boolean, default: false }
})

const pharos = inject('pharos')

const themeClasses = computed(() => {
    return pharos.getThemeClasses(props, 'button')
})
</script>