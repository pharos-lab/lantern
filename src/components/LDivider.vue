<template>
  <div :class="[sizeClass, colorClass]" class="l-divider"></div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { computed } from 'vue';
import { useColorSwitch } from './composables/colorSwitch.js';

const props = defineProps({
  color: {
    type: String,
    validator(value) {
      // The value must match one of these strings
      return ['gray', 'red', 'orange', 'yellow', 'blue'].includes(value);
    },
  },
  size: {
    type: String,
    default: 'normal',
    validator(value) {
      return ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'].includes(value);
    },
  },
  mode: {
    type: String,
    default: 'fill',
    validator(value) {
      // The value must match one of these strings
      return ['none', 'fill', 'light', 'outlined'].includes(value);
    },
  },
});

const sizeClass = computed(() => {
  switch (props.size) {
    case 'xs':
      return 'h-px';
      break;
    case 'sm':
      return 'h-0.5';
      break;
    case 'md':
      return 'h-1';
      break;
    case 'lg':
      return 'h-2';
      break;
    case 'xl':
      return 'h-5';
      break;
    case '2xl':
      return 'h-6';
      break;
    case '3xl':
      return 'h-8';
      break;
    default:
      return 'h-px';
      break;
  }
});

const colorClass = computed(() => {
  return props.color ? useColorSwitch(props.color, props.mode) : 'bg-slate-800';
});
</script>

<style scoped></style>
