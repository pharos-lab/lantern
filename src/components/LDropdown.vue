<template>
  <div class="l-dropdown relative inline-block">
    <LButton
      hover
      class="l-dropdown-button ease-in-out transition-all duration-500"
      :color="props.color"
      :class="labelClass"
      @mouseenter="!props.click ? (showItems = true) : null"
      @mouseleave="!props.click ? (showItems = false) : null"
      @click="props.click ? (showItems = !showItems) : null"
    >
      <slot name="label">{{ props.label ?? 'Add a label' }}</slot>
    </LButton>
    <LFadeTransition>
      <div
        v-show="showItems"
        class="l-dropdown-items absolute whitespace-nowrap overflow-hidden"
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

import { ref, computed, provide } from 'vue';
import LButton from './LButton.vue';
import LFadeTransition from './LFadeTransition.vue';

provide('dropdownColor', props.color);

const props = defineProps({
  color: {
    type: String,
    validator(value) {
      // The value must match one of these strings
      return ['slate', 'red', 'orange', 'yellow', 'blue'].includes(value);
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
    console.log('ok');
    return 'rounded-t';
  } else if (props.rounded) {
    console.log('bad');
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

const colorClass = computed(() => {});

const placementClass = computed(() => {
  return props.right ? 'right-0' : '';
});
</script>

<style scoped></style>
