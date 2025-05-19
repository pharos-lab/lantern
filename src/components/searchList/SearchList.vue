<template>
    <div class="l-search-list inline-block space-y-2">
        <slot></slot>    
    </div>
</template>

<script setup>
import { provide, computed } from 'vue'

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

const filteredItems = computed(() => {
  const query = model.value?.toLowerCase() || ''
  const filtered = props.items.filter(item => item.label.toLowerCase().includes(query))
  return filtered
})

console.log(filteredItems.value);

provide('searchList', {
    model,
    props,
    filteredItems
})
</script>

<style scoped>

</style>