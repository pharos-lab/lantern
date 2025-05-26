<template>
  <Button
    v-if="props.label"
    class="l-tabs-trigger"
    v-bind="tabs.props"
    @click="handle"
    :class="[
      isActive ? pharos.getThemeClass(tabs.props, 'active', 'tabs') : null,
      themeClasses,
      pharos.getStaticClass('TabsTrigger')
    ]"
    data-state
  >
    {{ props.label }}
  </Button>

  <div 
    v-else
    @click="tabs.active.value = value"
    :class="[
      isActive ? pharos.getThemeClass(tabs.props, 'active', 'tabs') : null, 
      themeClasses, 
      pharos.getStaticClass('TabsTrigger')
    ]"
    class="l-tabs-trigger"
    :data-state="isActive ? 'active': 'inactive'"
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

const handle = () => {
  tabs.active.value = value
}

const themeClasses = computed(() => {
    return pharos.getThemeClasses(tabs.props, 'button')
})
</script>
  