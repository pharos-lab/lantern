<template>
    <FloatingContent>
        <SearchList>
            <SearchListInput placeholder="search..."></SearchListInput>
            <SearchListItems class="space-y-2 rounded border p-2">
                <slot></slot>
            </SearchListItems>
        </SearchList>
    </FloatingContent>
</template>

<script setup>
import { FloatingContent } from '@/components/floating'
import { SearchList, SearchListInput, SearchListItems } from '@/components/searchList'
</script>