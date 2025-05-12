<template>
    <Collapsible v-bind="{...props, rounded: 'none'}">
        <slot></slot>
    </Collapsible>
</template>
  
<script setup>
import { inject } from 'vue'
import Collapsible from './Collapsible.vue';

const accordion = inject('accordion')
const {shadow, rounded, ...props } = accordion.props
console.log(props)
</script>
  