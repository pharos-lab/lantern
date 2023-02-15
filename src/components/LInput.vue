<template>
  <div class="l-input" :class="position">
    <label class="l-input-label" v-if="slots.label || props.label">
      <slot name="label">{{ props.label }}</slot>
    </label>

    <input :type="props.type" class="l-input-content" v-bind="$attrs" />
  </div>
</template>

<script>
// use normal <script> to declare options
export default {
  inheritAttrs: false,
};
</script>

<script setup>
import { ref, computed, useSlots } from 'vue';
import { usePositionSwitch } from './composables/positionSwitch.js';

const slots = useSlots();

const props = defineProps({
  label: String,
  type: {
    type: String,
    default: 'text',
  },
  position: {
    type: String,
    default: 'top',
    validator(value) {
      return ['top', 'bottom', 'left', 'right'].includes(value);
    },
  },
});

const position = computed(() => {
  return usePositionSwitch(props.position);
});
</script>

<style scoped>
.l-input-label:empty {
  display: none;
}
</style>
