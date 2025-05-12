<template>
    <Collapsible v-bind="{...accordion.props, rounded: 'none', shadow: false}">
        <slot></slot>
    </Collapsible>
</template>
  
<script setup>
import { inject } from 'vue'
import Collapsible from './Collapsible.vue';

const accordion = inject('accordion')
</script>
  