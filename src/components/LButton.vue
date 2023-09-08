<template>
  <component
    :is="tag"
    :href="props.href ?? null"
    class="l-button py-2 px-3 font-semibold"
    :class="[colorClass, roundedClass, hoverClass, focusClass]"
    ><slot>Click me</slot></component
  >
</template>

<script setup>
import { computed } from 'vue';
import { rounded } from './composables/rounded.js';
import { hoverColor } from './composables/hoverColor.js';
import { focusColor } from './composables/focusColor.js';
import { backgroundColor } from './composables/backgroundColor.js';

const props = defineProps({
  color: {
    type: String,
    default: 'gray',
    validator(value) {
      // The value must match one of these strings
      return ['gray', 'red', 'orange', 'yellow', 'green', 'blue'].includes(
        value
      );
    },
  },
  mode: {
    type: String,
    default: 'fill',
    validator(value) {
      // The value must match one of these strings
      return [
        'none',
        'fill',
        'light',
        'outlined',
        'text',
        'underlined',
      ].includes(value);
    },
  },
  rounded: {
    type: String,
    default: 'none',
    validator(value) {
      // The value must match one of these strings
      return ['none', 'sm', 'normal', 'md', 'lg', 'xl', 'pill', ''].includes(
        value
      );
    },
  },
  hover: {
    type: Boolean,
    default: true,
  },
  focus: Boolean,
  href: String,
});

const tag = computed(() => {
  return props.href ? 'a' : 'button';
});

const colorClass = computed(() => {
  return backgroundColor[props.color][props.mode];
});

const hoverClass = computed(() => {
  return props.hover ? hoverColor[props.color][props.mode] : '';
});

const roundedClass = computed(() => {
  return props.rounded == '' ? 'rounded' : rounded[props.rounded];
});

const focusClass = computed(() => {
  return props.focus ? focusColor[props.color] : 'focus:outline-none';
});
</script>

<style scoped></style>
