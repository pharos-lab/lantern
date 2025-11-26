<script setup lang="ts">
import Button from './components/button/Button.vue';
import Alert from './components/alert/Alert.vue'
import AlertClose from './components/alert/AlertClose.vue';
import Card from './components/card/Card.vue'
import Badge from './components/badge/Badge.vue'
import Avatar from './components/avatar/Avatar.vue'
import AvatarImage from './components/avatar/AvatarImage.vue'
import AvatarFallback from './components/avatar/AvatarFallback.vue'
</script>

<template>
    <div class="p-8 space-y-8">
        <!-- <Button class="test ok" nicce="dfdfd" color="pink" variant="outline">Bonjour !</Button>

        <Alert role="test">
            <AlertClose>X</AlertClose>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, similique!
        </Alert>

        <Card>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, velit?</Card>

        <Badge aria-label="test">new offer</Badge> -->

        <Avatar radius="circle" size="large" class="" fallback="ts">
            <AvatarImage src="" alt="alt text"></AvatarImage>
            <AvatarFallback>MD</AvatarFallback>
        </Avatar>

    </div>
    
</template>


