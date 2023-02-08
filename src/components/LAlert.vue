<template>
  <LFadeTransition>
    <div
      v-show="open"
      :class="[color, rounded]"
      class="p-4 font-semibold shadow-md relative"
    >
      <LClose
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
  switch (props.mode) {
    case 'none':
      return props.color ? `l-text-${props.color}` : 'text-slate-600';
    case 'fill':
      return `l-${props.color}`;
    case 'light':
      return `l-${props.color}-${props.mode}`;
    case 'outlined':
      return `l-${props.color}-${props.mode} !border-0 !border-l-8`;
  }
});

const rounded = computed(() => {
  switch (props.rounded) {
    case 'none':
      return 'rounded-none';
      break;
    case 'normal':
      return 'rounded';
      break;
    case 'medium':
      return 'rounded-md';
      break;
    case 'large':
      return 'rounded-lg';
      break;
    default:
      return 'rounded';
      break;
  }
});
</script>

<style scoped></style>
