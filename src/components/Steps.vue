<template>
    <div class="l-steps" :class="classe">
        <slot></slot>
    </div>
</template>

<script setup>
import { inject, computed } from 'vue';

const { propsStep } = inject('stepper')
const getClass = inject('getClass')

const classe = computed(() => {
  if (propsStep.unstyled) return 

  return getClass(propsStep, 'stepper', 'padding')
})
</script>
