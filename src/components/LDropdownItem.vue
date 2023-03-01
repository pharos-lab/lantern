<template>
  <div class="l-dropdown-item px-4 py-2" :class="colorClass">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue';

const dropdownColor = inject('dropdownColor');

const props = defineProps({
  color: {
    type: String,
    validator(value) {
      // The value must match one of these strings
      return ['gray', 'red', 'orange', 'yellow', 'blue'].includes(value);
    },
  },
});

const colorClass = computed(() => {
  return `l-${dropdownColor}-light l-${dropdownColor}-light-hover`;
});
</script>
