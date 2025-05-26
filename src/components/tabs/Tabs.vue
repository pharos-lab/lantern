<template>
    <div class="l-tabs flex" :class="[pharos.getStaticClass('Tabs'), orientationClass]">
        <slot></slot>
    </div>
</template>

<script setup>
import { ref, provide, inject, computed } from 'vue'

const props = defineProps({
    href: String,
    color: String,
    variant: String,
    unstyle: {
        type: Boolean,
        default: false
    },
    hover: {
        type: Boolean,
        default: true
    },
    orientation: {
        type: String,
        default: 'vertical',
        validator(value) {
            return ['horizontal', 'vertical'].includes(value)
        }
    }
})

const active = ref("1")

const orientationClass = computed(() => {
    return props.orientation == 'vertical' ? 'flex-col' : 'flex-row'
})
provide('tabs', { active, props })

const pharos = inject('pharos')
</script>
  