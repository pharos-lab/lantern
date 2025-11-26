import { ref, computed } from 'vue';

export function useAvatar() {
    const imageError = ref(false);

    const onError = () => {
        imageError.value = true;
    };

    const showFallback = computed(() => imageError.value);
    
    return {
        imageError,
        showFallback,
        onError
    };
}