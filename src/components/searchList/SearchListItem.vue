<template>
    <li 
        v-if="searchList?.model?.value == undefined || props.item.label.toLowerCase().includes(searchList.model.value)"
        class="l-search-list-item cursor-pointer overflow-hidden"
    >
        <component :is="slot" v-for="slot in slots" :class="themeClasses"></component>
    </li>
</template>

<script setup>
import { inject, computed, useSlots } from 'vue'

const props = defineProps({
    item: Object
})

const slots = useSlots().default()

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