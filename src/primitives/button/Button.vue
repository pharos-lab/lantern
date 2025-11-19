<template>
    <button
        :type="props.type || 'button'"
        :disabled="props.disabled"
        :aria-disabled="props.disabled ? 'true' : undefined"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue';
import type { BaseProps } from '../../types';

interface ButtonProp extends BaseProps {
    disabled: ButtonHTMLAttributes["disabled"]
    type: 'button' | 'submit' | 'reset'
}


const props = defineProps<ButtonProp>();
</script>