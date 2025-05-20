<template>
    <SearchListItems class="space-y-2" v-slot="slotProps">
        <slot v-bind="slotProps"></slot>
    </SearchListItems>
</template>

<script setup>
import { SearchListItems } from '@/components/searchList'
</script>