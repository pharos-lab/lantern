<template>
    <span class="l-avatar">
        <slot />
    </span>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import type { BasePrimitiveProps } from '../../types';
import type { AvatarContext } from '../../types/components';
import { useAvatar } from '../../composables/useAvatar';
import { AVATAR_KEY } from '../../utils/keys';

export interface AvatarPrimitiveProps extends BasePrimitiveProps {}

defineProps<AvatarPrimitiveProps>();


const { imageError, showFallback, onError } = useAvatar();

provide<AvatarContext>(AVATAR_KEY, {
    imageError,
    showFallback,
    onError
});
</script>