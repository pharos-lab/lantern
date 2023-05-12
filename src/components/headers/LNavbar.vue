<template>
  <div class="l-navbar-wrapper" :class="[colorClass]">
    <div class="l-navbar flex items-center p-2 gap-4" :class="[containerClass]">
      <div class="l-brand">
        <slot name="brand">
          <img :src="props.brand.src" :alt="props.brand.alt ?? 'ok'" />
        </slot>
      </div>

      <div class="l-links flex grow gap-4" :class="alignmentClass">
        <slot v-if="slots.default"></slot>

        <template v-else-if="props.links">
          <LLink
            v-for="link in props.links"
            :href="link.href"
            :color="props.color"
            :mode="props.mode"
            :rounded="props.rounded"
            :hover="props.hover"
            >{{ link.label }}</LLink
          >
        </template>
      </div>

      <div class="l-actions">
        <slot name="actions">Actions goes here</slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, useSlots } from 'vue';
import LLink from '@/components/LLink.vue';
import { useColorSwitch } from '@/components/composables/colorSwitch.js';

const slots = useSlots();

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
    default: 'text',
    validator(value) {
      // The value must match one of these strings
      return [
        'none',
        'fill',
        'light',
        'outlined',
        'text',
        'underlined',
      ].includes(value);
    },
  },
  rounded: {
    type: String,
    validator(value) {
      // The value must match one of these strings
      return ['none', 'sm', 'normal', 'md', 'lg', 'xl', 'pill'].includes(value);
    },
  },
  hover: {
    type: Boolean,
    default: false,
  },
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
  links: Array,
  brand: Object,
});

const colorClass = computed(() => {
  if (props.mode != 'outlined') {
    return useColorSwitch(props.color, props.mode);
  }
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
