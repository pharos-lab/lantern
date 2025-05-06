<template>
    <div class="l-panel-label cursor-pointer"  @click="panel.toggle" :class="[pharos.theme.padding]">
        <slot>trigger</slot>
    </div>
</template>

<script setup>
import { inject, computed, ref } from 'vue'

const pharos = inject('pharos')
const panel = inject('panel')

</script>

<style scoped>

</style>