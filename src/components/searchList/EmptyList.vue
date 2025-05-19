<template>
    <li class="l-search-list-empty">
        <slot></slot>
    </li>
</template>

<script setup>
defineOptions({ name: 'EmptyList' })
</script>

<style scoped>
.l-search-list-empty:not(:only-child) {
    display: none;
}
</style>