<template>
    <input 
        type="text" 
        class="l-search-list-input px-3 py-1 rounded font-semibold" 
        v-model="searchList.model.value"
        :class="themeClasses"
    >
</template>

<script setup>
import { inject, computed } from 'vue'
const searchList = inject('searchList')
const pharos = inject('pharos')

const themeClasses = computed(() => {
    return pharos.getThemeClasses({...searchList.props, variant: 'light', focus: true}, 'searchList')
})
</script>