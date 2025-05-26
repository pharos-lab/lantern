<template>
    <div 
        :class="[pharos.getStaticClass('SearchListItems'), pharos.getThemeClass(searchList.props, 'border', 'searchListItems')]" 
        v-show="!searchList.filteredItems.value.length"
    >
        <div 
            class="l-search-list-empty" 
            :class="[themeClasses, pharos.getStaticClass('EmptyList')]"
            >
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { inject, computed } from 'vue'

const pharos = inject('pharos')
const searchList = inject('searchList')

const themeClasses = computed(() => {
    return pharos.getThemeClasses({...searchList.props }, 'searchList')
})
</script>

<style scoped>
</style>