<template>
  <div class="l-accordion-item divide-y" :class="[divideColorClass]">
    <div
      class="l-accordion-item-label cursor-pointer"
      v-if="slots.label"
      @click="show = !show"
    >
      <slot name="label"></slot>
    </div>
    <div
      class="l-accordion-itel-label px-4 py-2 cursor-pointer"
      v-else
      @click="show = !show"
      :class="colorClass"
    >
      {{ props.label }}
    </div>
    <div
      class="l-accordion-item-content px-4 py-2"
      v-if="show"
      :class="contentColorClass"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { computed, inject, useSlots, ref } from 'vue';
import { useColorSwitch } from './composables/colorSwitch.js';
import { useSubColorSwitch } from './composables/subColorSwitch.js';
import { divideColor } from './composables/divideColor.js';

const accordionColor = inject('accordionColor');
const accordionMode = inject('accordionMode');
const slots = useSlots();
const show = ref();

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
  label: String,
});

const colorClass = computed(() => {
  return useColorSwitch(accordionColor, accordionMode);
});

const contentColorClass = computed(() => {
  return useSubColorSwitch(accordionColor, accordionMode);
});

const divideColorClass = computed(() => {
  return divideColor[accordionColor][accordionMode];
});
</script>

<style scoped></style>
