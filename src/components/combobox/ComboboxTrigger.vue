<template>
    <FloatingTrigger trigger="click" class="l-combobox-trigger cursor-pointer w-full">
        <div v-show="combobox.model.value.label">
            {{ combobox.model.value.label }}
        </div>
        <div v-show="!combobox.model.value.label">
            <slot></slot>
        </div>
    </FloatingTrigger>
</template>

<script setup>
import { inject, computed } from 'vue'
import { FloatingTrigger } from '@/components/floating'

const combobox = inject('combobox')
console.log(combobox);


</script>