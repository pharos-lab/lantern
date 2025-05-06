<template>
    <div class="l-panel-label cursor-pointer"  @click="panel.toggle" :class="[pharos.theme.padding]">
        <slot>trigger</slot>
        <component :is="openIcon"></component>
    </div>
</template>

<script setup>
import { inject, computed, ref } from 'vue'

const props = defineProps({
    icons: {
        type: Array,
        default: ['Minus', 'Close']
    }
})
const pharos = inject('pharos')
const panel = inject('panel')

const openIcon = ref()

import('lucide-vue-next').then((icons) => {
    openIcon.value = icons[props.icons[0]];
})
</script>

<style scoped>

</style>