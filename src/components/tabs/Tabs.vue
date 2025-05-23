<template>
    <div class="l-tabs" :class="pharos.theme.components.Tabs">
        <slot></slot>
    </div>
</template>

<script setup>
import { ref, provide, inject } from 'vue'

const props = defineProps({
    href: String,
    color: {
        type: String,
        default: 'default'
    },
    variant: {
        type: String,
        default: 'plain',
        validator(value) {
            return ['plain', 'outline', 'light', 'text'].includes(value)
        }
    },
    unstyle: {
        type: Boolean,
        default: false
    },
    hover: {
        type: Boolean,
        default: true
    },
})

const active = ref("1")

provide('tabs', { active, props })

const pharos = inject('pharos')
</script>
  