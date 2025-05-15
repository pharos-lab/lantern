<template>
    <FloatingTrigger trigger="click">
        <slot></slot>
    </FloatingTrigger>
</template>

<script setup>
import { FloatingTrigger } from '@/components/floating'
</script>