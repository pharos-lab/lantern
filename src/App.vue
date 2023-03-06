<template>
  <div class="test">
    <LAccordion color="blue" mode="fill">
      <LAccordionItem label="item 1">Contenu 1</LAccordionItem>
      <LAccordionItem label="item 2">contenu 2</LAccordionItem>
      <LAccordionItem label="item 3">contenu 3</LAccordionItem>
    </LAccordion>

    <LInputGroup
      label="prenom"
      placeholder="type some text"
      position="left"
      color="gray"
      mode="light"
      border
      focus
      v-model="message2"
    ></LInputGroup>
    <p>{{ message2 }}</p>

    <LInput v-model="message" placeholder="text" color="red" focus></LInput>
    <p>{{ message }}</p>

    <LCheckbox v-model="checked" color="red" focus></LCheckbox>

    <p>{{ checked }}</p>
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
import { ref } from 'vue';

const message = ref();
const message2 = ref();
const checked = ref();

const vAutofocus = {
  mounted: (el) => el.focus(),
};
</script>

<style scoped>
.test {
  padding: 10px;
}
</style>
