<template>
    <Transition :name="transitionName">
        <div 
            v-show="dropdown.isOpen.value"
            class="absolute z-50 l-dropdown-content min-w-max"
            :class="placementClasses"
            :style="{ transitionDelay: dropdown.props.delay + 'ms' }"
        >
            <slot></slot>
        </div>
  </Transition>
</template>

<script setup>
import { inject, computed } from 'vue'

const dropdown = inject('dropdown')
const pharos = inject('pharos')

const themeClasses = computed(() => {
    return pharos.getThemeClasses(props, 'dropdown')
})

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

// Transition name based on placement
const transitionName = computed(() => {
  const base = 'fade'
  const map = {
    top: 'fade-slide-down',
    bottom: 'fade-slide-up',
    left: 'fade-slide-right',
    right: 'fade-slide-left',
    'top-start': 'fade-slide-down',
    'top-end': 'fade-slide-down',
    'bottom-start': 'fade-slide-up',
    'bottom-end': 'fade-slide-up',
    'left-start': 'fade-slide-right',
    'left-end': 'fade-slide-right',
    'right-start': 'fade-slide-left',
    'right-end': 'fade-slide-left',
  }
  return map[dropdown.props.placement] || base
})


</script>

<style scoped>
.fade-slide-down-enter-active, 
.fade-slide-down-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-down-enter-from, 
.fade-slide-down-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-up-enter-active, 
.fade-slide-up-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-up-enter-from, 
.fade-slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-slide-right-enter-active, 
.fade-slide-right-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-right-enter-from, 
.fade-slide-right-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.fade-slide-left-enter-active, 
.fade-slide-left-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-left-enter-from, 
.fade-slide-left-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}


</style>