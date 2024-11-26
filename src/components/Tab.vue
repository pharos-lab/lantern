<template> 
    <div class="l-tab px-3 py-2" @click="activateTab" :class="[{'rounded border': propsTab.pills}, hoverClass]">
        <slot></slot>
    </div>
</template>
  
<script setup>
import { inject, computed } from 'vue';

const { activeTab, setActiveTab, propsTab } = inject('tabs');

const props = defineProps({
name: { type: String, required: true },
});

const isActive = computed(() => activeTab.value === props.name);

const activateTab = () => setActiveTab(props.name);

const getClass = inject('getClass')

const hoverClass = computed(() => {
    return getClass({...propsTab, hover:true}, 'tabs', 'hover')
})
</script>
  