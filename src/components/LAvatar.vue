<template>
  <div class="l-avatar" :class="[size]">
    <img :src="props.src" :alt="props.alt" />
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
      ].includes(value);
    },
  },
});

const size = computed(() => {
  return `square-${props.size}`;
});
</script>

<style scoped>
.l-avatar {
  display: inline-block;
  overflow: hidden;
  border-radius: 9999999px;
}

.l-avatar img {
  min-width: 100%;
  min-height: 100%;
}
</style>
