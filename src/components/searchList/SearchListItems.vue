<template>
   <ul class="l-search-list-items overflow-hidden border">
      <slot v-for="item in filteredItems" :item="item"></slot>

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

<style scoped>
.l-search-list-items > .l-search-list-item:has(+ .search-list-empty) {
  margin-bottom: 0;
}
</style>