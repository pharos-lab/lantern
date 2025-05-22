<template>
    <div class="l-tabs">
        <slot></slot>
    </div>
</template>

<script setup>
import { ref, provide } from 'vue'

const active = ref("1")
provide('tabs', { active })
</script>
  