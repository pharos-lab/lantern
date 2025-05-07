<template>
    <div class="l-dropdown-trigger" @click="dropdown.toggle" @mouseover="handle('open')" @mouseleave="handle('close')">
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

const handle = (state) => {
    if (dropdown.trigger == 'hover') {
        return state == 'open' ? dropdown.open(): dropdown.close()
    }
}

const dropdown = inject('dropdown')
const pharos = inject('pharos')

const themeClasses = computed(() => {
    return pharos.getThemeClasses(props, 'dropdown')
})
</script>

<style scoped>

</style>