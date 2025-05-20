<template>
    <FloatingTrigger trigger="click" class="l-combobox-trigger cursor-pointer w-full">
        <div v-show="combobox.model.value[combobox.props.displayValue]">
            {{ combobox.model.value[combobox.props.displayValue] }}
        </div>
        <div v-show="!combobox.model.value[combobox.props.displayValue]">
            <slot></slot>
        </div>
    </FloatingTrigger>
</template>

<script setup>
import { inject } from 'vue'
import { FloatingTrigger } from '@/components/floating'

const combobox = inject('combobox')
console.log(combobox.model.value[combobox.props.displayValue]);


</script>