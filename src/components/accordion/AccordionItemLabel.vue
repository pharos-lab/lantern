<template>
    <CollapsibleLabel v-bind="accordion.props">
        <slot></slot>
    </CollapsibleLabel>
</template>

<script setup>
import { inject } from 'vue';
import { CollapsibleLabel } from '@/components/collapsible';

const accordion = inject('accordion')
</script>

<style scoped>
</style>