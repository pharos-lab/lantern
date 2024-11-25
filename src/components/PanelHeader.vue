<template>
    <div
        class="l-panel-header cursor-pointer p-4 font-semibold relative flex justify-between items-center"
    >
        <slot></slot>
        <transition name="quickFade" mode="out-in">
          <component
            :is="isExpanded ? MinusIcon : PlusIcon"
            class="size-8 stroke-2 hover:bg-slate-100 rounded-full p-1"
            @click="toggle"
          ></component>
        </transition>
    </div>
</template>
  
<script setup>
import { inject } from 'vue';
import { MinusIcon, PlusIcon } from '@heroicons/vue/24/solid'

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