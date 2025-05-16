<template>
    <FloatingContent class="l-combobox-items">
        <SearchList class="bg-white shadow p-1 border border-slate-100 rounded" :color="combobox.props.color">
            <SearchListInput placeholder="search..."></SearchListInput>
            <SearchListItems class="space-y-2">
                <slot></slot>
            </SearchListItems>
        </SearchList>
    </FloatingContent>
</template>

<script setup>
import { FloatingContent } from '@/components/floating'
import { SearchList, SearchListInput, SearchListItems } from '@/components/searchList'
import { inject } from 'vue'

const combobox = inject('combobox')
</script>