<template>
  <div class="l-navbar flex p-2" :class="[containerClass]">
    <div class="l-brand">MY TITLE</div>
    <div class="l-links grow flex gap-4" :class="alignmentClass">
      <slot v-if="slots.default"></slot>

      <template v-else-if="props.links">
        <LLink
          v-for="href in props.links.hrefs"
          :href="href"
          :color="links.color"
          :mode="links.mode"
          :rounded="links.rounded"
          :hover="links.hover"
          >Click me</LLink
        >
      </template>
    </div>
    <div class="l-actions">Connexion</div>
  </div>
</template>

<script setup>
import { ref, computed, useSlots } from 'vue';
import LLink from '@/components/LLink.vue';

const slots = useSlots();

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
  links: Object,
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
