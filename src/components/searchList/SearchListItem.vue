<template>
    <li 
        class="l-search-list-item cursor-pointer overflow-hidden px-3 py-1 rounded"
        :class="themeClasses"
        >
        <slot></slot>
    </li>
</template>

<script setup>
import { inject, computed } from 'vue'

const searchList = inject('searchList')
const pharos = inject('pharos')

const themeClasses = computed(() => {
    return pharos.getThemeClasses({...searchList.props, hover: true}, 'searchList')
})
</script>

<style scoped>
.l-search-list-item:has(+ .l-search-list-empty) {
  margin-bottom: 0;
}
</style>