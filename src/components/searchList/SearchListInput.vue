<template>
    <input 
        type="text" 
        class="l-search-list-input px-3 py-1 rounded font-semibold" 
        v-model="searchList.model.value"
        :class="themeClasses"
        ref="input"
    >
</template>

<script setup>
import { inject, computed, useTemplateRef } from 'vue'


const input = useTemplateRef('input')
defineExpose({input})

const searchList = inject('searchList')
const pharos = inject('pharos')

const themeClasses = computed(() => {
    return pharos.getThemeClasses({...searchList.props, variant: 'light', focus: true}, 'searchList')
})
</script>