<template>
  <LFadeTransition>
    <div
      v-show="open"
      :class="[colorClass, roundedClass, leftBorderClass]"
      class="l-alert p-4 font-semibold shadow-md relative"
    >
      <LClose
        class="float-right w-5 h-5"
        v-if="props.dismissable"
        @click="open = false"
        :color="props.color"
        :context="props.mode"
      ></LClose>

      <slot></slot>
    </div>
  </LFadeTransition>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, computed } from 'vue';
import LFadeTransition from './LFadeTransition.vue';
import LClose from './LClose.vue';
import { useRoundedSwitch } from './composables/roundedSwitch.js';
import { useColorSwitch } from './composables/colorSwitch.js';
import { useBorderColorSwitch } from './composables/borderColorSwitch.js';

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
      return ['none', 'fill', 'light', 'outlined'].includes(value);
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
  return useColorSwitch(props.color, props.mode);
});

const roundedClass = computed(() => {
  return useRoundedSwitch(props.rounded);
});

const leftBorderClass = computed(() => {
  if (props.leftBorder) {
    return useBorderColorSwitch(props.color, props.mode) + ' border-l-4';
  }
});
</script>

<style scoped></style>
