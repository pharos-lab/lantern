<template>
    <div class="l-accordion divide-y" :class="classes">
        <slot></slot>
    </div>
</template>

<script setup>
import { provide, computed, inject } from 'vue';

const props = defineProps({
    color: {
        type: String,
        default: 'secondary'
    },
    variant: {
        type: String,
        default: 'base',
        validator(value) {
            return ['light', 'dark', 'base', 'outline', 'text'].includes(value)
        }
    },
    divide: {type: Boolean, default: true},
    unstyled: { type: Boolean, default: false }
});


// Provide state and toggle function to child components
provide('accordion', {
    accordionProps: props
});

const getClasses = inject('getClasses')

const classes = computed(() => {
    if (props.unstyled) return 
    
    return getClasses(props, 'accordion')
})
</script>