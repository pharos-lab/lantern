<template>
    <div class="l-stepper" :class="classes">
        <slot></slot>
    </div>
</template>

<script setup>
import { ref, provide, inject, useSlots, computed } from 'vue';

const props = defineProps({
    active: String,
    color: {
        type: String,
        default: 'secondary'
    },
    variant: {
        type: String,
        default: 'text',
        validator(value) {
            return ['light', 'dark', 'base', 'outline', 'text'].includes(value)
        }
    },
    unstyled: { type: Boolean, default: false }
})

// get the name of the first tab
const defaultActiveName = useSlots().default?.()[0]?.children?.default?.()[0]?.props?.index
const stepsCount = ref(useSlots().default().length)

const activeStep = ref(props.active || defaultActiveName);

const setActiveStep = (index) => {
    activeStep.value = index;
};

provide('stepper', { activeStep, setActiveStep, propsStep: props, stepsCount });


const getClasses = inject('getClasses')

const classes = computed(() => {
    if (props.unstyled) return 
    
    return getClasses(props, 'stepper', {exclude: ['subBackground', 'padding']})
})
</script>
