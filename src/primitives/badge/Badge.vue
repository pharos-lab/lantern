<!-- src/primitives/badge/Badge.vue -->
<template>
    <span
      class="l-badge"
      :role="props.role || 'badge'"
    >
        <slot />
    </span>
</template>

<script setup lang="ts">
import { type HTMLAttributes } from 'vue';
import type { BasePrimitiveProps } from '../../types';


interface BadgePrimitiveProps extends BasePrimitiveProps {
    role?: HTMLAttributes['role'];
}

const props = defineProps<BadgePrimitiveProps>();
</script>
  