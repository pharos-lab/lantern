<template>
    <div 
        class="l-toast shadow p-4"
        :class="[themeClasses, pharos.getStaticClass('Toast')]"
        >
        <X @click="() => removeToast(props.toast.id)" class="float-right"></X>
        <slot></slot>
    </div>
</template>

<script setup>
import { X } from 'lucide-vue-next';
import { inject, computed } from 'vue'
import { useToast } from '@/composables/useToast.js'

const { removeToast } = useToast()

const props = defineProps({
    toast: Object
})

const pharos = inject('pharos')
const toaster = inject('toaster')

const themeClasses = computed(() => {
    return pharos.getThemeClasses(toaster.props, 'Toast')
})
</script>

<style scoped>


</style>