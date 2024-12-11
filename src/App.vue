<template>
    <div class="p-4 space-y-6">

        <Alert >
            <AlertTitle>Lorem ipsum dolor sit.</AlertTitle>
            <AlertDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, doloribus.</AlertDescription>
        </Alert>

        <Card variant="dark" color="danger">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, voluptatum!
        </Card>
    </div>
</template>

<script setup>
import Button from './components/Button.vue';
import Alert from './components/Alert.vue'
import AlertTitle from './components/AlertTitle.vue'
import AlertDescription from './components/AlertDescription.vue'
import Card from './components/Card.vue'

import imgUrl from '@/assets/vue.svg'
import { ref } from 'vue'

</script>



<style scoped>

</style>
