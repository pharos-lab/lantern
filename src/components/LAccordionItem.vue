<template>
  <div class="l-accordion-item">
    <div
      class="l-accordion-item-label"
      v-if="slots.label"
      @click="show = !show"
    >
      <slot name="label"></slot>
    </div>
    <div class="l-accordion-itel-label" v-else @click="show = !show">
      {{ props.label }}
    </div>
    <div class="l-accordion-item-content" v-if="show">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { computed, inject, useSlots, ref } from 'vue';
import { useRoundedSwitch } from './composables/roundedSwitch.js';
import { useColorSwitch } from './composables/colorSwitch.js';

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
