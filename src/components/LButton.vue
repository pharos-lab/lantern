<template>
  <button
    class="l-button py-2 px-4 font-semibold"
    :class="[colorClass, roundedClass, hoverClass, focusClass]"
  >
    <slot>Click me</slot>
  </button>
</template>

<script setup>
import { computed } from 'vue';
import { useRoundedSwitch } from './composables/roundedSwitch.js';
import { useColorSwitch } from './composables/colorSwitch.js';
import { useHoverSwitch } from './composables/hoverSwitch.js';
import { useFocusSwitch } from './composables/focusSwitch.js';

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
  return useColorSwitch(props.color, props.mode);
});

const hoverClass = computed(() => {
  return props.hover ? useHoverSwitch(props.color, props.mode) : '';
});

const roundedClass = computed(() => {
  return useRoundedSwitch(props.rounded);
});

const focusClass = computed(() => {
  return useFocusSwitch(props.color, props.mode);
});
</script>

<style scoped></style>
