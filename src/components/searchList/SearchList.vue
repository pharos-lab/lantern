<template>
    <div class="l-search-list inline-block space-y-2">
        <slot></slot>      
    </div>
</template>

<script setup>
import { useSlots, provide } from 'vue'

const empty = useSlots().default().find(item => {
    return item.type.name?.includes('EmptyList')
})

const props = defineProps({
    color: {
        type: String,
        default: 'default'
    },
    variant: {
        type: String,
        default: 'base',
        validator(value) {
            return ['base', 'outline', 'light', 'text'].includes(value)
        }
    },
    items: Array,
    placeholder: {
        type: String,
    },
    unstyle: {
        type: Boolean,
        default: false
    },
})

const model = defineModel()

provide('searchList', {
    model,
    props,
    empty
})
</script>

<style scoped>

</style>