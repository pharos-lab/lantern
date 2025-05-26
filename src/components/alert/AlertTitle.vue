<template>
    <h3 class="l-alert-title font-semibold text-lg mb-4" :class="[pharos.getStaticClass('AlertTitle')]">
        <slot></slot>
    </h3>
</template>

<script setup>
import { inject } from 'vue';

const pharos = inject('pharos')

</script>