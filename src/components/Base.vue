<template>
    
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
})

const pharos = inject('pharos')

const themeClasses = computed(() => {
    return pharos.getThemeClasses(props, 'button')
})
</script>

<style scoped>

</style>