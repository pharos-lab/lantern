<template>
    <div class="l-search-list inline-block space-y-2">
        <slot></slot>      
    </div>
</template>

<script setup>
import { inject, computed, provide } from 'vue'

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
})
</script>

<style scoped>

</style>