<template>
  <div class="l-close">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
      <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
      />
    </svg>
  </div>

  <!--<div class="l-close inline-block p-1 rounded-md" :class="hover">
    <div
      class="l-close-bar bar1 w-5 h-1 my-1 rotate-45 rounded-md translate-y-1"
      :class="color"
    ></div>
    <div
      class="l-close-bar bar2 w-5 h-1 my-1 -rotate-45 -translate-y-1 rounded-md"
      :class="color"
    ></div>
  </div>-->
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
