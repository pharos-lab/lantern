<template>
    <Floating class="l-combobox" :class="[pharos.getStaticClass('Combobox')]">
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
import { provide, ref, inject } from 'vue'
import { Floating, FloatingTrigger } from '@/components/floating'
import { ChevronsUpDown } from 'lucide-vue-next';

const pharos = inject('pharos')
const model = defineModel()
const active = ref()

const props = defineProps({
    displayValue: {
        type: String,
        default: 'label'
    },
    placeholder: String,
    color: String,
    variant: String,
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