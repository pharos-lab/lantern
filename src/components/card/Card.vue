<template>
    <Card v-bind="props" :class="classes">
        <slot />
    </Card>
</template>

<script setup lang="ts">
import Card, { type CardPrimitiveProps } from '../../primitives/card/Card.vue'
import { useComponentClasses } from '../../composables/useComponentClasses'
import { cardSpecs } from './cardSpecs'
import type { BaseProps } from '../../types'

interface CardProps extends BaseProps, CardPrimitiveProps {
    radius?: string
    shadow?: string
}

const props = defineProps<CardProps>()

const classes = useComponentClasses(props, cardSpecs)
</script>
