<!-- src/components/badge/Badge.vue -->
<template>
    <Badge
        v-bind="props"
        :class="classes"
    >
         <slot />
    </Badge>
</template>

<script setup lang="ts">
import Badge from '../../primitives/badge/Badge.vue';
import { useComponentClasses } from '../../composables/useComponentClasses';
import { badgeSpecs } from './badgeSpecs';
import type { BasePrimitiveProps, BaseProps } from '../../types';

interface BadgeProps extends BaseProps, BasePrimitiveProps {
    size?: string;
    radius?: string;
}

const props = defineProps<BadgeProps>();

const classes = useComponentClasses(props, badgeSpecs);
</script>
  