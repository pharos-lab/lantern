<template>
    <div class="l-tabs-header flex" role="tablist" :class="{'p-2 gap-4': propsTab.pills}">
      <slot></slot>
    </div>
</template>

<script setup>
import { inject, computed } from 'vue';

const { propsTab } = inject('tabs');
</script>
