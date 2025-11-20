<template>
    <Button :class="classes" v-bind="props">
        <slot></slot>
    </Button>
</template>

<script setup lang="ts">
import type  { ButtonPrimitiveProps } from '../../primitives/button/Button.vue';
import { buttonSpecs } from './buttonSpecs.js'
import { useComponentClasses } from '../../composables/useComponentClasses.js';
import Button from '../../primitives/button/Button.vue';


interface ButtonProps extends ButtonPrimitiveProps {
    size?: string
    radius?: string
}
const props = defineProps<ButtonProps>()
const classes = useComponentClasses(props, buttonSpecs)
</script>