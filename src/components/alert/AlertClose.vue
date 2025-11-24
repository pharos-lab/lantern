<template>
    <AlertClosePrimitive :class="classes">
        <slot />
    </AlertClosePrimitive>
</template>

<script setup lang="ts">
import AlertClosePrimitive from '../../primitives/alert/AlertClose.vue';
import { useComponentClasses } from '../../composables/useComponentClasses';
import { alertCloseSpecs } from './alertSpecs';
import type { BasePrimitiveProps } from '../../types';

interface AlertCloseProps extends BasePrimitiveProps {}

const props = defineProps<AlertCloseProps>();

const classes = useComponentClasses(props, alertCloseSpecs);
</script>