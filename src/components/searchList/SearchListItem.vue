<template>
    <li 
        v-if="searchList?.model?.value == undefined || props.item.label.toLowerCase().includes(searchList.model.value)"
        class="l-search-list-item cursor-pointer"
    >
        <slot></slot>
    </li>
</template>

<script setup>
import { inject } from 'vue'

const props = defineProps({
    item: Object
})

const searchList = inject('searchList')

</script>

<style scoped>
.l-search-list-item:has(+ .l-search-list-empty) {
  margin-bottom: 0;
}
</style>