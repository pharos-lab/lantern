<template>
  <span ref="trigger" class="l-tooltip-trigger cursor-pointer">
    <slot></slot>
  </span>
  <div
    class="l-tooltip-popper px-4 py-2"
    :class="[roundedClass, colorClass]"
    ref="popper"
  >
    <slot name="tooltip">{{ props.tooltip }}</slot>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue';
import { Blink } from '@pharos-lab/blink';
import { useRoundedSwitch } from './composables/roundedSwitch.js';
import { useColorSwitch } from './composables/colorSwitch.js';

const props = defineProps({
  tooltip: String,
  color: {
    type: String,
    default: 'gray',
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
  rounded: {
    type: String,
    default: 'normal',
    validator(value) {
      return ['none', 'sm', 'normal', 'md', 'lg', 'xl', 'pills'].includes(
        value
      );
    },
  },
  arrow: {
    type: Boolean,
    default: true,
  },
  placement: {
    type: String,
    default: 'top',
    validator(value) {
      return ['top', 'bottom', 'left', 'right'].includes(value);
    },
  },
  event: {
    type: String,
    default: 'hover',
    validator(value) {
      return ['hover', 'click'].includes(value);
    },
  },
  dropdown: {
    type: String,
    default: 'none',
    validator(value) {
      return ['left', 'right'].includes(value);
    },
  },
});

const trigger = ref(null);
const popper = ref(null);

onMounted(() => {
  Blink.create(trigger.value, popper.value, {
    arrow: props.arrow,
    placement: props.placement,
    event: props.event,
    dropdown: props.dropdown,
  });
});

const roundedClass = computed(() => {
  return useRoundedSwitch(props.rounded);
});

const colorClass = computed(() => {
  return useColorSwitch(props.color, props.mode);
});
</script>

<style scoped></style>
