<template>
    <a 
        v-if="props.href"
        :href="props.href" 
        class="l-button flex items-center gap-2 cursor-pointer font-semibold transition disabled:bg-slate-200 disabled:text-slate-500 disabled:cursor-not-allowed" 
        :class="[themeClasses, pharos.getStaticClass('Button')]" 
    >
        <slot></slot>
    </a>

    <button
        v-else
        type="button"
        :class="[themeClasses, pharos.getStaticClass('Button')]" 
        class="l-button flex items-center gap-2 cursor-pointer font-semibold transition disabled:bg-slate-200 disabled:text-slate-500 disabled:cursor-not-allowed">
        <slot></slot>
    </button>
</template>

<script setup>
import { inject, computed } from 'vue'

const props = defineProps({
    href: String,
    color: String,
    variant: String,
    size: {
        type: String,
        default: 'base',
        validator(value) {
            return ['base', 'large', 'small'].includes(value)
        }
    },
    hover: {
        type: Boolean,
        default: true
    },
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
})

const pharos = inject('pharos')

const themeClasses = computed(() => {
    return pharos.getThemeClasses(props, 'Button')
})

</script>