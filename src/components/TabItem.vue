<template>
    <div v-show="isActive" class="l-tab-item">
      <slot></slot>
    </div>
  </template>
  
<script setup>
import { inject, computed } from 'vue';

const { activeTab } = inject('tabs');

const props = defineProps({
    name: { type: String, required: true },
});

const isActive = computed(() => activeTab.value === props.name);
</script>
  