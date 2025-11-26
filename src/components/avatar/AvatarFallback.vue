<template>
    <AvatarFallback 
        :class="classes"
        v-bind="props"
    >
        <slot />
    </AvatarFallback>
</template>

<script setup lang="ts">
import AvatarFallback, { type  AvatarFallbackPrimitiveProps } from '../../primitives/avatar/AvatarFallback.vue';
import { useComponentClasses } from '../../composables/useComponentClasses';
import { avatarFallbackSpecs } from './avatarSpecs';
import type { BaseProps } from '../../types';

interface AvatarFallbackProps extends BaseProps, AvatarFallbackPrimitiveProps {}

const props = defineProps<AvatarFallbackProps>();
const classes = useComponentClasses(props, avatarFallbackSpecs);
</script>