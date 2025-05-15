<template>
    <SearchListItem :item="props.item" @click="combobox.model.value = item" class="l-combobox-item">
        <slot></slot>
    </SearchListItem>
</template>

<script setup>
import { inject } from 'vue'
import { SearchListItem } from '@/components/searchList';

const props = defineProps({
    item: Object
})

const combobox = inject('combobox')
</script>

<style scoped>

</style>