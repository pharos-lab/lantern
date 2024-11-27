<template>
    <div class="l-tabs" :class="classes">
      <slot></slot>
    </div>
</template>
  
<script setup>
import { provide, ref, useSlots, inject, computed } from 'vue';

const props = defineProps({
    active: String,
    color: {
        type: String,
        default: 'secondary'
    },
    variant: {
        type: String,
        default: 'light',
        validator(value) {
            return ['light', 'dark', 'base', 'outline', 'text'].includes(value)
        }
    },
    pills: { type: Boolean, default: false},
    unstyled: { type: Boolean, default: false }
})

// get the name of the first tab
const defaultActiveName = useSlots().default?.()[0]?.children?.default?.()[0]?.props?.name

const activeTab = ref(props.active || defaultActiveName);

const setActiveTab = (name) => {
    activeTab.value = name;
};

provide('tabs', { activeTab, setActiveTab, propsTab: props });

const getClasses = inject('getClasses')

const classes = computed(() => {
    if (props.unstyled) return 
    
    return getClasses(props, 'tabs', {exclude: ['subBackground']})
})

</script>
  