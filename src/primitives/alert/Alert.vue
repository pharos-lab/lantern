<template>
    <div 
        class="l-alert"
        v-show="isVisible"   
        :role="props.role || 'alert'"
        :aria-hidden="!isVisible ? 'true' : undefined"
        :data-state="state" 
    >
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, provide, ref, type HTMLAttributes } from 'vue';
import type { BasePrimitiveProps } from '../../types';
import { ALERT_KEY } from '../../utils/keys'

interface AlertPrimitiveProps extends BasePrimitiveProps {
    role?: HTMLAttributes['role']
    duration?: number 
}

const props = defineProps<AlertPrimitiveProps>()

const isVisible = ref(true)

const state = computed(() => {
    return isVisible.value ? 'open' : 'closed'
})

const setVisible = (value: boolean) => {
    isVisible.value = value
}

provide(ALERT_KEY, { isVisible, setVisible })

onMounted(() => {
    if (props.duration) {
        setTimeout(() => {
            isVisible.value = false
        }, props.duration)
    }
})
</script>