<template>
   <ul class="l-search-list-items overflow-hidden" v-show="searchList.filteredItems.value.length">
      <slot 
        v-for="item in searchList.filteredItems.value" 
        :item="item"
        :key="item"
      ></slot>
    </ul>
</template>

<script setup>
import { inject } from 'vue'
const searchList = inject('searchList')
</script>