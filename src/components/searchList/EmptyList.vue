<template>
    <div class="l-search-list-empty" v-show="!searchList.filteredItems.value.length">
        <slot></slot>
    </div>
</template>

<script setup>
import { inject } from 'vue'

const searchList = inject('searchList')

console.log(searchList);
</script>

<style scoped>
</style>