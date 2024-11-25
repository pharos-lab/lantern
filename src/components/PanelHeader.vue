<template>
    <div
        class="l-panel-header cursor-pointer p-4 font-semibold"
        @click="toggle"
    >
        <slot></slot>
    </div>
</template>
  
<script setup>
import { inject } from 'vue';

const { toggle } = inject('panel');
</script>
  