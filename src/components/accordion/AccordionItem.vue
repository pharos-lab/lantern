<template>
    <Collapsible v-bind="{...accordion.props, rounded: 'none', shadow: false}" class="l-accordion-item" :class="[pharos.getStaticClass('AccordionItem')]">
        <slot></slot>
    </Collapsible>
</template>
  
<script setup>
import { inject } from 'vue'
import { Collapsible }  from '@/components/collapsible';

const pharos = inject('pharos')

const accordion = inject('accordion')
</script>
  