<template>
    <FloatingContent :class="pharos.getStaticClass('DropdownContent')">
      <slot></slot>
    </FloatingContent>
</template>

<script setup>
import { inject } from 'vue';
import { FloatingContent } from '@/components/floating'

const pharos = inject('pharos')
</script>
  