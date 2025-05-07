<template>
    <Transition>
        <div 
            v-show="dropdown.isOpen.value"
            class="absolute mt-2 z-50 l-dropdown-content"
        >
            <slot></slot>
        </div>
  </Transition>
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
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>