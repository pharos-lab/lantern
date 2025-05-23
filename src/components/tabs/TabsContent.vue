<template>
  <div 
    v-show="isActive" class="l-tabs-content" 
    :class="[pharos.theme.components?.TabsContent, themeClasses]"
    :data-state="isActive ? 'active' : 'inactive'"
  >
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
  },
  variant: {
    type: String,
    default: 'light'
  },
})

const pharos = inject('pharos')
const tabs = inject('tabs')
const isActive = computed(() => tabs.active.value === props.value)

const themeClasses = computed(() => {
  return pharos.getThemeClasses({color: tabs.props.color, variant: props.variant})
})
</script>
  