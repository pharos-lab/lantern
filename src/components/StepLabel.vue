<template> 
    <div class="l-step-label px-3 py-2 grow flex gap-4 items-center cursor-pointer" @click="activateStep" :class="[{'font-semibold': isActive}]">
        <div class="rounded-full p-2 border-2 size-7 flex justify-center items-center">{{ props.index +1 }}</div>
        <slot></slot>

        <div class="lbar grow border-2" :class="{'border-b-2 border-current': isCompleted}"></div>
    </div>
</template>
  
<script setup>
import { inject, computed } from 'vue';

const { activeStep, setActiveStep } = inject('stepper');

const props = defineProps({
    index: { type: Number, required: true },
});

const isActive = computed(() => activeStep.value === props.index);
const isCompleted = computed(() => activeStep.value > props.index);

const activateStep = () => {
    setActiveStep(props.index);
}
</script>
  
