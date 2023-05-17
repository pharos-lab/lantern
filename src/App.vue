<template>
  <LNavbarCTA v-bind="navbar"> </LNavbarCTA>
  <div class="test">
    <LDropdown color="blue" mode="text" margin rounded>
      <LDropdownItem>ok</LDropdownItem>
      <LDropdownItem>ok</LDropdownItem>
      <LDropdownItem>ok</LDropdownItem>
    </LDropdown>

    <LButton class="my-4" color="orange" rounded="normal" focus href="okok"
      >ok
    </LButton>
    <LButton class="my-4" color="orange" rounded="normal" focus mode="light"
      >click me
    </LButton>
    <LButton class="my-4" color="orange" rounded="normal" focus mode="outlined"
      >click me
    </LButton>

    <br />

    <p>
      Lorem ipsum dolor sit, amet consectetur
      <LTooltip tooltip="it works !">adipisicing </LTooltip> elit. Velit, sed!
    </p>

    <p class="my-4">
      Lorem ipsum dolor sit, amet consectetur
      <LTooltip color="red">
        <template #tooltip>
          <div class="">it works too</div>
        </template>
        adipisicing
      </LTooltip>
      elit. Velit, sed!
    </p>

    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing
      <LLink href="ok" color="blue" mode="fill" rounded>Click me</LLink> elit.
      Possimus, tempora?
    </p>
  </div>
</template>

<script setup>
import LButton from './components/LButton.vue';
import LHeading from './components/LHeading.vue';
import LAvatar from './components/LAvatar.vue';
import LClose from './components/LClose.vue';
import LParagraph from './components/LParagraph.vue';
import LDivider from './components/LDivider.vue';
import LAlert from './components/LAlert.vue';
import LDropdown from './components/LDropdown.vue';
import LDropdownItem from './components/LDropdownItem.vue';
import LTabs from './components/LTabs.vue';
import LTabsItem from './components/LTabsItem.vue';
import LModal from './components/LModal.vue';
import LAspect from './components/LAspect.vue';
import LCard from './components/LCard.vue';
import LInputGroup from './components/LInputGroup.vue';
import LInput from './components/LInput.vue';
import LCheckbox from './components/LCheckbox.vue';
import LAccordion from './components/LAccordion.vue';
import LAccordionItem from './components/LAccordionItem.vue';
import LTooltip from './components/LTooltip.vue';
import LRadio from './components/LRadio.vue';
import LLink from './components/LLink.vue';
import LNavbar from './components/headers/LNavbar.vue';
import LNavbarCTA from './components/headers/LNavbarCTA.vue';
import { ref } from 'vue';

const message = ref();
const message2 = ref();
const checked = ref();

const radio = ref();

const vAutofocus = {
  mounted: (el) => el.focus(),
};

const navbar = {
  color: 'red',
  mode: 'light',
  hover: true,
  rounded: 'normal',
  container: false,
  pills: true,
  brand: {
    src: 'dfgfgffd',
    alt: 'fghfghfghfg',
  },
  alignment: 'left',
  links: [
    {
      label: 'link 1',
      href: 'ifdgdfgf',
    },
    {
      label: 'link 2',
      href: 'ifdgdfgf',
    },
    {
      label: 'link 3',
      href: 'ifdgdfgf',
    },
    {
      label: 'link 4',
      href: 'ifdgdfgf',
    },
  ],
};
</script>

<style scoped>
.test {
  padding: 10px;
}
</style>
