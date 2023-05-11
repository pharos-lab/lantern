<template>
  <component
    :is="tag"
    class="l-heading"
    :class="[sizeClass, colorClass, marginClass, paddingClass]"
  >
    <slot></slot>
  </component>
</template>

<script setup>
import { computed } from 'vue';
import { useTextSizeSwitch } from './composables/textSizeSwitch.js';
import { useColorSwitch } from './composables/colorSwitch.js';

const props = defineProps({
  color: {
    type: String,
    validator(value) {
      // The value must match one of these strings
      return ['gray', 'red', 'orange', 'yellow', 'blue'].includes(value);
    },
  },
  mode: {
    type: String,
    default: 'text',
    validator(value) {
      // The value must match one of these strings
      return ['none', 'fill', 'light', 'outlined', 'text'].includes(value);
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
  noMargin: {
    type: Boolean,
    default: false,
  },
  noPadding: {
    type: Boolean,
    default: false,
  },
});

const colorClass = computed(() => {
  return useColorSwitch(props.color, props.mode);
});

const tag = computed(() => {
  return 'h' + props.level;
});

const paddingClass = computed(() => {
  return props.noPadding ? '' : 'py-2 px-4';
});

const marginClass = computed(() => {
  return props.noMargin ? '' : 'my-4';
});
const sizeClass = computed(() => {
  return useSizeSwitch(props.size);
});
</script>

<style scoped></style>
