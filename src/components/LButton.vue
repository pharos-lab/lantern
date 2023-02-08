<template>
  <button
    class="l-button py-2 px-4 font-semibold"
    :class="[colorClass, roundedClass]"
  >
    <slot>Click me</slot>
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  color: {
    type: String,
    default: 'slate',
    validator(value) {
      // The value must match one of these strings
      return ['slate', 'red', 'orange', 'yellow', 'blue'].includes(value);
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
  rounded: {
    type: String,
    validator(value) {
      // The value must match one of these strings
      return ['none', 'sm', 'normal', 'md', 'lg', 'xl', 'pills'].includes(
        value
      );
    },
  },
  hover: {
    type: Boolean,
    default: true,
  },
});

const colorClass = computed(() => {
  if (props.mode == 'none') {
    return props.color ? `l-text-${props.color}` : 'text-slate-500';
  }
  if (props.hover) {
    return props.mode == 'fill'
      ? `l-${props.color} l-${props.color}-hover`
      : `l-${props.color}-${props.mode} l-${props.color}-${props.mode}-hover`;
  } else {
    return props.mode == 'fill'
      ? `l-${props.color}`
      : `l-${props.color}-${props.mode}`;
  }
});

const roundedClass = computed(() => {
  switch (props.rounded) {
    case 'none':
      return 'rounded-none';
      break;
    case 'sm':
      return 'rounded-sm';
      break;
    case 'normal':
      return 'rounded';
      break;
    case 'md':
      return 'rounded-md';
      break;
    case 'lg':
      return 'rounded-lg';
      break;
  }
});
</script>

<style scoped></style>
