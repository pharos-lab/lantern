<template>
    <div class="l-dropdown-trigger" @click="dropdown.toggle">
        <slot></slot>
    </div>
</template>

<script setup>
import { inject, computed } from 'vue'

const props = defineProps({
    unstyle: {
        type: Boolean,
        default: false
    },
})

const dropdown = inject('dropdown')
const pharos = inject('pharos')

const themeClasses = computed(() => {
    return pharos.getThemeClasses(props, 'dropdown')
})
</script>

<style scoped>

</style>