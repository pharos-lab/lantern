<template>
  <div class="test">
    <!--
   
    <br />
    <LHeading color="blue" size="4xl">Un test de titre</LHeading>
    <LAvatar
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
      alt="texte alternatif"
      class="bg-red-500"
    ></LAvatar>

    <br />
    <LDivider size=""></LDivider>
    <LParagraph color="red" size="lg"
      >rfgh gh ghg h hedfe ekjej efer efg er
    </LParagraph>

    <LAlert color="red" mode="outlined"> Message d'alerte </LAlert>

    <LDropdown label="hover/click me" color="red" rounded margin>
      <LDropdownItem>Un item</LDropdownItem>
      <LDropdownItem>Un item 2</LDropdownItem>
      <LDropdownItem>Un item 3 fjhjkgh jghjg </LDropdownItem>
    </LDropdown>
    -->
    <LButton mode="none"> bonjour </LButton>

    <LTabs color="green" class="mt-6" card backgroun pills>
      <LTabsItem title="one">
        <div class="ok">
          <p>premier tab</p>
          <p>fonctionne</p>
        </div>
      </LTabsItem>
      <LTabsItem title="two">second</LTabsItem>
      <LTabsItem title="three">third</LTabsItem>
    </LTabs>

    <LModal label="open modal">
      <template #header>
        <h1>titre du modal</h1>
      </template>

      <template #footer>
        <h1>titre du modal</h1>
      </template>
      goooooood!
    </LModal>

    <LAspect aspect="16/9">
      <img
        src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg"
        alt="encore un text alt"
        class="bg-red-500"
      />
    </LAspect>

    <LCard
      position="left"
      class=""
      img="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg"
      size="w-2/3"
    >
      <template #header>titre card</template>
      <template #footer>footer card</template>

      <div class="content">
        <p>
          ok contenu Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Odit, accusantium.
        </p>
      </div>
    </LCard>
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
</script>

<style scoped>
.test {
  padding: 10px;
}
</style>
