<template>
  <div class="test">
    <LButton color="green" mode="outlined">
      bonjour
      <LClose color="green" context="outlined"></LClose>
    </LButton>
    <br />
    <LHeading color="blue" size="4xl">Un test de titre</LHeading>
    <LAvatar
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
      alt="texte alternatif"
      class="bg-red-500"
    ></LAvatar>

    <br />

    <LClose color="red"></LClose>

    <br />
    <LDivider size=""></LDivider>
    <LParagraph color="red" size="lg"
      >rfgh gh ghg h hedfe ekjej efer efg er
    </LParagraph>

    <LAlert color="red" mode="outlined"> Message d'alerte </LAlert>

    <LDropdown label="hover/click me" color="red" rounded margin>
      <template #label>autre label</template>
      <LDropdownItem>Un item</LDropdownItem>
      <LDropdownItem>Un item 2</LDropdownItem>
      <LDropdownItem>Un item 3 fjhjkgh jghjg </LDropdownItem>
    </LDropdown>

    <LTabs color="blue" class="mt-6" card>
      <LTabsItem title="one">
        <div class="ok">
          <p>premier tab</p>
          <p>fonctionne</p>
        </div>
      </LTabsItem>
      <LTabsItem title="two">second</LTabsItem>
      <LTabsItem title="three">third</LTabsItem>
    </LTabs>
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
</script>

<style scoped>
.test {
  padding: 10px;
}
</style>
