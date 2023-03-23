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

    <LAlert color="green" mode="light" rounded left-border
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
      quis.</LAlert
    >

    <LCheckbox color="red" focus></LCheckbox>

    <label for="">
      click me
      <LRadio
        color="red"
        name="test"
        v-model="radio"
        value="one"
        class="!w-6 !h-6"
        focus
      ></LRadio>
    </label>
    <p>{{ radio }}</p>
    <label for="">
      click me
      <LRadio color="blue" name="test" v-model="radio" value="two"></LRadio>
    </label>
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
import { ref } from 'vue';

const message = ref();
const message2 = ref();
const checked = ref();

const radio = ref();

const vAutofocus = {
  mounted: (el) => el.focus(),
};
</script>

<style scoped>
.test {
  padding: 10px;
}
</style>
