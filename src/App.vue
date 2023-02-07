<template>
  <div class="test">
    <LButton color="red" rounded="md" mode="light" :hover="false">
      bonjour
      <LClose></LClose>
    </LButton>
    <br />
    <LHeading color="green" size="lg" background>Un test de titre</LHeading>
    <LAvatar
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
      alt="texte alternatif"
      class="bg-red-500"
    ></LAvatar>

    <br />

    <LClose color="red" mode="normal"></LClose>

    <br />
    <LDivider size=""></LDivider>
    <LParagraph color="red" background
      >rfgh gh ghg h hedfe ekjej efer efg er
    </LParagraph>
  </div>
</template>

<script setup>
import LButton from './components/LButton.vue';
import LHeading from './components/LHeading.vue';
import LAvatar from './components/LAvatar.vue';
import LClose from './components/LClose.vue';
import LParagraph from './components/LParagraph.vue';
import LDivider from './components/LDivider.vue';
</script>

<style scoped>
.test {
  padding: 10px;
}
</style>
