<template>
    <CollapsibleLabel v-bind="accordion.props" :class="[pharos.getStaticClass('AccordionItemLabel')]">
        <slot></slot>
    </CollapsibleLabel>
</template>

<script setup>
import { inject } from 'vue';
import { CollapsibleLabel } from '@/components/collapsible';

const pharos = inject('pharos')

const accordion = inject('accordion')
</script>

<style scoped>
</style>