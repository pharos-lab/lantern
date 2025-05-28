<template>
    <div 
        class="l-toaster space-y-2"
        :class="[pharos.getStaticClass('Toaster')]"
    >
        <slot v-for="toast in toasts" :key="toast.id" v-bind="toast">{{ toast }}</slot>
    </div>
</template>

<script setup>
import { inject, provide } from 'vue'
import { useToast } from '@/composables/useToast.js'

const pharos = inject('pharos')

const { toasts } = useToast()

const props = defineProps({
    color: String,
    variant: String,
    unstyle: {
        type: Boolean,
        default: false
    },
})

provide('toaster', { props })

</script>

<style scoped>

</style>