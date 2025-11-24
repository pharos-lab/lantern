import type { Ref } from 'vue';

export interface AlertContext {
    isVisible: Ref<boolean>;
    dismiss: () => void;
}