<template>
   <ul class="l-search-list-items overflow-hidden border">
      <slot 
        v-for="item in filteredItems" 
        :item="item"
        :key="item"
      ></slot>

      <component :is="searchList.empty" v-show="searchList.empty && filteredItems"></component>
    </ul>
</template>

<script setup>
import { inject, computed } from 'vue'
const searchList = inject('searchList')

const filteredItems = computed(() => {
  const query = searchList.model.value?.toLowerCase() || ''
  const filtered = searchList.props.items.filter(item => item.label.toLowerCase().includes(query))
  return filtered
})

</script>