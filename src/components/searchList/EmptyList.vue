<template>
    <div :class="[pharos.theme.components?.SearchListItems, pharos.getThemeClass(searchList.props, 'border', 'searchListItem')]" v-show="!searchList.filteredItems.value.length">
        <div 
            class="l-search-list-empty" 
            :class="[themeClasses, pharos.theme.components?.EmptyList]"
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