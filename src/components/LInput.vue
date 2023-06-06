<template>
  <input
    class="l-input flex-grow px-4 py-2 placeholder:italic"
    :class="[
      roundedClass,
      colorClass,
      borderColorClass,
      borderSizeClass,
      focusClass,
      placeholderClass,
    ]"
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
import { useBorderColorSwitch } from './composables/borderColorSwitch.js';
import { useBorderSizeSwitch } from './composables/borderSizeSwitch.js';
import { usePlaceholderSwitch } from './composables/placeholderSwitch.js';

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
      return ['none', 'fill', 'light', 'outlined', 'text'].includes(value);
    },
  },
  border: {
    type: String,
  },
  focus: {
    type: String,
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
    ? useFocusSwitch(props.focus, props.mode)
    : 'focus:outline-none';
});

const borderColorClass = computed(() => {
  return props.border == undefined
    ? ''
    : useBorderColorSwitch(props.color, props.mode);
});

const borderSizeClass = computed(() => {
  return useBorderSizeSwitch(props.border);
});

const placeholderClass = computed(() => {
  return usePlaceholderSwitch(props.color, props.mode);
});
</script>

<style scoped></style>
