<template>
  <span ref="trigger" class="l-tooltip-trigger">
    <slot></slot>
  </span>
  <div class="l-tooltip-popper" ref="popper">
    <slot name="tooltip">{{ props.tooltip }}</slot>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue';
import { Blink } from '@pharos-lab/blink';

const props = defineProps({
  tooltip: String,
});

const trigger = ref(null);
const popper = ref(null);

onMounted(() => {
  console.log(trigger);

  Blink.create(trigger.value, popper.value);
});
</script>

<style scoped></style>
