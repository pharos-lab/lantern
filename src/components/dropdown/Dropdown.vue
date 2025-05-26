<template>
    <Floating trigger="click" class="l-dropdown" :class="pharos.getStaticClass('Dropdown')">
      <slot></slot>
    </Floating>
</template>

<script setup>
import { inject } from 'vue';
import { Floating } from '@/components/floating'

const pharos = inject('pharos')
</script>
  