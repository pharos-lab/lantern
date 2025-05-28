import { ref, nextTick } from 'vue'

const toasts = ref([])

export function useToast(options = {}) {

    const duration = options.duration || 5

    function toast(data) {
        const id = Date.now() + Math.random()
        toasts.value.push({
            id,
            ...data
        })

        setTimeout(() => removeToast(id), duration * 1000)
    }

    function removeToast(id) {
        const index = toasts.value.findIndex(t => t.id === id)
        if (index !== -1) {
            toasts.value.splice(index, 1)
        }
    }

    return { toasts, toast, removeToast }
}