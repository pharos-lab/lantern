<template>
  <div class="l-close">
    <div class="">
      <div
        :class="close"
        class="bar1 w-5 h-1 my-1 rotate-45 rounded-md translate-y-1"
      ></div>
      <div
        :class="close"
        class="bar2 w-5 h-1 my-1 -rotate-45 -translate-y-1 rounded-md"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

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

.l-close .bar-1,
.l-close .bar-2 {
  width: 20px;
  height: 4px;
  margin: 4px 0;
}
</style>
