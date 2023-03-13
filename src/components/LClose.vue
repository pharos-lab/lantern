<template>
  <div
    class="l-close p-1 flex justify-center items-center rounded"
    :class="colorClass"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
      <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
      />
    </svg>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  color: {
    type: String,
    validator(value) {
      // The value must match one of these strings
      return ['gray', 'red', 'orange', 'yellow', 'blue', 'white'].includes(
        value
      );
    },
  },
  context: {
    type: String,
    default: 'none',
    validator(value) {
      // The value must match one of these strings
      return ['none', 'fill', 'light', 'outlined'].includes(value);
    },
  },
  hover: {
    type: Boolean,
    default: true,
  },
});

const hover = ref();

const colorClass = computed(() => {
  switch (props.color) {
    case 'gray':
      if (props.context == 'outlined' || props.context == 'none') {
        return 'fill-slate-500 hover:bg-slate-500 hover:fill-white';
      }

      if (props.context == 'fill') {
        return 'fill-white hover:bg-slate-600';
      }

      if (props.context == 'light') {
        return 'hover:bg-slate-300 fill-slate-600';
      }
    case 'red':
      if (props.context == 'outlined' || props.context == 'none') {
        return 'fill-red-500 hover:bg-red-500 hover:fill-white';
      }

      if (props.context == 'fill') {
        return 'fill-white hover:bg-red-600';
      }

      if (props.context == 'light') {
        return 'hover:bg-red-300 fill-red-600';
      }
    case 'orange':
      if (props.context == 'outlined' || props.context == 'none') {
        return 'fill-orange-500 hover:bg-orange-500 hover:fill-white';
      }

      if (props.context == 'fill') {
        return 'fill-white hover:bg-orange-600';
      }

      if (props.context == 'light') {
        return 'hover:bg-orange-300 fill-orange-600';
      }
    case 'yellow':
      if (props.context == 'outlined' || props.context == 'none') {
        return 'fill-yellow-500 hover:bg-yellow-500 hover:fill-white';
      }

      if (props.context == 'fill') {
        return 'fill-white hover:bg-yellow-600';
      }

      if (props.context == 'light') {
        return 'hover:bg-yellow-300 fill-yellow-600';
      }
    case 'green':
      if (props.context == 'outlined' || props.context == 'none') {
        return 'fill-emerald-500 hover:bg-emerald-500 hover:fill-white';
      }

      if (props.context == 'fill') {
        return 'fill-white hover:bg-emerald-600';
      }

      if (props.context == 'light') {
        return 'hover:bg-emerald-300 fill-emerald-600';
      }
    case 'blue':
      if (props.context == 'outlined' || props.context == 'none') {
        return 'fill-sky-500 hover:bg-sky-500 hover:fill-white';
      }

      if (props.context == 'fill') {
        return 'fill-white hover:bg-sky-600';
      }

      if (props.context == 'light') {
        return 'hover:bg-sky-300 fill-sky-600';
      }
  }
});
</script>

<style scoped></style>
