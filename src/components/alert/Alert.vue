<template>
    <Transition>
        <div class="l-alert" :class="[themeClasses, pharos.theme.padding]" v-show="isOpen">
            <X 
                class="float-right cursor-pointer rounded"
                :class="[pharos.theme.colors?.[props.color]?.[props.variant]?.hover]"
                v-if="props.dismissible" 
                @click="isOpen = false"
            ></X>
            <slot></slot>
        </div>
    </Transition>
</template>

<script setup>
import { inject, computed, ref } from 'vue'
import { X } from 'lucide-vue-next'


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
    dismissible: {
        type: Boolean,
        default: true
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

const isOpen = ref(true)

const themeClasses = computed(() => {
    return pharos.getThemeClasses(props, 'alert')
})
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>