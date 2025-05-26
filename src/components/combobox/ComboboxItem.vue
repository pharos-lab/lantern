<template>
    <SearchListItem 
        @click="handle(props.item)" 
        class="l-combobox-item" 
        :class="[active ? themeClass : '', pharos.getStaticClass('ComboboxItem')]"
        :data-selected="active"
    >
        <slot></slot>
    </SearchListItem>
</template>

<script setup>
import { inject, computed } from 'vue'
import { SearchListItem } from '@/components/searchList';

const props = defineProps({
    item: Object
})
const combobox = inject('combobox')
const floating = inject('floating')
const pharos = inject('pharos')

const handle = (item) => {
    const  {key, ref_for, ...itemRest} = item
    combobox.model.value = itemRest
    combobox.active.value = item
    floating.close()
}

const active = computed(() => {
    return combobox.active.value?.[combobox.props.displayValue] == props.item[combobox.props.displayValue]
})



const themeClass = computed(() => {
    return pharos.getThemeClass(combobox.props, 'color', 'comboboxItem')
})
</script>

<style scoped>

</style>