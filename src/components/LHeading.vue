<template>
  <div class="l-heading">
    <component
      :is="tag"
      class="l-heading"
      :class="[size, color, margin, padding]"
    >
      <slot></slot>
    </component>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import '@/styles/fonts.css';

const props = defineProps({
  color: {
    type: String,
    validator(value) {
      // The value must match one of these strings
      return ['slate', 'red', 'orange', 'yellow', 'blue'].includes(value);
    },
  },
  size: {
    type: String,
    default: 'normal',
    validator(value) {
      return [
        'xs',
        'sm',
        'normal',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ].includes(value);
    },
  },
  level: {
    type: String,
    default: '2',
    validator(value) {
      return ['1', '2', '3', '4', '5', '6'].includes(value);
    },
  },
  background: {
    type: Boolean,
    default: false,
  },
  noMargin: {
    type: Boolean,
    default: false,
  },
  noPadding: {
    type: Boolean,
    default: false,
  },
});

const color = computed(() => {
  return props.background ? `text-${props.color}` : props.color;
});

const tag = computed(() => {
  return 'h' + props.level;
});

const padding = computed(() => {
  return props.noPadding ? '' : 'l-heading-padding';
});

const margin = computed(() => {
  return props.noMargin ? '' : 'l-heading-margin';
});
const size = computed(() => {
  return `text-${props.size}`;
});
</script>

<style scoped>
.l-heading-margin {
  margin: 12px 0;
}

.l-heading-padding {
  padding: 8px 12px;
}
</style>
