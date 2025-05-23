<template>
  <div class="l-tabs-list flex" :class="[pharos.theme.components?.TabsList, orientationClass]">
    <slot></slot>
  </div>
</template>

<script setup>
import { inject, computed } from 'vue'

const props = defineProps({
    orientation: {
      type: String,
      default: 'horizontal',
      validator(value) {
          return ['horizontal', 'vertical'].includes(value)
      }
    }
})

const pharos = inject('pharos')
const tabs = inject('tabs')

const orientationClass = computed(() => {
    if (tabs.props.orientation == 'horizontal') {
      return 'flex-col'
    }
    return props.orientation == 'vertical' ? 'flex-col' : 'flex-row'
})

</script>