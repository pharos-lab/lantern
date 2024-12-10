<template> 
    <div class="l-step-label px-3 py-2 grow flex gap-4 items-center cursor-pointer" @click="activateStep" :class="[hoverClass, {'font-semibold': isActive}]">
        <div class="rounded-full p-2 border-2 size-7 flex justify-center items-center">{{ props.index +1 }}</div>
        <slot></slot>

        <div class="lbar grow border-2" :class="{'border-b-2 border-current': isActive}"></div>
    </div>
</template>
  
<script setup>
import { inject, computed } from 'vue';

const { activeStep, setActiveStep, propsStep } = inject('stepper');

const props = defineProps({
    index: { type: Number, required: true },
});

const isActive = computed(() => activeStep.value === props.index);

const activateStep = () => {
    setActiveStep(props.index);
}

const getClass = inject('getClass')

const hoverClass = computed(() => {
    if (propsStep.unstyled) return 
    
})
</script>
  
