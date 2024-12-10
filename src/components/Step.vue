<template>
    <div v-show="isActive" class="step">
        <slot></slot>
    </div>
</template>

<script setup>
import { inject, computed } from 'vue';

const props = defineProps({
    index: { type: Number, required: true }, // The index of this step
});

const { activeStep } = inject('stepper');

// Determine if this step should be visible
const isActive = computed(() => activeStep.value === props.index);
</script>
