<template>
    <div
        ref="inner"
        class="l-collapsible-content overflow-hidden transition-all duration-500 ease-in-out"
        :style="{ maxHeight: heightStyle }"
        :data-expended="collapsible.isOpen.value"
        :class="[pharos.getStaticClass('CollapsibleContent')]" 
      >
      <div class="p-4">
          <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { inject, computed, ref } from 'vue'

const inner = ref(null)
const collapsible = inject('collapsible')
const pharos = inject('pharos')

const heightStyle = computed(() => {
    return collapsible.isOpen.value ? inner.value?.scrollHeight + 'px'  : '0px'
})
</script>

<style scoped>

</style>