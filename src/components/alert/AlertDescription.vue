<template>
    <div class="l-alert-description leading-snug" :class="[pharos.getStaticClass('AlertDescription')]">
        <slot></slot>
    </div>
</template>

<script setup>
import { inject } from 'vue';

const pharos = inject('pharos')
</script>