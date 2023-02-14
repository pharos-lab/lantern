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
import { useRoundedSwitch } from './composables/roundedSwitch.js';

const props = defineProps({
  color: {
    type: String,
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
  switch (props.mode) {
    case 'none':
      return props.color ? `l-text-${props.color}` : 'text-slate-500';
    case 'fill':
      if (!props.color) {
        return props.hover
          ? 'l-slate-light l-slate-light-hover'
          : 'l-slate-light';
      }
      return props.hover
        ? `l-${props.color} l-${props.color}-hover`
        : `l-${props.color}`;
    case 'outlined':
    case 'light':
      return props.hover
        ? `l-${props.color}-${props.mode} l-${props.color}-${props.mode}-hover`
        : `l-${props.color}-${props.mode}`;
  }
});

const roundedClass = computed(() => {
  return useRoundedSwitch(props.rounded);
});
</script>

<style scoped></style>
