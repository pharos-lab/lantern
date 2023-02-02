<template>
  <button class="l-button" :class="[colorClass, roundedClass]">
    <slot>Click me</slot>
  </button>
</template>

<script setup>
import { ref, computed } from 'vue';
import '@/colors.css';
import '@/rounded.css';

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
    default: 'normal',
    validator(value) {
      // The value must match one of these strings
      return ['normal', 'light', 'outlined'].includes(value);
    },
  },
  rounded: {
    type: String,
    validator(value) {
      // The value must match one of these strings
      return ['none', 'normal', 'medium', 'large', 'pills'].includes(value);
    },
  },
  hover: {
    type: Boolean,
    default: false,
  },
});

const colorClass = computed(() => {
  return props.mode == 'normal'
    ? `${props.color}`
    : `${props.color}-${props.mode}`;
});

const roundedClass = computed(() => {
  return `rounded-${props.rounded}`;
});
</script>

<style scoped>
.l-button {
  padding: 8px 12px;
}
</style>
