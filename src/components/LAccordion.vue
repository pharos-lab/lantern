<template>
  <div class="l-accordion divide-y" :class="[roundedClass, divideColorClass]">
    <slot></slot>
  </div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { computed, provide } from 'vue';
import { useRoundedSwitch } from './composables/roundedSwitch.js';
import { useDivideSwitch } from './composables/divideSwitch.js';

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
      return ['none', 'fill', 'light', 'outlined', 'text'].includes(value);
    },
  },
  rounded: {
    type: Boolean,
  },
});

const roundedClass = computed(() => {
  return useRoundedSwitch('normal');
});

const divideColorClass = computed(() => {
  return useDivideSwitch(props.color, props.mode);
});
</script>

<style scoped></style>
