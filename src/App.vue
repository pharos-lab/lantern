<template>
  <div class="test">
    <LAccordion color="blue" mode="fill">
      <LAccordionItem label="item 1">Contenu 1</LAccordionItem>
      <LAccordionItem label="item 2">contenu 2</LAccordionItem>
      <LAccordionItem label="item 3">contenu 3</LAccordionItem>
    </LAccordion>

    <LButton class="my-4" color="orange" rounded="normal" focus
      >click me
    </LButton>
    <LButton class="my-4" color="orange" rounded="normal" focus mode="light"
      >click me
    </LButton>
    <LButton class="my-4" color="orange" rounded="normal" focus mode="outlined"
      >click me
    </LButton>

    <br />

    <LInput
      class="my-2"
      mode="fill"
      v-model="message"
      placeholder="text"
      color="orange"
      border="border-8"
      focus
    ></LInput>

    <LInput
      class="my-2"
      mode="light"
      v-model="message"
      placeholder="text"
      color="orange"
      focus
      border
    ></LInput>

    <LInput
      class="my-2"
      mode="outlined"
      v-model="message"
      placeholder="text"
      color="orange"
      focus
      border
    ></LInput>
    <p>{{ message }}</p>

    <form action="">
      <LCheckbox
        class="w-8 h-8"
        v-model="checked"
        color="blue"
        mode="fill"
      ></LCheckbox>
    </form>
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
