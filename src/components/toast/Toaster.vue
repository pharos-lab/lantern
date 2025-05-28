<template>
    <TransitionGroup
        tag="ul"
        name="toast"
        class="l-toaster gap-2 p-4 flex flex-col absolute bottom-0 right-0 overflow-hidden"
        :class="[pharos.getStaticClass('Toaster')]"
    >
        <li v-for="toast in toasts" :key="toast.id">
            <slot
                v-bind="toast"
                :id="toast.id"
                >
                {{ toast }}
            </slot>
        </li>
    </TransitionGroup>
</template>
  

<script setup>
import { inject, provide } from 'vue'
import { useToast } from '@/composables/useToast.js'

const pharos = inject('pharos')

const { toasts } = useToast()

const props = defineProps({
    color: String,
    variant: String,
    unstyle: {
        type: Boolean,
        default: false
    },
})

provide('toaster', { props })

</script>

<style scoped>
/* scoped dans Toaster.vue ou global dans ton fichier CSS principal */

.toast-move,
.toast-enter-active,
.toast-leave-active {
  transition: all 1s ease;
}

.toast-enter-from, .toast-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.toast-leave-to {
    opacity:0;
    transform: translateX(20px)
}

/* .toast-leave-active {
    position: absolute;
} */
</style>