<template>
  <div class="test">
    <LButton color="blue" rounded="pills">Boutton good</LButton>
    <br />
    <LHeading color="green" size="xl">Un test de titre</LHeading>
  </div>
</template>

<script setup>
import LButton from './components/LButton.vue';
import LHeading from './components/LHeading.vue';
</script>

<style scoped>
.test {
  padding: 10px;
}
</style>
