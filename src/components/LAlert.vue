<template>
  <LFadeTransition>
    <div
      v-show="open"
      :class="[colorClass, roundedClass, leftBorderClass]"
      class="l-alert p-4 font-semibold shadow-md relative"
    >
      <XMarkIcon
        class="float-right w-5 h-5 rounded cursor-pointer mt-1 stroke-2"
        :class="closeColorClass"
        v-if="props.dismissable"
        @click="open = false"
      ></XMarkIcon>

      <slot></slot>
    </div>
  </LFadeTransition>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, computed } from 'vue';
import LFadeTransition from './LFadeTransition.vue';
import { rounded } from './composables/rounded.js';
import { backgroundColor } from './composables/backgroundColor.js';
import { hoverColor } from './composables/hoverColor.js';
import { borderColor } from './composables/borderColor.js';
import { XMarkIcon } from '@heroicons/vue/24/outline';

const open = ref(true);

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
      return ['none', 'fill', 'light', 'outlined', 'text'].includes(value);
    },
  },
  rounded: {
    type: String,
    validator(value) {
      // The value must match one of these strings
      return ['none', 'sm', 'normal', 'md', 'lg', 'xl', 'pills'].includes(
        value
      );
    },
  },
  dismissable: {
    type: Boolean,
    default: true,
  },
  leftBorder: Boolean,
});

const colorClass = computed(() => {
  return backgroundColor[props.color][props.mode];
});
const closeColorClass = computed(() => {
  return hoverColor[props.color][props.mode];
});

const roundedClass = computed(() => {
  return rounded[props.rounded];
});

const leftBorderClass = computed(() => {
  if (props.leftBorder) {
    return borderColor[props.color]['fill'] + ' border-l-8';
  }
});
</script>

<style scoped></style>
