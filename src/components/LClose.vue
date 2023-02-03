<template>
  <div class="l-close" :class="color">
    <div class="l-close-bar bar1" :class="barColor"></div>
    <div class="l-close-bar bar2" :class="barColor"></div>
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
    default: 'normal',
    validator(value) {
      // The value must match one of these strings
      return ['normal', 'light', 'outlined'].includes(value);
    },
  },
});

const barColor = ref();

const color = computed(() => {
  if (props.mode == 'normal') {
    barColor.value = 'white';
    return `${props.color}-hover`;
  } else if (props.mode == 'outlined') {
    barColor.value = `${props.color}`;
    return `${props.color}-light-hover`;
  } else {
    barColor.value = props.color;
    return `${props.color}-${props.mode}-hover`;
  }
});
</script>

<style scoped>
.l-close {
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
