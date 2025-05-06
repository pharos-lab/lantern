<template>
    <div
        class="l-panel-header p-4 font-semibold relative flex justify-between items-center"
    >
        <slot></slot>
        <transition name="quickFade" mode="out-in">
          <component
            :is="isExpanded ? Minus : Plus"
            class="size-8 stroke-2 rounded-full p-1 cursor-pointer"
            @click="toggle"
          ></component>
        </transition>
    </div>
</template>
  
<script setup>
import { inject } from 'vue';
import { Plus, Minus } from 'lucide-vue-next';

const { toggle, isExpanded } = inject('panel');
</script>
  
<style>
.quickFade-enter-active,
.quickFade-leave-active {
  transition: opacity 0.2s ease;
}

.quickFade-enter-from,
.quickFade-leave-to {
  opacity: 0;
}</style>