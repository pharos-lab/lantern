<template>
    <div class="l-accordion divide-y" :class="classes">
        <template v-for="(child, index) in childComponents" :key="index">
            <component
                :is="child"
                :index="index"
            />
        </template>
    </div>
</template>

<script setup>
import { provide, reactive, useSlots, computed, inject } from 'vue';

const props = defineProps({
    color: {
        type: String,
        default: 'secondary'
    },
    variant: {
        type: String,
        default: 'base',
        validator(value) {
            return ['light', 'dark', 'base', 'outline', 'text'].includes(value)
        }
    },
    multiple: { type: Boolean, default: false },
    defaultIndex: { type: [Number, Array], default: () => [] },
    divide: {type: Boolean, default: true},
    unstyled: { type: Boolean, default: false }
});

const slots = useSlots()

const expandedIndex = reactive(
    Array.isArray(props.defaultIndex)
        ? [...props.defaultIndex]
        : [props.defaultIndex]
);

const toggleItem = (index) => {
    if (props.multiple) {
        if (expandedIndex.includes(index)) {
            expandedIndex.splice(expandedIndex.indexOf(index), 1);
        } else {
            expandedIndex.push(index);
        }
    } else {
        expandedIndex.splice(0, expandedIndex.length, index === expandedIndex[0] ? null : index);
    }
};

// Provide state and toggle function to child components
provide('accordion', {
    expandedIndex,
    toggleItem,
    accordionProps: props
});

const childComponents = computed(() =>
    Array.isArray(slots.default()) ? slots.default() : [slots.default()]
);

const getClasses = inject('getClasses')

const classes = computed(() => {
    if (props.unstyled) return 
    
    return getClasses(props, 'accordion', {exclude: ["subBackground"], debug: true})
})
</script>
