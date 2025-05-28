<template>
    <div 
        class="l-toast"
        :class="[themeClasses, pharos.getStaticClass('Toast')]"
    >
        <slot></slot>
    </div>
</template>

<script setup>
import { inject, computed } from 'vue'

const pharos = inject('pharos')
const toaster = inject('toaster')

const themeClasses = computed(() => {
    return pharos.getThemeClasses(toaster.props, 'Toast')
})
</script>

<style scoped>

</style>