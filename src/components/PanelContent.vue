<template>
   
    <div
        ref="inner"
        class="l-panel-content overflow-hidden transition-all duration-500 ease-in-out"
        :class="[themeClasses, panel.isOpen.value ? 'p-4': '']"
        :style="{ height: heightStyle }"
      >
        <slot></slot>
    </div>
</template>

<script setup>
import { inject, computed, provide, ref } from 'vue'


const inner = ref(null)
const pharos = inject('pharos')
const panel = inject('panel')

const heightStyle = computed(() => {
    return panel.isOpen.value ? inner.value.scrollHeight + parseInt(pharos.theme.padding.slice(-1) * 8) + 'px'  : '0px'
})


const themeClasses = computed(() => {
    return pharos.getThemeClasses(panel.props, 'panel')
})
</script>

<style scoped>

</style>