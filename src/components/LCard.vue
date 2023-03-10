<template>
  <div
    class="l-card shadow-md"
    :class="[colorClass, positionClass, props.noRounded ? '' : 'rounded-md']"
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

    <div class="l-card-content flex-grow" :class="contentSizeClass">
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
import { useColorSwitch } from './composables/colorSwitch.js';

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

const contentSizeClass = computed(() => {
  if (props.size) {
    let res = props.size.match(/w-(\d)\/(\d)/);
    return `w-${res[2] - res[1]}/${res[2]}`;
  }
});

const colorClass = computed(() => {
  return useColorSwitch(props.color, props.mode);
});

const positionClass = computed(() => {
  return usePositionSwitch(props.position);
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
