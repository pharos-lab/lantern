<template>
    <Alert
        :class="classes"
        :role="role"
        :duration="duration"
        @dismiss="emit('dismiss')"
    >
        <slot />
    </Alert>
</template>

<script setup lang="ts">
import Alert from '../../primitives/alert/Alert.vue';
import { useComponentClasses } from '../../composables/useComponentClasses';
import { alertSpecs } from './alertSpecs';
import type { BasePrimitiveProps } from '../../types';
import { computed, type HTMLAttributes } from 'vue';

interface AlertProps extends BasePrimitiveProps {
    size?: string;
    radius?: string;
    role?: HTMLAttributes['role'];
    duration?: number;
}

const props = defineProps<AlertProps>();

const emit = defineEmits<{
    dismiss: []
}>();

const classes = computed(() => useComponentClasses(props, alertSpecs))</script>