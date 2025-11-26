<template>
    <div class="l-card">
        <slot />
    </div>
</template>

<script setup lang="ts">
import type { BasePrimitiveProps } from '../../types'

export interface CardPrimitiveProps extends BasePrimitiveProps {}

defineProps<CardPrimitiveProps>()
</script>
