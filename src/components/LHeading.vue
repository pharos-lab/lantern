<template>
  <component
    :is="tag"
    class="l-heading"
    :class="[size, color, margin, padding]"
  >
    <slot></slot>
  </component>
</template>

<script setup>
import { computed } from 'vue';
import { useSizeSwitch } from './composables/sizeSwitch.js';

const props = defineProps({
  color: {
    type: String,
    validator(value) {
      // The value must match one of these strings
      return ['slate', 'red', 'orange', 'yellow', 'blue'].includes(value);
    },
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
  level: {
    type: String,
    default: '2',
    validator(value) {
      return ['1', '2', '3', '4', '5', '6'].includes(value);
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
});

const color = computed(() => {
  return props.background ? `l-${props.color}` : `l-text-${props.color}`;
});

const tag = computed(() => {
  return 'h' + props.level;
});

const padding = computed(() => {
  return props.noPadding ? '' : 'py-2 px-4';
});

const margin = computed(() => {
  return props.noMargin ? '' : 'my-4';
});
const size = computed(() => {
  return useSizeSwitch(props.size);
});
</script>

<style scoped></style>
