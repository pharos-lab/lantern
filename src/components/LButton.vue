<template>
  <button class="l-button blue-outlined">
    <slot>Click me</slot>
  </button>
</template>

<script setup>
import { ref, computed } from 'vue';
import '@/colors.css';

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
    default: 'plain',
    validator(value) {
      // The value must match one of these strings
      return ['plain', 'light', 'outlined'].includes(value);
    },
  },
  rounded: {
    type: String,
    validator(value) {
      // The value must match one of these strings
      return ['none', 'normal', 'medium', 'large'].includes(value);
    },
  },
  hover: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.l-button {
  padding: 8px 12px;
}
</style>
