<template>
  <div class="l-tabs-list flex" :class="pharos.theme.components.TabsList">
    <slot></slot>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const pharos = inject('pharos')

</script>