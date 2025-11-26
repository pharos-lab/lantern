<template>
    <AvatarImage :src="src" :alt="alt" :class="classes" />
</template>

<script setup lang="ts">
import AvatarImage from '../../primitives/avatar/AvatarImage.vue';
import { useComponentClasses } from '../../composables/useComponentClasses';
import { avatarImageSpecs } from './avatarSpecs';
import type { BasePrimitiveProps } from '../../types';

interface AvatarImageProps extends BasePrimitiveProps {
    src: string;
    alt: string;
}

const props = defineProps<AvatarImageProps>();
const classes = useComponentClasses(props, avatarImageSpecs);
</script>