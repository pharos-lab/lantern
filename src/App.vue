<script setup lang="ts">
import Button from './components/button/Button.vue';
import Alert from './primitives/alert/Alert.vue'
</script>

<template>
    <div class="p-8 space-y-8">
        <Button class="test ok" nicce="dfdfd">Bonjour !</Button>
        <Alert role="test" :duration="10000">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, similique!
        </Alert>
    </div>
    
</template>


