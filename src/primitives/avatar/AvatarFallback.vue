<template>
    <span v-if="show" class="l-avatar-fallback">
        <slot />
    </span>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue';
import type { BasePrimitiveProps } from '../../types';
import type { AvatarContext } from '../../types/components';
import { AVATAR_KEY } from '../../utils/keys';

interface AvatarFallbackPrimitiveProps extends BasePrimitiveProps {}

defineProps<AvatarFallbackPrimitiveProps>();

const context = inject<AvatarContext>(AVATAR_KEY);

const show = computed(() => context?.showFallback.value ?? true);
</script>