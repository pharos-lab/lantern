<template>
    <Avatar :class="classes" :fallback="fallback">
        <slot />
    </Avatar>
</template>

<script setup lang="ts">
import Avatar, { type AvatarPrimitiveProps } from '../../primitives/avatar/Avatar.vue';
import { useComponentClasses } from '../../composables/useComponentClasses';
import { avatarSpecs } from './avatarSpecs';
import type { BaseProps } from '../../types';

interface AvatarProps extends BaseProps, AvatarPrimitiveProps {
    size?: string;
    radius?: string;
}

const props = defineProps<AvatarProps>();
const classes = useComponentClasses(props, avatarSpecs);
</script>