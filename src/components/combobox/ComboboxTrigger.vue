<template>
    <FloatingTrigger trigger="click" class="l-combobox-trigger cursor-pointer w-full" :class="[themeClasses, pharos.getStaticClass('ComboboxTrigger')]">
        <div v-show="combobox.model.value[combobox.props.displayValue]">
            {{ combobox.model.value[combobox.props.displayValue] }}
        </div>
        <div v-show="!combobox.model.value[combobox.props.displayValue]">
            <slot></slot>
        </div>
    </FloatingTrigger>
</template>

<script setup>
import { inject, computed } from 'vue'
import { FloatingTrigger } from '@/components/floating'

const combobox = inject('combobox')
const pharos = inject('pharos')

const themeClasses = computed(() => {
    return pharos.getThemeClasses({...combobox.props, hover: true}, 'Combobox')
})
</script>