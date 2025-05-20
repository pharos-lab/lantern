<template>
    <li 
        class="l-search-list-item cursor-pointer overflow-hidden"
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