<template>
    <button
      class="l-tabs-trigger"
      :class="{ 'bg-black text-white': isActive, 'bg-white text-black': !isActive }"
      @click="tabs.active.value = value"
    >
      <slot></slot>
    </button>
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
  