<template>
  <div class="l-navbar flex" :class="[containerClass]">
    <div class="l-brand">MY TITLE</div>
    <div class="l-links grow flex gap-4" :class="alignmentClass">
      <LLink href="ok" color="blue" rounded>Click me</LLink>
      <LLink href="ok" color="blue" rounded>Click me</LLink>
      <LLink href="ok" color="blue" rounded>Click me</LLink>
    </div>
    <div class="l-actions">Connexion</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import LLink from '@/components/LLink.vue';

const props = defineProps({
  container: {
    type: Boolean,
    default: false,
  },
  alignment: {
    type: String,
    default: 'center',
    validator(value) {
      return ['left', 'center', 'right'].includes(value);
    },
  },
});

const containerClass = computed(() => {
  return props.container ? 'container mx-auto' : '';
});

const alignmentClass = computed(() => {
  switch (props.alignment) {
    case 'left':
      return 'justify-start';
    case 'center':
      return 'justify-center';
    case 'right':
      return 'justify-end';
  }
});
</script>

<style scoped></style>
