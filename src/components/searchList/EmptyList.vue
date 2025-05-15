<template>
    <li class="l-search-list-empty">
        <slot></slot>
    </li>
</template>

<script setup>

</script>

<style scoped>
.l-search-list-empty:not(:first-child) {
    display: none;
}
</style>