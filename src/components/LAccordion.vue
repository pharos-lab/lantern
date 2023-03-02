<template>
  <div class="l-accordion" :class="rounded">
    <slot></slot>
  </div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { computed, provide } from 'vue';
import { useColorSwitch } from './composables/colorSwitch.js';
import { useRoundedSwitch } from './composables/roundedSwitch.js';

provide('accordionColor', props.color);
provide('accordionMode', props.mode);

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
    type: Boolean,
  },
});

const color = computed(() => {
  return useColorSwitch(props.color, props.mode);
});

const rounded = computed(() => {
  return useRoundedSwitch('normal');
});
</script>

<style scoped></style>
