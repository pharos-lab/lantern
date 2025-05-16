<template>
    <input 
        type="text" 
        class="l-search-list-input px-3 py-1 rounded" 
        v-model="searchList.model.value"
        :class="themeClasses"
    >
</template>

<script setup>
import { inject, computed } from 'vue'
const searchList = inject('searchList')
const pharos = inject('pharos')

const props = defineProps({
    color: {
        type: String,
        default: 'default'
    },
    variant: {
        type: String,
        default: 'outline',
        validator(value) {
            return ['base', 'outline', 'light', 'text'].includes(value)
        }
    },
    unstyle: {
        type: Boolean,
        default: false
    },
})

const themeClasses = computed(() => {
    return pharos.getThemeClasses(searchList.props, 'searchList')
})
</script>