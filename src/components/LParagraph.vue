<template>
  <p class="l-paragraph" :class="[color, padding, margin, size]">
    <slot></slot>
  </p>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useSizeSwitch } from './composables/sizeSwitch.js';

const props = defineProps({
  color: {
    type: String,
    validator(value) {
      // The value must match one of these strings
      return ['gray', 'red', 'orange', 'yellow', 'blue'].includes(value);
    },
  },
  background: {
    type: Boolean,
    default: false,
  },
  noMargin: {
    type: Boolean,
    default: false,
  },
  noPadding: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'normal',
    validator(value) {
      return [
        'xs',
        'sm',
        'normal',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ].includes(value);
    },
  },
});

const color = computed(() => {
  return props.background ? `l-${props.color}` : `l-text-${props.color}`;
});

const margin = computed(() => {
  return props.noMargin ? '' : 'my-4';
});

const padding = computed(() => {
  return props.noPadding ? '' : 'px-4 py-2';
});

const size = computed(() => {
  return useSizeSwitch(props.size);
});
</script>

<style scoped></style>
