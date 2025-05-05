<template>
    <details class="l-accordion" :open="props.open" :class="[themeClasses]">
        <slot></slot>
    </details>
</template>

<script setup>
import { inject, computed } from 'vue'

const props = defineProps({
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
    open: {
        type: Boolean,
        default: false
    },
    unstyle: {
        type: Boolean,
        default: false
    },
})

const pharos = inject('pharos')

const themeClasses = computed(() => {
    return pharos.getThemeClasses(props, 'accordion')
})

console.log(themeClasses.value)
</script>

<style scoped>
details {

  @media (prefers-reduced-motion: no-preference) {
    interpolate-size: allow-keywords;
  }

  &::details-content {
    opacity: 0;
    block-size: 0;
    overflow-y: clip;
    transition: content-visibility .5s allow-discrete, opacity .5s, block-size .5s;
  }

  &[open]::details-content {
    opacity: 1;
    block-size: auto;
  }
}
</style>