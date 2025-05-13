<template>
    <div class="l-dialog-close inline-block" @click="dialog.close">
        <slot></slot>
    </div>
</template>

<script setup>
import { inject } from 'vue'

const dialog = inject('dialog')  
</script>