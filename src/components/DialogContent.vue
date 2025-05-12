<template>
    <div v-if="dialog.isOpen.value" class="l-dialog fixed inset-0 bg-black/50 z-50 flex items-center justify-center m-0">
        <div class="bg-white rounded-lg shadow-lg p-6">
            <slot></slot>
        </div>
    </div>
</template>
  
<script setup>
import { inject } from 'vue'

const dialog = inject('dialog')  
</script>
  