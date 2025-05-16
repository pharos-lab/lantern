<template>
    <div class="l-floating-trigger" v-on="listeners">
        <slot></slot>
    </div>
</template>

<script setup>
import { inject, computed } from 'vue'

const floating = inject('floating')
const pharos = inject('pharos')

// Dynamically assign event listeners based on trigger type
const listeners = computed(() => {
  if (floating.props.trigger === 'click') {
    return { click: floating.toggle }
  } else if (floating.props.trigger === 'hover') {
    return {
      mouseenter: floating.open,
      mouseleave: floating.close
    }
  }
  return {}
})
</script>

<style scoped>

</style>