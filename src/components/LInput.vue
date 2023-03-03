<template>
  <input
    class="l-input flex-grow px-4 py-2 placeholder:italic"
    :class="[roundedClass, colorClass, borderClass, focusClass]"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
// use normal <script> to declare options
</script>

<script setup>
import { ref, computed, useSlots } from 'vue';
import { useColorSwitch } from './composables/colorSwitch.js';
import { useFocusSwitch } from './composables/focusSwitch.js';
import { useBorderSwitch } from './composables/borderSwitch.js';

const slots = useSlots();

defineEmits(['update:modelValue']);

const props = defineProps({
  modelValue: String,
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
    default: 'fill',
    validator(value) {
      // The value must match one of these strings
      return ['none', 'fill', 'light', 'outlined'].includes(value);
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

const roundedClass = computed(() => {
  return props.noRounded ? '' : 'rounded';
});

const colorClass = computed(() => {
  return useColorSwitch(props.color, props.mode);
});

const focusClass = computed(() => {
  return props.focus
    ? useFocusSwitch(props.color, props.mode)
    : 'focus:outline-none';
});

const borderClass = computed(() => {
  return props.border ? useBorderSwitch(props.color, props.mode) : '';
});
</script>

<style scoped></style>
