<template>
    <CollapsibleContent :class="[pharos.getStaticClass('AccordionItemContent')]">
        <slot></slot>
    </CollapsibleContent>
</template>

<script setup>
import { inject } from 'vue'
import { CollapsibleContent } from '@/components/collapsible';

const pharos = inject('pharos')
</script>

<style scoped>

</style>