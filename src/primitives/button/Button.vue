<template>
    <button
        :type="props.type || 'button'"
        :disabled="props.disabled || props.loading"
        :aria-disabled="props.disabled ? 'true' : undefined"
        :aria-busy="props.loading ? 'true' : undefined"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue';
import type { BasePrimitiveProps } from '../../types';

export interface ButtonPrimitiveProps extends BasePrimitiveProps {
    disabled?: ButtonHTMLAttributes["disabled"]
    loading?: boolean
    type?: 'button' | 'submit' | 'reset'
}

const props = defineProps<ButtonPrimitiveProps>();
</script>