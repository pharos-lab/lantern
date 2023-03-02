<template>
  <div class="l-accordion-item">
    <slot name="label"></slot>
    <slot></slot>
  </div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { computed, inject } from 'vue';
import { useRoundedSwitch } from './composables/roundedSwitch.js';
import { useColorSwitch } from './composables/colorSwitch.js';

const accordionColor = inject('accordionColor');
const accordionMode = inject('accordionMode');

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
  label: String,
});

const color = computed(() => {
  return useColorSwitch(accordionColor, accordionMode);
});
</script>

<style scoped></style>
