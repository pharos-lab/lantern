<template>
    <Card v-bind="props" :class="classes">
        <slot />
    </Card>
</template>

<script setup lang="ts">
import Card from '../../primitives/card/Card.vue'
import { useComponentClasses } from '../../composables/useComponentClasses'
import { cardSpecs } from './cardSpecs'
import type { BasePrimitiveProps, BaseProps } from '../../types'

interface CardProps extends BaseProps, BasePrimitiveProps {
    radius?: string
    shadow?: string
}

const props = defineProps<CardProps>()

const classes = useComponentClasses(props, cardSpecs)
</script>
