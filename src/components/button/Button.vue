<template>
    <button>ok</button>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { type Theme, type ComponentProps } from '../../types';
import { THEME_KEY } from '../../plugin';
import { buttonSpecs } from './buttonSpecs.js'
import { useComponentClasses } from '../../composables/useComponentClasses.js';

const props = defineProps<ComponentProps>()
const theme = inject<Theme>(THEME_KEY)
const classes = useComponentClasses(props, buttonSpecs)

console.log(classes);

</script>