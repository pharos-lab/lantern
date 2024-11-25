<template>
  <transition
    name="panel-slide"
    appear
  >
    <div v-show="isExpanded" class="l-panel-content p-4 overflow-hidden">
      <slot></slot>
    </div>
  </transition>
</template>

<script setup>
import { inject } from 'vue';

const { isExpanded } = inject('panel');
</script>

<style scoped>
/* Tailwind-friendly transitions */
.panel-slide-enter-active,
.panel-slide-leave-active {
  transition: all 0.5s ease;
}

.panel-slide-enter-from,
.panel-slide-leave-to {
  max-height: 0;
}

.panel-slide-enter-to,
.panel-slide-leave-from {
  max-height: 100vh;
}
</style>
