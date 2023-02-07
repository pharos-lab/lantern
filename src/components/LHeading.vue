<template>
  <div class="l-heading-wrapper">
    <component
      :is="tag"
      class="l-heading"
      :class="[size, color, margin, padding]"
    >
      <slot></slot>
    </component>
  </div>
</template>

<script setup>
import { computed } from 'vue';

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
  switch (props.size) {
    case 'xs':
      return 'text-xs';
      break;
    case 'sm':
      return 'text-sm';
      break;
    case 'normal':
      return 'text-normal';
      break;
    case 'lg':
      return 'text-lg';
      break;
    case 'xl':
      return 'text-xl';
      break;
    case '2xl':
      return 'text-2xl';
      break;
    case '3xl':
      return 'text-3xl';
      break;
    case '4xl':
      return 'text-4xl';
      break;
    case '5xl':
      return 'text-5xl';
      break;
    case '6xl':
      return 'text-6xl';
      break;
    case '7xl':
      return 'text-7xl';
      break;
    case '8xl':
      return 'text-8xl';
      break;
    case '9xl':
      return 'text-9xl';
      break;
    default:
      return 'text-normal';
      break;
  }
});
</script>

<style scoped></style>
