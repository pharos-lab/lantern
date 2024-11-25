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
                class="l-accordion-content overflow-hidden transition-all duration-300 p-4"
                v-show="isExpanded"
                :class="getClass(accordionProps, 'accordion', 'subBackground')"
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
import { inject, computed } from 'vue';

const props = defineProps({
    label: { type: String, default: '' },
    index: Number
});

const { expandedIndex, toggleItem, accordionProps } = inject('accordion');

const getClass = inject('getClass')

const isExpanded = computed(() => expandedIndex.includes(props.index));
const toggle = () => toggleItem(props.index);
</script>

<style scoped>
.accordion-item-enter-active,
.accordion-item-leave-active {
  transition: max-height .4s ease-in-out, opacity .4s ease-in-out, transform .4s ease-in-out;
}

.accordion-item-enter-from,
.accordion-item-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-5px)
}

.accordion-item-enter-to,
.accordion-item-leave-from {
  max-height: 100%;
  height: 100%;
}


</style>