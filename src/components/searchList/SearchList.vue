<template>
    <div class="l-search-list inline-block" :class="pharos.theme.components.SearchList">
        <slot></slot>    
    </div>
</template>

<script setup>
import { provide, computed, inject } from 'vue'

const props = defineProps({
    color: {
        type: String,
        default: 'default'
    },
    variant: {
        type: String,
        default: 'none',
        validator(value) {
            return ['base', 'outline', 'light', 'text', 'none'].includes(value)
        }
    },
    hover: {
        type: Boolean,
        default: true
    },
    items: Array,
    toSearch: {
        type: String,
        default: 'label'
    },
    placeholder: {
        type: String,
    },
    unstyle: {
        type: Boolean,
        default: false
    },
})

const model = defineModel()

const pharos = inject('pharos')

const filteredItems = computed(() => {
  const query = model.value?.toLowerCase() || ''
  const filtered = props.items.filter(item => item[props.toSearch].toLowerCase().includes(query.toLowerCase()))
  return filtered
})

provide('searchList', {
    model,
    props,
    filteredItems
})
</script>

<style scoped>

</style>