<template>
    <div class="l-accordion-item">
        <!-- Header -->
        <component
            :is="$slots.default()[0]"
            v-if="$slots.default()[0] && $slots.default().length > 1"
            @click="toggle"
        ></component>

        <div 
            class="l-accordion-header cursor-pointer font-semibold p-4"
            :class="{ 'text-primary': isExpanded }"
            @click="toggle"
            v-if="props.label"
        >
            {{ props.label }}
        </div>

        <!-- Collapsible Content -->
        <transition name="accordion-item">
            <div 
                class="l-accordion-content overflow-hidden p-4"
                v-show="isExpanded"
                :class="subBackgroundClass"
            >
                <component
                    :is="$slots.default()[1]"
                    v-if="$slots.default()[1] && $slots.default()[1]"
                ></component>
                <slot v-else></slot>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { inject, computed, ref } from 'vue';

const props = defineProps({
    label: { type: String, default: '' },
});

const { accordionProps } = inject('accordion');

const isExpanded = ref(false)

const getClass = inject('getClass')

const toggle = () => isExpanded.value = !isExpanded.value;

const subBackgroundClass= computed(() => {
    if (accordionProps.unstyled) return 

    return getClass(accordionProps, 'accordion', 'subBackground')
})
</script>

<style scoped>
.accordion-item-enter-active,
.accordion-item-leave-active {
  transition: all 0.5s ease;
}

.accordion-item-enter-from,
.accordion-item-leave-to {
  max-height: 0;
}

.accordion-item-enter-to,
.accordion-item-leave-from {
  max-height: 100vh;
}


</style>