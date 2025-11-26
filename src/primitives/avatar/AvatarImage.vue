<template>
    <img
        :src="src"
        :alt="alt"
        class="l-avatar-image w-full w-10"
        @error="context?.onError"
        v-show="!context?.showFallback.value"
    />
</template>

<script setup lang="ts">
import { inject } from 'vue';
import type { AvatarContext } from '../../types/components';
import { AVATAR_KEY } from '../../utils/keys';
import type { BasePrimitiveProps } from '../../types';

export interface AvatarImagePrimitiveProps extends BasePrimitiveProps {
    src: string;
    alt: string;
}

defineProps<AvatarImagePrimitiveProps>();

const context = inject<AvatarContext>(AVATAR_KEY);
</script>