<template>
    <div class="l-panel bg-blue-50 rounded" >
      <slot></slot>
    </div>
  </template>
  
  <script setup>
  import { ref, provide } from 'vue';
  
  const props = defineProps({
    color: { type: String, default: 'primary' },
    variant: { type: String, default: 'light' },
    expanded: { type: Boolean, default: true },
  });
  
  const emit = defineEmits(['update:expanded']);
  
  const isExpanded = ref(props.expanded)
  
  const toggle = () => {
    console.log(props, isExpanded.value)
    isExpanded.value = !isExpanded.value;
  };
  
  provide('panel', {
    color: props.color,
    variant: props.variant,
    isExpanded,
    toggle,
  });
  </script>
  