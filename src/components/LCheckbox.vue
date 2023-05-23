<template>
  <input
    class="l-checkbox appearance-none w-5 h-5"
    :class="[
      roundedClass,
      colorClass,
      borderColorClass,
      borderSizeClass,
      focusClass,
      checkedClass,
    ]"
    type="checkbox"
    v-model="value"
  />
</template>

<script>
// use normal <script> to declare options
</script>

<script setup>
import { ref, computed } from 'vue';
import { useColorSwitch } from './composables/colorSwitch.js';
import { useFocusSwitch } from './composables/focusSwitch.js';
import { useBorderColorSwitch } from './composables/borderColorSwitch.js';
import { useBorderSizeSwitch } from './composables/borderSizeSwitch.js';
import { useCheckedSwitch } from './composables/checkedSwitch.js';
import { useRoundedSwitch } from './composables/roundedSwitch.js';

const emit = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

const props = defineProps({
  modelValue: String,
  rounded: {
    type: String,
    default: 'normal',
    validator(value) {
      // The value must match one of these strings
      return ['none', 'sm', 'normal', 'md', 'lg', 'xl', 'pill'].includes(value);
    },
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
      return ['none', 'fill', 'light', 'outlined', 'text'].includes(value);
    },
  },
  border: {
    type: String,
  },
  focus: {
    type: String,
  },
  hover: {
    type: Boolean,
    default: true,
  },
});

const roundedClass = computed(() => {
  return useRoundedSwitch(props.rounded);
});

const colorClass = computed(() => {
  return useColorSwitch(props.color, props.mode);
});

const focusClass = computed(() => {
  return props.focus
    ? useFocusSwitch(props.focus, props.mode)
    : props.focus == ''
    ? useFocusSwitch(props.color, props.mode)
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

const checkedClass = computed(() => {
  return useCheckedSwitch(props.color, props.mode, props.hover);
});
</script>

<style scoped>
.l-checkbox {
  transition: background-color 0.3s ease-in;
}
</style>
