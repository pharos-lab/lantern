<template>
    <div class="inline-block overflow-hidden" :class="[themeClasses]">
        <img :src="props.src" :alt="props.alt" v-if="props.src">
        <p v-else class="p-2 font-semibold">{{ props.fallback }}</p>
    </div>
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
    src: String,
    alt: String,
    unstyle: {
        type: Boolean,
        default: false
    },
    aspect: {
        type: String,
        default: 'circle',
        validator(value) {
            ['circle', 'square'].includes(value)
        }
    },
    fallback: String
})

const pharos = inject('pharos')

const themeClasses = computed(() => {
    return pharos.getThemeClasses(props, 'avatar')
})
</script>

<style scoped>

</style>