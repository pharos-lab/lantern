<template>
    <Transition>
        <div 
            v-show="dropdown.isOpen.value"
            class="absolute z-50 l-dropdown-content min-w-max"
            :class="placementClasses"
        >
            <slot></slot>
        </div>
  </Transition>
</template>

<script setup>
import { inject, computed } from 'vue'

const dropdown = inject('dropdown')
const pharos = inject('pharos')

const placementClasses = computed(() => {
  const map = {
    'top': 'bottom-full mb-2 left-1/2 -translate-x-1/2',
    'bottom': 'top-full mt-2 left-1/2 -translate-x-1/2',
    'left': 'right-full mr-2 top-1/2 -translate-y-1/2',
    'right': 'left-full ml-2 top-1/2 -translate-y-1/2',

    'top-start': 'bottom-full mb-2 left-0',
    'top-end': 'bottom-full mb-2 right-0',
    'bottom-start': 'top-full mt-2 left-0',
    'bottom-end': 'top-full mt-2 right-0',

    'left-start': 'right-full mr-2 top-0',
    'left-end': 'right-full mr-2 bottom-0',
    'right-start': 'left-full ml-2 top-0',
    'right-end': 'left-full ml-2 bottom-0'
  }
  return map[dropdown.props.placement] || ''
})

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