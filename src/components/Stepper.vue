<template>
    <div class="l-stepper relative" :class="classes">
        <slot></slot>

        <div class="navigations pt-8 flex justify-between px-4">
            <Button :color="props.color" variant="light" v-show="activeStep > 0" @click="prevStep">Prev</Button>
            <div class=""></div>
            <Button :color="props.color" v-show="activeStep < stepsCount" @click="nextStep">Next</Button>
        </div>
    </div>
</template>

<script setup>
import { ref, provide, inject, useSlots, computed } from 'vue';
import Button from './Button.vue'

const props = defineProps({
    active: String,
    color: {
        type: String,
        default: 'primary'
    },
    variant: {
        type: String,
        default: 'base',
        validator(value) {
            return ['light', 'dark', 'base', 'outline', 'text'].includes(value)
        }
    },
    unstyled: { type: Boolean, default: false }
})

const stepsCount = ref(useSlots().default().length)

const activeStep = ref(props.active || 0);

const setActiveStep = (index) => {
    activeStep.value = index;
};

provide('stepper', { activeStep, setActiveStep, propsStep: props, stepsCount });

const prevStep = () => {
    activeStep.value--
}

const nextStep = () => {
    activeStep.value++
}


const getClasses = inject('getClasses')

const classes = computed(() => {
    if (props.unstyled) return 
    
    return getClasses(props, 'stepper', {exclude: ['subBackground', 'padding']})
})
</script>
