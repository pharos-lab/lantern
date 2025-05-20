<template>
    <SearchListItem @click="handle(props.item)" class="l-combobox-item">
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
const floating = inject('floating')

const handle = (item) => {
    combobox.model.value = item
    floating.close()
}
</script>

<style scoped>

</style>