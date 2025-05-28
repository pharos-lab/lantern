import { ref } from 'vue'

const toasts = ref([])

export function useToast(options = {}) {

    const duration = options.duration || 3

    function toast(data) {
        const id = Date.now() + Math.random()
        toasts.value.push({
            id,
            ...data
        })

        setTimeout(() => removeToast(id), duration * 1000)
    }

    function removeToast(id) {
        toasts.value = toasts.value.filter(toast => toast.id !== id)
    }
    return { toasts, toast }
}