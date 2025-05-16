<template>
   <ul class="l-search-list-items overflow-hidden">
        <slot></slot>
    </ul>
</template>

<script setup>


</script>

<style scoped>
.l-search-list-items > .l-search-list-item:has(+ .search-list-empty) {
  margin-bottom: 0;
}
</style>