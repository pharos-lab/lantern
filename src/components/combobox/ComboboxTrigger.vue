<template>
    <FloatingTrigger trigger="click" class="l-combobox-trigger">
        <slot></slot>
    </FloatingTrigger>
</template>

<script setup>
import { FloatingTrigger } from '@/components/floating'
</script>