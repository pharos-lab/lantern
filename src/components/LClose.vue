<template>
  <div class="l-close inline-block p-1 rounded-md" :class="color">
    <div
      class="l-close-bar bar1 w-5 h-1 my-1 rotate-45 rounded-md translate-y-1"
      :class="barColor"
    ></div>
    <div
      class="l-close-bar bar2 w-5 h-1 my-1 -rotate-45 -translate-y-1 rounded-md"
      :class="barColor"
    ></div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

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
    validator(value) {
      // The value must match one of these strings
      return ['normal', 'light', 'outlined'].includes(value);
    },
  },
});

const barColor = ref();

const color = computed(() => {
  switch (props.mode) {
    case 'normal':
      barColor.value = 'bg-white';
      return `l-${props.color}-hover`;
      break;
    case 'outlined':
      barColor.value = `l-${props.color}`;
      return `l-${props.color}-light-hover`;
      break;
    case 'light':
      barColor.value = `l-${props.color}`;
      return `l-${props.color}-${props.mode}-hover`;
      break;
    default:
      barColor.value = `l-slate`;
      return '';
  }
});
</script>

<style scoped></style>
