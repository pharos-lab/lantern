<template>
  <p
    class="l-paragraph"
    :class="[colorClass, paddingClass, marginClass, sizeClass]"
  >
    <slot></slot>
  </p>
</template>

<script setup>
import { ref, computed } from 'vue';
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
    default: 'none',
    validator(value) {
      // The value must match one of these strings
      return ['none', 'fill', 'light', 'outlined'].includes(value);
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

const colorClass = computed(() => {
  return useColorSwitch(props.color, props.mode);
});

const marginClass = computed(() => {
  return props.noMargin ? '' : 'my-4';
});

const paddingClass = computed(() => {
  return props.noPadding ? '' : 'px-4 py-2';
});

const sizeClass = computed(() => {
  return useSizeSwitch(props.size);
});
</script>

<style scoped></style>
