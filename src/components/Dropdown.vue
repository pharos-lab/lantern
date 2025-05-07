<template>
    <div class="l-dropdown relative inline-block" :class="themeClasses">
        <slot></slot>
    </div>
</template>

<script setup>
import { inject, ref, provide, computed } from 'vue'

const props = defineProps({
    trigger: {
        type: String,
        default: 'hover',
        validator(value) {
            return ['click', 'hover'].includes(value)
        }
    },
    placement: {
        type: String,
        default: 'bottom',
        validator: (value) =>
        [
            'top', 'bottom', 'left', 'right',
            'top-start', 'top-end',
            'bottom-start', 'bottom-end',
            'left-start', 'left-end',
            'right-start', 'right-end'
        ].includes(value)
    },
    unstyle: {
        type: Boolean,
        default: false
    },
})

const isOpen = ref(false)

const toggle = () => isOpen.value = !isOpen.value
const close = () => isOpen.value = false
const open = () => isOpen.value = true

provide('dropdown', { isOpen, toggle, close, open, placement: props.placement, trigger: props.trigger })

const pharos = inject('pharos')

const themeClasses = computed(() => {
    return pharos.getThemeClasses(props, 'dropdown')
})
</script>

<style scoped>

</style>