<template>
  <div class="l-dropdown relative inline-block">
    <div
      class="inline-block"
      v-if="slots.label"
      :class="colorClass"
      @mouseenter="!props.click ? (showItems = true) : null"
      @mouseleave="!props.click ? (showItems = false) : null"
      @click="props.click ? (showItems = !showItems) : null"
    >
      <slot name="label"> </slot>
    </div>
    <LButton
      v-else
      hover
      class="l-dropdown-button ease-in-out transition-all duration-500"
      :color="props.color"
      :mode="props.mode"
      :class="labelClass"
      @mouseenter="!props.click ? (showItems = true) : null"
      @mouseleave="!props.click ? (showItems = false) : null"
      @click="props.click ? (showItems = !showItems) : null"
    >
      {{ props.label ?? 'Add a label' }}
    </LButton>
    <LFadeTransition>
      <div
        v-show="showItems"
        class="l-dropdown-items absolute whitespace-nowrap overflow-hidden z-10"
        :class="[roundedClass, placementClass]"
        @mouseenter="showItems = true"
        @mouseleave="showItems = false"
      >
        <slot></slot>
      </div>
    </LFadeTransition>
  </div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { ref, computed, provide, useSlots } from 'vue';
import LButton from './LButton.vue';
import LFadeTransition from './LFadeTransition.vue';
import { useColorSwitch } from './composables/colorSwitch.js';

provide('dropdownColor', props.color);
provide('dropdownMode', props.mode);

const slots = useSlots();

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
  click: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  margin: {
    type: Boolean,
    default: false,
  },
  right: {
    type: Boolean,
    default: false,
  },
});

const showItems = ref(false);

const labelClass = computed(() => {
  if (props.rounded && !props.margin && showItems.value) {
    return 'rounded-t';
  } else if (props.rounded) {
    return 'rounded';
  }
});

const roundedClass = computed(() => {
  return props.rounded && !props.margin
    ? 'rounded-b'
    : props.rounded && props.margin
    ? 'rounded mt-2'
    : props.rounded
    ? 'rounded'
    : props.margin
    ? 'mt-2'
    : '';
});

const placementClass = computed(() => {
  return props.right ? 'right-0' : '';
});

const colorClass = computed(() => {
  return useColorSwitch(props.color, props.mode);
});
</script>

<style scoped></style>
