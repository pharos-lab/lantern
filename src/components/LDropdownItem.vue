<template>
  <div class="l-dropdown-item px-4 py-2" :class="[colorClass, hoverClass]">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue';
import { useSubColorSwitch } from './composables/subColorSwitch.js';
import { useHoverSwitch } from './composables/hoverSwitch.js';
import { useColorSwitch } from './composables/colorSwitch.js';

const dropdownColor = inject('dropdownColor');
const dropdownMode = inject('dropdownMode');

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
  if (['text', 'underlined'].includes(dropdownMode)) {
    return useSubColorSwitch(dropdownColor, 'light');
  }
  return useSubColorSwitch(dropdownColor, dropdownMode);
});

const hoverClass = computed(() => {
  return useHoverSwitch(dropdownColor, 'light');
});
</script>
