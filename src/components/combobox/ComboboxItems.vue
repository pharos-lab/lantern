<template>
    <FloatingContent class="l-combobox-items">
        <SearchList>
            <SearchListInput placeholder="search..."></SearchListInput>
            <SearchListItems class="">
                <slot></slot>
            </SearchListItems>
        </SearchList>
    </FloatingContent>
</template>

<script setup>
import { FloatingContent } from '@/components/floating'
import { SearchList, SearchListInput, SearchListItems } from '@/components/searchList'
</script>