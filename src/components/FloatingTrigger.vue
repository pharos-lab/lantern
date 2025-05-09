<template>
    <div class="l-dropdown-trigger" v-on="listeners">
        <slot></slot>
    </div>
</template>

<script setup>
import { inject, computed } from 'vue'

const dropdown = inject('dropdown')
const pharos = inject('pharos')

// Dynamically assign event listeners based on trigger type
const listeners = computed(() => {
  if (dropdown.props.trigger === 'click') {
    return { click: dropdown.toggle }
  } else if (dropdown.props.trigger === 'hover') {
    return {
      mouseenter: dropdown.open,
      mouseleave: dropdown.close
    }
  }
  return {}
})
</script>

<style scoped>

</style>