<template> 
    <div class="l-tab" @click="activateTab">
        <slot></slot>
    </div>
</template>
  
  <script setup>
  import { inject, computed } from 'vue';
  
  const { activeTab, setActiveTab } = inject('tabs');
  const props = defineProps({
    name: { type: String, required: true },
  });
  
  const isActive = computed(() => activeTab.value === props.name);
  
  const activateTab = () => setActiveTab(props.name);
  </script>
  