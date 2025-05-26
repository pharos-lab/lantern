<template>
    <SearchListItems class="" v-slot="slotProps" :class="[pharos.getStaticClass('ComboboxItems')]">
        <slot v-bind="slotProps"></slot>
    </SearchListItems>
</template>

<script setup>
import { inject } from 'vue';
import { SearchListItems } from '@/components/searchList'

const pharos = inject('pharos')
</script>