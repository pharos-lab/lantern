<template>
  <LFadeTransition>
    <div
      v-show="open"
      :class="[color, rounded]"
      class="l-alert p-4 font-semibold shadow-md relative"
    >
      <LClose
        class="absolute right-4 top-4 w-5 h-5"
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

const open = ref(true);

const props = defineProps({
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
});

const color = computed(() => {
  return useColorSwitch(props.color, props.mode);
});

const rounded = computed(() => {
  return useRoundedSwitch(props.rounded);
});
</script>

<style scoped></style>
