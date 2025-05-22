<template>
    <div v-show="isActive" class="l-tabs-content">
      <slot></slot>
    </div>
  </template>
  
  <script setup>
  import { inject, computed } from 'vue'
  
  const props = defineProps({
    value: {
      type: String,
      required: true,
      default: "1"
    }
  })
  
  const tabs = inject('tabs')
  const isActive = computed(() => tabs.active.value === props.value)
  </script>
  