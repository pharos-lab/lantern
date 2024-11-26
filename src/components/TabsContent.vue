<template>
    <div class="l-tabs-content p-4" role="tabpanel" :class="SubBackgroundClass">
      <slot></slot>
    </div>
</template>

<script setup>
import { inject, computed } from 'vue'

const getClass = inject('getClass')
const { propsTab } = inject('tabs')

const SubBackgroundClass = computed(() => {
    return getClass(propsTab, 'tabs', 'subBackground')
})
</script>