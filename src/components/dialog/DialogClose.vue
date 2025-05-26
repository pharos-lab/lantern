<template>
    <div class="l-dialog-close inline-block" @click="dialog.close" :class="[pharos.getStaticClass('DialogClose')]">
        <slot></slot>
    </div>
</template>

<script setup>
import { inject } from 'vue'

const pharos = inject('pharos')

const dialog = inject('dialog')  
</script>