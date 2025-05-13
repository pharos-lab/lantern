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

import { getPlacementClass, getTransitionName } from '@/components/floating/utils.js'

const dropdown = inject('dropdown')

const placementClasses = computed(() => getPlacementClass(dropdown.props.placement))
const transitionName = computed(() => getTransitionName(dropdown.props.placement))


</script>

<style scoped>
.fade-slide-down-enter-active, 
.fade-slide-down-leave-active,
.fade-slide-up-enter-active, 
.fade-slide-up-leave-active,
.fade-slide-right-enter-active, 
.fade-slide-right-leave-active,
.fade-slide-left-enter-active, 
.fade-slide-left-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-down-enter-from, 
.fade-slide-down-leave-to {
  opacity: 0;
  transform: translateY(10px);
}



.fade-slide-up-enter-from, 
.fade-slide-up-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-slide-right-enter-from, 
.fade-slide-right-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

.fade-slide-left-enter-from, 
.fade-slide-left-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}


</style>