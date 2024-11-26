<template>
    <div class="l-tabs">
      <slot></slot>
    </div>
</template>
  
<script setup>
import { provide, ref, useSlots } from 'vue';

const props = defineProps({
    active: String
})

// get the name of the first tab
const defaultActiveName = useSlots().default?.()[0]?.children?.default?.()[0]?.props?.name

const activeTab = ref(props.active || defaultActiveName);

const setActiveTab = (name) => {
    activeTab.value = name;
};

provide('tabs', { activeTab, setActiveTab });

</script>
  