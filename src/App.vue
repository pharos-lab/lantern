<template>
  <div class="test">
    <LInputGroup
      label="username"
      class="mb-2"
      color="gray"
      :focus="false"
      border
    >
    </LInputGroup>
    <div class="flex gap-2">
      <LButton color="red" mode="light" rounded focus>ok</LButton>
      <LButton color="green" mode="light" rounded>Submit</LButton>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import LButton from './components/LButton.vue';
import LInputGroup from './components/LInputGroup.vue';

const message = ref();
const message2 = ref();
const checked = ref();

const radio = ref();

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
