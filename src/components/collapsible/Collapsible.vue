<template>
    <div class="l-collapsible overflow-hidden" :class="[themeClasses, pharos.getStaticClass('Collapsible')]" :data-expended="isOpen">
        <slot></slot> 
    </div>
</template>
  
<script setup>
import { provide, ref, inject, computed } from 'vue'

const props = defineProps({
    color: String,
    variant: String,
    rounded: {
        type: String,
        default: 'medium',
        validator(value) {
            return ['medium', 'none', 'large', 'full'].includes(value)
        }
    },
    shadow: {
        type: Boolean,
        default: false
    },
    unstyle: {
        type: Boolean,
        default: false
    },
    icons: {
        type: Array,
        default: ['Minus', 'Close']
    },
    icon: {
        type: Boolean,
        default: true
    },
    open: {
        type: Boolean,
        default: false
    }
})

const pharos = inject('pharos')

const themeClasses = computed(() => {
    return pharos.getThemeClasses(props, 'collapsible')
})

const isOpen = ref(props.open)

const toggle = () => {
    isOpen.value = !isOpen.value
}

provide('collapsible', {
    isOpen,
    toggle,
    icons: props.icons,
    icon: props.icon
})
</script>
  