<template>
  <div class="test">
    <div class="flex gap-4">
      <LButton color="gray" mode="fill">click</LButton>
      <LButton color="red" mode="fill">click</LButton>
      <LButton color="orange" mode="fill">click</LButton>
      <LButton color="yellow" mode="fill">click</LButton>
      <LButton color="green" mode="fill">click</LButton>
      <LButton color="blue" mode="fill">click</LButton>
    </div>

    <div class="flex gap-4 py-4">
      <LButton color="gray" mode="light">click</LButton>
      <LButton color="red" mode="light">click</LButton>
      <LButton color="orange" mode="light">click</LButton>
      <LButton color="yellow" mode="light">click</LButton>
      <LButton color="green" mode="light">click</LButton>
      <LButton color="blue" mode="light">click</LButton>
    </div>

    <div class="flex gap-4 py-4">
      <LButton color="gray" mode="text">click</LButton>
      <LButton color="red" mode="text">click</LButton>
      <LButton color="orange" mode="text">click</LButton>
      <LButton color="yellow" mode="text">click</LButton>
      <LButton color="green" mode="text">click</LButton>
      <LButton color="blue" mode="text">click</LButton>
    </div>

    <div class="flex gap-4 py-4">
      <LButton color="gray" mode="outlined">click</LButton>
      <LButton color="red" mode="outlined">click</LButton>
      <LButton color="orange" mode="outlined">click</LButton>
      <LButton color="yellow" mode="outlined">click</LButton>
      <LButton color="green" mode="outlined">click</LButton>
      <LButton color="blue" mode="outlined">click</LButton>
    </div>

    <div class="flex gap-4 py-4">
      <LButton color="gray" mode="underlined">click</LButton>
      <LButton color="red" mode="underlined">click</LButton>
      <LButton color="orange" mode="underlined">click</LButton>
      <LButton color="yellow" mode="underlined">click</LButton>
      <LButton color="green" mode="underlined">click</LButton>
      <LButton color="blue" mode="underlined">click</LButton>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import LButton from './components/LButton.vue';

const vAutofocus = {
  mounted: (el) => el.focus(),
};

const navbar = {
  color: 'gray',
  mode: 'underlined',
  hover: true,
  container: false,
  pills: false,
  brand: {
    src: 'dfgfgffd',
    alt: 'fghfghfghfg',
    position: 'right',
  },
  alignment: 'left',
  links: [
    {
      label: 'link 1 lorem',
      href: 'ifdgdfgf',
    },
    {
      label: 'link 2 dfdsfsd',
      href: 'ifdgdfgf',
    },
    {
      label: 'link 3',
      href: 'ifdgdfgf',
    },
    {
      label: 'link 4 dfsdfdfdfgdf dfgdf dfdf',
      href: 'ifdgdfgf',
    },
  ],
  actions: [
    {
      label: 'login',
      href: 'ok',
      color: 'green',
      mode: 'fill',
      rounded: 'normal',
    },
    {
      label: 'login',
      href: 'ok',
      color: 'red',
      mode: 'fill',
      rounded: 'normal',
    },
  ],
};
</script>

<style scoped>
.test {
  padding: 10px;
}
</style>
