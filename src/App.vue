<script setup lang="ts">
import { inject } from 'vue';
import { THEME_KEY } from './plugin';
import Button from './components/button/Button.vue';

// import { useComponentClasses } from './composables/useComponentClasses';
const theme = inject(THEME_KEY)

// console.log(theme, useComponentClasses('button', {color: 'default', size: 'large'}));

</script>

<template>
    <Button></Button>
</template>


