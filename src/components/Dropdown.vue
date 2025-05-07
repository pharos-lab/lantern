<template>
    <div class="l-dropdown relative inline-block" :class="themeClasses">
        <slot></slot>
    </div>
</template>

<script setup>
import { inject, ref, provide, computed } from 'vue'

const props = defineProps({
    unstyle: {
        type: Boolean,
        default: false
    },
})

const isOpen = ref(false)

const toggle = () => isOpen.value = !isOpen.value
const close = () => isOpen.value = false

provide('dropdown', { isOpen, toggle, close })

const pharos = inject('pharos')

const themeClasses = computed(() => {
    return pharos.getThemeClasses(props, 'dropdown')
})
</script>

<style scoped>

</style>