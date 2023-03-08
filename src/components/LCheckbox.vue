<template>
  <input
    class="l-checkbox appearance-none"
    :class="[roundedClass, colorClass, borderClass, focusClass, checkedClass]"
    type="checkbox"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
// use normal <script> to declare options
</script>

<script setup>
import { ref, computed } from 'vue';
import { useColorSwitch } from './composables/colorSwitch.js';
import { useFocusSwitch } from './composables/focusSwitch.js';
import { useBorderSwitch } from './composables/borderSwitch.js';
import { useCheckedSwitch } from './composables/checkedSwitch.js';

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
    default: 'outlined',
    validator(value) {
      // The value must match one of these strings
      return ['none', 'fill', 'light', 'outlined'].includes(value);
    },
  },
  border: {
    type: Boolean,
    default: true,
  },
  focus: {
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
    ? useFocusSwitch(props.color, props.mode, props.border)
    : 'focus:outline-none';
});

const borderClass = computed(() => {
  return props.border ? useBorderSwitch(props.color, props.mode) : '';
});

const checkedClass = computed(() => {
  return useCheckedSwitch(props.color, props.mode);
});
</script>

<style scoped>
.l-checkbox {
  display: grid;
  place-content: center;
}

.l-checkbox::before {
  content: '';
  width: 0.65em;
  height: 0.65em;
  transform: scale(0);
  transition: 1000ms transform ease-in-out;
  box-shadow: inset 1em 1em;
}

.l-checkbox:checked::before {
  transform: scale(1);
}
</style>
