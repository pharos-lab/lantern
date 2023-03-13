<template>
  <div class="l-aspect" ref="tag">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
  aspect: String,
  validator(value) {
    return value.match(/\d\/\d/);
  },
});

const tag = ref();

onMounted(() => {
  tag.value.style.aspectRatio = props.aspect;
});
</script>

<style scoped></style>
