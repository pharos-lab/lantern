<template>
  <div
    class="l-card shadow-md"
    :class="[color, props.noRounded ? '' : 'rounded-md']"
  >
    <div class="l-card-header">
      <slot name="header"></slot>
    </div>

    <div class="l-card-content">
      <slot></slot>
    </div>

    <div class="l-card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
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
  mode: {
    type: String,
    default: 'fill',
    validator(value) {
      // The value must match one of these strings
      return ['none', 'fill', 'light', 'outlined'].includes(value);
    },
  },
});

const color = computed(() => {
  switch (props.mode) {
    case 'none':
      return props.color
        ? `l-text-${props.color} bg-slate-100 border border-slate-300`
        : 'bg-slate-100 border border-slate-300';
    case 'fill':
      return props.color ? `l-${props.color}` : 'bg-slate-100';
    case 'light':
    case 'outlined':
      return `l-${props.color}-${props.mode}`;
  }
});
</script>

<style scoped></style>
