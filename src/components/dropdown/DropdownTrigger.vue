<template>
    <FloatingTrigger :class="pharos.getStaticClass('DropdownTrigger')">
      <slot></slot>
    </FloatingTrigger>
</template>

<script setup>
import { inject } from 'vue';
import { FloatingTrigger } from '@/components/floating'

const pharos = inject('pharos')
</script>
  