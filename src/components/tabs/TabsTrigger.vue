<template>
  <Button
    v-if="props.label"
    class="l-tabs-trigger"
    v-bind="tabs.props"
    @click="tabs.active.value = value"
    :class="[isActive ? pharos.theme.colors[tabs.props.color].active[tabs.props.variant] : null] "
  >
    {{ props.label }}
  </Button>

  <div 
    v-else
    @click="tabs.active.value = value"
    :class="[isActive ? pharos.theme.colors[tabs.props.color].active[tabs.props.variant] : null, themeClasses] "
    class="l-tabs-trigger"
  >
    <slot></slot>

  </div>
</template>

<script setup>
import { inject, computed } from 'vue'
import { Button } from '@/components/button';

const props = defineProps({
  value: {
    type: String,
    required: true,
    default: "1"
  },
  label: String
})
const tabs = inject('tabs')
const pharos = inject('pharos')

const isActive = computed(() => tabs.active.value === props.value)

const themeClasses = computed(() => {
    return pharos.getThemeClasses(tabs.props, 'button')
})
</script>
  