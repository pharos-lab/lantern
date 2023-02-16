<template>
  <div class="l-input" :class="[position]">
    <label class="l-input-label" v-if="slots.label || props.label">
      <slot name="label">{{ props.label }}</slot>
    </label>

    <input
      :type="props.type"
      class="l-input-content flex-grow"
      v-bind="$attrs"
      :class="rounded"
    />
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
import { usePositionSwitch } from './composables/positionSwitch.js';

const slots = useSlots();

const props = defineProps({
  label: String,
  type: {
    type: String,
    default: 'text',
  },
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
      return ['slate', 'red', 'orange', 'yellow', 'blue'].includes(value);
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
});

const position = computed(() => {
  switch (props.position) {
    case 'top':
      return 'flex flex-col gap-y-4';
    case 'left':
      return 'flex items-center gap-x-4';
  }
});

const rounded = computed(() => {
  return props.noRounded ? '' : 'rounded';
});
</script>

<style scoped></style>
