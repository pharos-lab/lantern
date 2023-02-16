<template>
  <div
    class="l-card shadow-md"
    :class="[color, position, props.noRounded ? '' : 'rounded-md']"
  >
    <LAspect
      :aspect="aspect"
      class="l-card-image"
      v-if="props.img"
      :class="props.size"
    >
      <img
        :src="props.img"
        :alt="props.alt ?? 'card illustration'"
        class="object-cover"
      />
    </LAspect>

    <div class="l-card-content flex-grow" :class="contentSize">
      <div class="l-card-header">
        <slot name="header"></slot>
      </div>

      <div class="l-card-body">
        <slot></slot>
      </div>

      <div class="l-card-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import LAspect from './LAspect.vue';
import { usePositionSwitch } from './composables/positionSwitch.js';

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
  img: String,
  position: {
    type: String,
    default: 'top',
    validator(value) {
      // The value must match one of these strings
      return ['top', 'bottom', 'left', 'right'].includes(value);
    },
  },
  size: {
    type: String,
    validator(value) {
      // The value must match one of these strings
      return ['w-1/2', 'w-1/3', 'w-1/4', 'w-1/5', 'w-1/6'].includes(value);
    },
  },
  aspect: {
    type: String,
    validator(value) {
      return value.match(/\d\/\d/);
    },
  },
});

const contentSize = computed(() => {
  if (props.size) {
    let res = props.size.match(/w-(\d)\/(\d)/);
    return `w-${res[2] - res[1]}/${res[2]}`;
  }
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

const position = computed(() => {
  return usePositionSwitch(props.position);
  switch (props.position) {
    case 'top':
      return 'flex flex-col';
    case 'bottom':
      return 'flex flex-col-reverse';
    case 'left':
      return 'flex flex-row';
    case 'right':
      return 'flex flex-row-reverse';
  }
});

const aspect = computed(() => {
  if (props.aspect) {
    return props.aspect;
  }
  switch (props.position) {
    case 'top':
    case 'bottom':
      return '2/1';
    case 'right':
    case 'left':
      return 'auto';
  }
});
</script>

<style scoped></style>
