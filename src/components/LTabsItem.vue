<template>
  <div class="l-tabs-item" v-show="active">
    <slot></slot>
  </div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { computed, inject } from 'vue';

const selected = inject('selected');

const props = defineProps({
  title: {
    type: String,
  },
});

const active = computed(() => {
  return props.title == selected.value;
});
</script>

<style scoped></style>
