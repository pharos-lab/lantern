<template>
  <a
    :href="props.href"
    class="font-semibold"
    :class="[colorClass, roundedClass, hoverClass, spaceClass, underlineClass]"
  >
    <slot></slot>
  </a>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useColorSwitch } from './composables/colorSwitch.js';
import { useHoverSwitch } from './composables/hoverSwitch.js';
import { useRoundedSwitch } from './composables/roundedSwitch.js';
import { useUnderlineSwitch } from './composables/underlineSwitch.js';

const props = defineProps({
  href: String,
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
      return [
        'none',
        'fill',
        'light',
        'outlined',
        'underlined',
        'text',
      ].includes(value);
    },
  },
  rounded: {
    type: String,
    validator(value) {
      // The value must match one of these strings
      return ['none', 'sm', 'normal', 'md', 'lg', 'xl', 'pill', ''].includes(
        value
      );
    },
  },
  hover: {
    type: Boolean,
    default: false,
  },
});

const spaceClass = computed(() => {
  return ['fill', 'light'].includes(props.mode)
    ? 'px-2 py-1'
    : props.mode == 'outlined'
    ? 'px-3 py-1'
    : '';
});

const underlineClass = computed(() => {
  return props.mode == 'underlined'
    ? 'underline decoration-4 underline-offset-4' +
        useUnderlineSwitch(props.color)
    : '';
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
</script>

<style scoped></style>
