<template>
    <Floating class="l-combobox">
        <FloatingTrigger v-if="props.placeholder">
            <Button>
                {{ model.label || props.placeholder || 'Open me!' }}
            </Button>
        </FloatingTrigger>
        <slot></slot>
    </Floating>
</template>

<script setup>
import { ref, provide } from 'vue'
import { Floating, FloatingTrigger } from '@/components/floating'

const model = defineModel()

const props = defineProps({
    placeholder: String
})

provide('combobox', {
    model
})

// const props = defineProps({
//     color: {
//         type: String,
//         default: 'default'
//     },
//     variant: {
//         type: String,
//         default: 'base',
//         validator(value) {
//             return ['base', 'outline', 'light', 'text'].includes(value)
//         }
//     },
//     unstyle: {
//         type: Boolean,
//         default: false
//     },
// })

// const pharos = inject('pharos')

// const themeClasses = computed(() => {
//     return pharos.getThemeClasses(props, 'button')
// })
</script>

<style scoped>

</style>