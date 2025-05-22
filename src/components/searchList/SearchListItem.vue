<template>
    <div :class="[themeClasses, pharos.theme.components.SearchListItem]" class="">
        <slot></slot>
    </div>
</template>

<script setup>
import { inject, computed } from 'vue'

const searchList = inject('searchList')
const pharos = inject('pharos')

const themeClasses = computed(() => {
    return pharos.getThemeClasses({...searchList.props}, 'searchListItem')
})
</script>