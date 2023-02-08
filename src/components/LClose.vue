<template>
  <div class="l-close inline-block p-1 rounded-md" :class="hover">
    <div
      class="l-close-bar bar1 w-5 h-1 my-1 rotate-45 rounded-md translate-y-1"
      :class="color"
    ></div>
    <div
      class="l-close-bar bar2 w-5 h-1 my-1 -rotate-45 -translate-y-1 rounded-md"
      :class="color"
    ></div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  color: {
    type: String,
    validator(value) {
      // The value must match one of these strings
      return ['slate', 'red', 'orange', 'yellow', 'blue', 'white'].includes(
        value
      );
    },
  },
  context: {
    type: String,
    default: 'none',
    validator(value) {
      // The value must match one of these strings
      return ['none', 'fill', 'light', 'outlined'].includes(value);
    },
  },
  hover: {
    type: Boolean,
    default: true,
  },
});

const hover = ref();

const color = computed(() => {
  switch (props.context) {
    case 'none':
      return props.color ? `l-${props.color}` : 'l-slate';
    case 'fill':
      props.hover ? (hover.value = `l-${props.color}-hover`) : '';
      return `bg-white`;
      break;
    case 'outlined':
      hover.value = `l-${props.color}-light-hover`;
      return `l-${props.color}`;
      break;
    case 'light':
      hover.value = `l-${props.color}-${props.context}-hover`;
      return `l-${props.color}`;
      break;
    default:
      return 'l-slate';
  }
});
</script>

<style scoped></style>
