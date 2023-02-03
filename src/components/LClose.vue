<template>
  <div class="l-close" :class="color">
    <div class="l-close-bar bar1 white"></div>
    <div class="l-close-bar bar2 white"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import '@/styles/colors.css';

const props = defineProps({
  color: {
    type: String,
    validator(value) {
      // The value must match one of these strings
      return ['slate', 'red', 'orange', 'yellow', 'blue'].includes(value);
    },
  },
  mode: {
    type: String,
    default: 'normal',
    validator(value) {
      // The value must match one of these strings
      return ['normal', 'light', 'outlined'].includes(value);
    },
  },
});

const color = computed(() => {
  return props.mode == 'normal'
    ? `${props.color}`
    : `${props.color}-${props.mode}`;
});
</script>

<style scoped>
.l-close {
  position: absolute;
  right: 16px;
  border-radius: 6px;
  padding: 4px;
  cursor: pointer;
}

.l-close-bar {
  width: 20px;
  height: 4px;
  margin: 4px 0;
  border-radius: 4px;
}
.bar1 {
  transform: translateY(4px) rotate(45deg);
}

.bar2 {
  transform: translateY(-4px) rotate(-45deg);
}
</style>
