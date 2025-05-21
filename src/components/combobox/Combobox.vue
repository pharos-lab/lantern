<template>
    <Floating class="l-combobox">
        <FloatingTrigger v-if="props.placeholder">
            <Button :color="props.color">
                {{ model[props.displayValue] || props.placeholder || 'Open me!' }}
                <ChevronsUpDown class="size-5"></ChevronsUpDown>
            </Button>
        </FloatingTrigger>
        <slot></slot>
    </Floating>
</template>

<script setup>
import { provide, ref } from 'vue'
import { Floating, FloatingTrigger } from '@/components/floating'
import { ChevronsUpDown } from 'lucide-vue-next';

const model = defineModel()
const active = ref()

const props = defineProps({
    displayValue: {
        type: String,
        default: 'label'
    },
    placeholder: String,
    color: {
        type: String,
        default: 'default'
    },
    variant: {
        type: String,
        default: 'base',
        validator(value) {
            return ['base', 'outline', 'light', 'text'].includes(value)
        }
    },
    items: Array,
    unstyle: {
        type: Boolean,
        default: false
    },
})

provide('combobox', {
    model, props, active
})
</script>

<style scoped>

</style>