<template>
    <p class="l-search-list-item-label px-3 py-1 font-medium rounded" :class="[themeClasses]">
        <slot></slot>
    </p>
</template>

<script setup>
import { inject, computed } from 'vue';

const props = defineProps({
    color: String
})

const pharos = inject('pharos')
const themeClasses = computed(() => {
    console.log(props);
    return pharos.getThemeClasses({...props, hover: true}, 'searchList')
})
</script>