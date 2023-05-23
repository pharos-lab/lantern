<script setup>
import { computed } from 'vue';

const props = defineProps({
  duration: {
    type: Number,
    default: 700,
  },
});

const transition = computed(() => {
  return 'opacity ' + props.duration / 1000 + 's ease';
});
</script>

<template>
  <Transition name="fade">
    <slot></slot>
  </Transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: v-bind(transition);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
