<template>
    <div class="l-card overflow-hidden" :class="classes">
        <slot></slot>   
    </div>
</template>

<script setup>
import { inject, computed, } from 'vue'

const props = defineProps({
    color: {
        type: String,
        default: 'secondary'
    },
    variant: {
        type: String,
        default: 'light',
        validator(value) {
            return ['light', 'dark', 'base', 'outline', 'text'].includes(value)
        }
    },
    rounded: {
        type: String,
        default: 'base'
    },
    hover: {
        type: Boolean,
        default: false
    },
    shadow: {
        type: Boolean,
        default: true
    },
    unstyled: { type: Boolean, default: false }
})

const getClasses = inject('getClasses')

const classes = computed(() => {
    if (props.unstyled) return 

    return getClasses(props, 'card')
})
</script>