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
import { useBorderColorSwitch } from './composables/borderColorSwitch.js';

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
    default: 'text',
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
    : props.mode == 'underlined'
    ? 'px-2 py-px'
    : '';
});

const underlineClass = computed(() => {
  return props.mode == 'underlined'
    ? 'border-b-4 ' + useBorderColorSwitch(props.color, props.mode)
    : '';
});

const colorClass = computed(() => {
  return useColorSwitch(props.color, props.mode);
});

const hoverClass = computed(() => {
  return props.hover ? useHoverSwitch(props.color, props.mode) : '';
});

const roundedClass = computed(() => {
  return useRoundedSwitch(props.rounded, props.mode);
});
</script>

<style scoped></style>
