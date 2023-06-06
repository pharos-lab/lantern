<template>
  <div class="l-input" :class="[positionClass]">
    <slot name="label">
      <label
        class="l-input-label"
        :class="labelColor"
        v-if="slots.label || props.label"
      >
        {{ props.label }}
      </label>
    </slot>

    <LInput class="flex-grow" v-bind="{ ...$attrs, ...props }"></LInput>
  </div>
</template>

<script>
// use normal <script> to declare options
export default {
  inheritAttrs: false,
};
</script>

<script setup>
import { ref, computed, useSlots } from 'vue';
import LInput from './LInput.vue';
import { usePositionSwitch } from './composables/positionSwitch.js';
import { useTextColorSwitch } from './composables/textColorSwitch.js';

const slots = useSlots();

const props = defineProps({
  label: String,
  position: {
    type: String,
    default: 'top',
    validator(value) {
      return ['top', 'left'].includes(value);
    },
  },
  noRounded: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    validator(value) {
      // The value must match one of these strings
      return ['gray', 'red', 'orange', 'yellow', 'blue'].includes(value);
    },
  },
  mode: {
    type: String,
    default: 'light',
    validator(value) {
      // The value must match one of these strings
      return ['none', 'fill', 'light', 'outlined', 'text'].includes(value);
    },
  },
  border: {
    type: Boolean,
    default: false,
  },
  focus: {
    type: Boolean,
    default: false,
  },
  autofocus: {
    type: Boolean,
    default: false,
  },
});

const positionClass = computed(() => {
  console.log(props.focus);
  switch (props.position) {
    case 'top':
      return 'flex flex-col gap-y-4';
    case 'left':
      return 'flex items-center gap-x-4';
  }
});

const labelColor = computed(() => {
  return useTextColorSwitch(props.color, 'dark');
});
</script>

<style scoped></style>
