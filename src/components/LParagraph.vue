<template>
  <p class="l-paragraph" :class="[color, padding, margin, size]">
    <slot></slot>
  </p>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  color: {
    type: String,
    validator(value) {
      // The value must match one of these strings
      return ['slate', 'red', 'orange', 'yellow', 'blue'].includes(value);
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
  return props.background ? `${props.color}` : `text-${props.color}`;
});

const margin = computed(() => {
  return props.noMargin ? '' : 'margin';
});

const padding = computed(() => {
  return props.noPadding ? '' : 'padding';
});
</script>

<style scoped>
.padding {
  padding: 8px 12px;
}

.margin {
  margin: 12px 0;
}
</style>
