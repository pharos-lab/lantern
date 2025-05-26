<template>
    <FloatingContent class="l-combobox-items" :class="[pharos.getStaticClass('ComboboxContent')]">
        <SearchList class="" :color="combobox.props.color" :items="combobox.props.items" :toSearch="combobox.props.displayValue">
            <SearchListInput placeholder="search..." ref="input"></SearchListInput>
            <slot></slot>
        </SearchList>
    </FloatingContent>
</template>

<script setup>
import { inject, nextTick, useTemplateRef, watch } from 'vue'
import { FloatingContent } from '@/components/floating'
import { SearchList, SearchListInput } from '@/components/searchList'

const combobox = inject('combobox')
const floating = inject('floating')
const pharos = inject('pharos')

const input = useTemplateRef('input')

watch(floating.isOpen, async(state) => {
    if (state == true) {
        await nextTick()
        input.value?.input?.focus()
    }
})
</script>