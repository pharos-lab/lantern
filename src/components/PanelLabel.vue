<template>
    <div class="l-panel-label cursor-pointer"  @click="panel.toggle" :class="[themeClasses, pharos.theme.padding]">
        <slot>trigger</slot>
    </div>
</template>

<script setup>
import { inject, computed, ref } from 'vue'

const pharos = inject('pharos')
const panel = inject('panel')

const themeClasses = computed(() => {
    console.log(panel);
    return pharos.getThemeClasses(panel.props, 'panel')
})
</script>

<style scoped>

</style>