<template>
    <div class="l-collapsible-label cursor-pointer flex items-center justify-between"  @click="collapsible.toggle" :class="[pharos.theme.padding]">
        <slot>trigger</slot>
        <Transition mode="out-in">
            <component :is="icon" v-if="collapsible.icon"></component>
        </Transition>
    </div>
</template>

<script setup>
import { inject, reactive, computed } from 'vue'

const props = defineProps({
    icons: {
        type: [Array, Boolean],
        default: ['Minus', 'Plus']
    }
})
const pharos = inject('pharos')
const collapsible = inject('collapsible')

const toggleIcons = reactive({
    open: null,
    close: null
})

const icon = computed(() => {
    return collapsible.isOpen.value ? toggleIcons.open : toggleIcons.close
})

import('lucide-vue-next').then((icons) => {
    if (typeof props.icons === 'boolean') return

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