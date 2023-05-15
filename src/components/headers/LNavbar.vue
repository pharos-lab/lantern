<template>
  <div class="l-navbar-wrapper" :class="[colorClass]">
    <div
      class="l-navbar flex items-center justify-center p-2 gap-4"
      :class="[containerClass]"
    >
      <div class="l-brand">
        <slot name="brand">
          <img :src="props.brand.src" :alt="props.brand.alt ?? 'ok'" />
        </slot>
      </div>

      <div
        class="l-links grow gap-4 hidden md:flex items-center"
        :class="alignmentClass"
      >
        <slot
          ><LLink
            v-for="link in props.links"
            :href="link.href"
            :color="props.color"
            :mode="props.mode"
            :rounded="props.rounded"
            :hover="props.hover"
            >{{ link.label }}</LLink
          ></slot
        >
      </div>

      <div class="l-actions hidden md:flex items-center">
        <slot name="actions">Actions goes here</slot>
      </div>

      <div class="l-mobile-navigation-trigger absolute right-0 md:hidden">
        <LFadeTransition mode="out-in">
          <Bars3Icon
            v-if="!openMobileNavigation"
            class="w-7 h-7 mr-4"
            @click="openMobileNavigation = true"
          />

          <XMarkIcon
            v-else
            @click="openMobileNavigation = false"
            class="w-7 h-7 mr-4"
          />
        </LFadeTransition>
      </div>
    </div>

    <div class="l-mobile-navigation-content" v-show="openMobileNavigation">
      <div class="l-mobile-links" :class="alignmentClass">
        <slot
          ><LLink
            v-for="link in props.links"
            :href="link.href"
            :color="props.color"
            :mode="props.mode"
            :rounded="props.rounded"
            :hover="props.hover"
            >{{ link.label }}</LLink
          ></slot
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, useSlots } from 'vue';
import LLink from '@/components/LLink.vue';
import LFadeTransition from '@/components/LFadeTransition.vue';
import { useColorSwitch } from '@/components/composables/colorSwitch.js';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid';

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

const openMobileNavigation = ref(false);

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
