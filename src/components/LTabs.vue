<template>
  <div class="l-tabs rounded overflow-hidden" :class="wrapperClass">
    <ul class="flex px-4 l-tabs-labels" :class="[labelClass, borderClass]">
      <li
        v-for="title in tabTitles"
        :key="title"
        @click="selected = title"
        class="px-4 py-2 font-semibold l-tabs-label"
        :class="[selected == title ? activeClass : colorClass, roundedClass]"
      >
        {{ title }}
      </li>
    </ul>

    <div class="l-tabs-items p-4 relative" :class="contentColorClass">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { useSlots, computed, onMounted, ref, provide } from 'vue';
import { useColorSwitch } from './composables/colorSwitch.js';

const tabTitles = ref([]);
const selected = ref();
const activeClass = ref();
const labelClass = ref();
const contentColorClass = ref();

const props = defineProps({
  color: {
    type: String,
    default: 'gray',
    validator(value) {
      // The value must match one of these strings
      return ['gray', 'red', 'orange', 'yellow', 'blue'].includes(value);
    },
  },
  mode: {
    type: String,
    default: 'none',
    validator(value) {
      // The value must match one of these strings
      return ['none', 'fill', 'light', 'outlined', 'text'].includes(value);
    },
  },
  background: {
    type: Boolean,
    default: false,
  },
  pills: {
    type: Boolean,
    default: false,
  },
  card: {
    type: Boolean,
    default: false,
  },
});

provide('selected', selected);

onMounted(() => {
  useSlots()
    .default()
    .forEach((tab, index) => {
      tabTitles.value.push(tab.props.title);
    });
  selected.value = tabTitles.value[0];
});

const colorClass = computed(() => {
  activeClass.value = useColorSwitch(props.color, 'fill');
  contentColorClass.value = useColorSwitch(props.color, props.mode);

  switch (props.color) {
    case 'gray':
      labelClass.value = `${props.card ? 'bg-slate-50' : ''} border-slate-500`;
      return 'text-slate-700 hover:bg-slate-200';

    case 'red':
      labelClass.value = `${props.card ? 'bg-red-50' : ''} border-red-500`;
      return 'text-red-700 hover:bg-red-100';

    case 'orange':
      labelClass.value = `${
        props.card ? 'bg-orange-50' : ''
      } border-orange-500`;
      return 'text-orange-700 hover:bg-orange-100';

    case 'yellow':
      labelClass.value = `${
        props.card ? 'bg-yellow-50' : ''
      } border-yellow-500`;
      return 'text-yellow-700 hover:bg-yellow-100';

    case 'green':
      labelClass.value = `${
        props.card ? 'bg-emerald-50' : ''
      } border-emerald-500`;
      return 'text-emerald-700 hover:bg-emerald-100';

    case 'blue':
      labelClass.value = `${props.card ? 'bg-sky-50' : ''} border-sky-500`;
      return 'text-sky-700 hover:bg-sky-100';
      break;
  }
});

const roundedClass = computed(() => {
  return props.pills ? 'rounded-lg my-2 mx-1' : 'rounded-t mt-2';
});

const wrapperClass = computed(() => {
  return props.card ? 'border shadow-md' : '';
});
const borderClass = computed(() => {
  return props.mode == 'outlined' ? 'border-0' : 'border-b-2';
});
</script>

<style scoped></style>
