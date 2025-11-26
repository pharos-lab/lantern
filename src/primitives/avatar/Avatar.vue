<template>
    <span class="l-avatar">
        <slot />
        
        <!-- Auto fallback if prop provided and no fallback slot -->
        <span 
            v-show="!hasFallbackSlot && fallback && showFallback" 
            class="l-avatar-fallback"
        >
            {{ fallback }}
        </span>
    </span>
</template>

<script setup lang="ts">
import { provide, useSlots } from 'vue';
import type { BasePrimitiveProps } from '../../types';
import type { AvatarContext } from '../../types/components';
import { useAvatar } from '../../composables/useAvatar';
import { AVATAR_KEY } from '../../utils/keys';

interface AvatarPrimitiveProps extends BasePrimitiveProps {
    fallback?: string;
}

defineProps<AvatarPrimitiveProps>();

const slots = useSlots();


const { imageError, showFallback, onError } = useAvatar();

provide<AvatarContext>(AVATAR_KEY, {
    imageError,
    showFallback,
    onError
});

const hasFallbackSlot = !!slots.fallback;
</script>