<template>
    <div 
        class="l-alert"
        v-show="isVisible"   
        :role="props.role || 'alert'"
        :aria-hidden="!isVisible ? 'true' : undefined"
        :data-state="state" 
    >
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { computed, provide, type HTMLAttributes } from 'vue';
import type { BasePrimitiveProps } from '../../types';
import type { AlertContext } from '../../types/components'
import { ALERT_KEY } from '../../utils/keys';
import { useAlert } from '../../composables/useAlert'

interface AlertPrimitiveProps extends BasePrimitiveProps {
    role?: HTMLAttributes['role'];
    duration?: number;
}

const props = defineProps<AlertPrimitiveProps>();

const emit = defineEmits<{
    dismiss: []
}>();

const { isVisible, dismiss: dismissAlert } = useAlert({
    duration: props.duration,
    onDismiss: () => emit('dismiss')
});

const state = computed(() => {
    return isVisible.value ? 'open' : 'closed';
});

provide<AlertContext>(ALERT_KEY, {
    isVisible,
    dismiss: dismissAlert
});
</script>