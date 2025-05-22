<template>
    <Collapsible v-bind="{...accordion.props, rounded: 'none', shadow: false}" class="l-accordion-item">
        <slot></slot>
    </Collapsible>
</template>
  
<script setup>
import { inject } from 'vue'
import { Collapsible }  from '@/components/collapsible';

const accordion = inject('accordion')
</script>
  