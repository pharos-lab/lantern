<template>
    <summary class="list-none l-accordion-label flex justify-between cursor-pointer" :class="pharos.theme.padding">
        <slot></slot>
        
        <template  v-if="props.icon">
            <Transition mode="out-in">
                <Plus v-if="isOpen"></Plus>
                <Minus v-else></Minus>
            </Transition>
        </template>
    </summary>
</template>

<script setup>
import { inject, computed } from 'vue'
import { Minus, Plus } from 'lucide-vue-next';

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
    unstyle: {
        type: Boolean,
        default: false
    },
    icon: {
        type: Boolean,
        default: true
    }
})

const pharos = inject('pharos')
const isOpen = inject('isOpen')

const themeClasses = computed(() => {
    return pharos.getThemeClasses(props, 'button')
})
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>