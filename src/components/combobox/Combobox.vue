<template>
    <Floating class="l-combobox">
        <FloatingTrigger v-if="props.placeholder">
            <Button :color="props.color">
                {{ model.label || props.placeholder || 'Open me!' }}
                <ChevronsUpDown class="size-5"></ChevronsUpDown>
            </Button>
        </FloatingTrigger>
        <slot></slot>
    </Floating>
</template>

<script setup>
import { provide, inject, computed } from 'vue'
import { Floating, FloatingTrigger } from '@/components/floating'
import { ChevronsUpDown } from 'lucide-vue-next';

const model = defineModel()

const props = defineProps({
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
    unstyle: {
        type: Boolean,
        default: false
    },
})

provide('combobox', {
    model, props
})

const pharos = inject('pharos')

const themeClasses = computed(() => {
    return pharos.getThemeClasses(props, 'button')
})
</script>

<style scoped>

</style>