import { ref, onMounted } from 'vue';

export interface UseAlertProps {
    duration?: number;
    onDismiss?: () => void;
}

export function useAlert(props: UseAlertProps = {}) {
    const isVisible = ref(true);

    const dismiss = () => {
        isVisible.value = false;
        props.onDismiss?.();
    };

    // Auto-dismiss if duration is set
    onMounted(() => {
        if (props.duration && props.duration > 0) {
            setTimeout(() => {
                dismiss();
            }, props.duration);
        }
    });

    return {
        isVisible,
        dismiss
    };
}