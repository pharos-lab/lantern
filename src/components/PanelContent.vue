<template>
   
    <div
        ref="inner"
        class="l-panel-content overflow-hidden transition-all duration-500 ease-in-out"
        :class="[themeClasses]"
        :style="{ height: heightStyle }"
      >
      <div class="p-4">
          <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { inject, computed, provide, ref } from 'vue'


const inner = ref(null)
const pharos = inject('pharos')
const panel = inject('panel')

const heightStyle = computed(() => {
    return panel.isOpen.value ? inner.value.scrollHeight + 'px'  : '0px'
})


const themeClasses = computed(() => {
    return pharos.getThemeClasses(panel.props, 'panel')
})
</script>

<style scoped>

</style>