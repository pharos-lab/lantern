<template>
  <div class="test">
    <LButton color="slate" rounded="" mode="normal" hover>Boutton good</LButton>
    <br />
    <LHeading color="green" size="xl">Un test de titre</LHeading>
    <LAvatar
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
      alt="texte alternatif"
      size="5xl"
    ></LAvatar>

    <br />

    <LClose color="red" mode="normal"></LClose>
  </div>
</template>

<script setup>
import LButton from './components/LButton.vue';
import LHeading from './components/LHeading.vue';
import LAvatar from './components/LAvatar.vue';
import LClose from './components/LClose.vue';
</script>

<style scoped>
.test {
  padding: 10px;
}
</style>
