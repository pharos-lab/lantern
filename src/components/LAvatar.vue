<template>
  <div
    class="l-avatar inline-block overflow-hidden rounded-full"
    :class="[sizeClass]"
  >
    <img :src="props.src" :alt="props.alt" class="min-w-full l-avatar-image" />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  alt: String,
  src: String,
  size: {
    type: String,
    validator(value) {
      // The value must match one of these strings
      return [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
      ].includes(value);
    },
  },
});

const sizeClass = computed(() => {
  switch (props.size) {
    case 'xs':
      return 'w-5 h-5';
      break;
    case 'sm':
      return 'w-6 h-6';
      break;
    case 'md':
      return 'w-8 h-8';
      break;
    case 'lg':
      return 'w-12 h-12';
      break;
    case 'xl':
      return 'w-16 h-16';
      break;
    case '2xl':
      return 'w-20 h-20';
      break;
    case '3xl':
      return 'w-28 h-28';
      break;
    case '4xl':
      return 'w-40 h-40';
      break;
    case '5xl':
      return 'w-48 h-48';
      break;
    default:
      return 'w-10 h-10';
  }
});
</script>

<style scoped></style>
