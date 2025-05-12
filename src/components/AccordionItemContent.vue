<template>
    <div
        ref="inner"
        class="l-accordion-item-content overflow-hidden transition-all duration-500 ease-in-out"
        :style="{ maxHeight: heightStyle }"
      >
      <div class="p-4">
          <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { inject, computed, ref } from 'vue'

const inner = ref(null)
const accordionItem = inject('accordionItem')

const heightStyle = computed(() => {
    return accordionItem.isOpen.value ? inner.value?.scrollHeight + 'px'  : '0px'
})
</script>

<style scoped>

</style>