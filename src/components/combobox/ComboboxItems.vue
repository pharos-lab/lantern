<template>
    <SearchListItems class="space-y-2" v-slot="slotProps">
        <slot :item="slotProps.item"></slot>
    </SearchListItems>
</template>

<script setup>
import { SearchList, SearchListInput, SearchListItems } from '@/components/searchList'
import { inject } from 'vue'

const combobox = inject('combobox')
</script>