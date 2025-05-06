<template>
   
    <div
        ref="inner"
        class="l-panel-content overflow-hidden transition-all duration-500 ease-in-out"
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
const panel = inject('panel')


const heightStyle = computed(() => {
    return panel.isOpen.value ? inner.value.scrollHeight + 'px'  : '0px'
})


</script>

<style scoped>

</style>