<template>
    <div class="l-panel" :class="classes">
      <slot></slot>
    </div>
</template>
  
<script setup>
import { ref, provide, computed, inject } from 'vue';

const props = defineProps({
  color: { type: String, default: 'primary' },
  variant: { type: String, default: 'light' },
  rounded: { type: String, default: 'base'},
  shadow: { type: Boolean, default: true },
  expanded: { type: Boolean, default: true },
  toggleable: { type: Boolean, default: false},
  unstyled: { type: Boolean, default: false }
});

const emit = defineEmits(['update:expanded']);

const isExpanded = ref(props.expanded)

const toggle = () => {
  isExpanded.value = !isExpanded.value;
};

const pharos = inject('pharos')

const themeClasses = computed(() => {
    return pharos.getThemeClasses(props, 'accordion')
})

  
provide('panel', {
  color: props.color,
  variant: props.variant,
  isExpanded,
  toggle,
});
</script>
  