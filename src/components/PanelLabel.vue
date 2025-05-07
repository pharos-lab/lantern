<template>
    <div class="l-panel-label cursor-pointer flex items-center justify-between"  @click="panel.toggle" :class="[pharos.theme.padding]">
        <slot>trigger</slot>
        <Transition mode="out-in">
            <component :is="icon"></component>
        </Transition>
    </div>
</template>

<script setup>
import { inject, reactive, computed } from 'vue'

const props = defineProps({
    icons: {
        type: Array,
        default: ['Minus', 'Plus']
    }
})
const pharos = inject('pharos')
const panel = inject('panel')

const toggleIcons = reactive({
    open: null,
    close: null
})

const icon = computed(() => {
    return panel.isOpen.value ? toggleIcons.open : toggleIcons.close
})

import('lucide-vue-next').then((icons) => {
    toggleIcons.open = icons[props.icons[0]];
    toggleIcons.close = icons[props.icons[1]];
})
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>