<template>
    <li @click="handle">
        <slot></slot>
    </li>
</template>

<script setup>
import { inject } from 'vue'

const props = defineProps({
    value: String
})
const searchList = inject('searchList')

const handle = () => {
    console.log(searchList.model);
    searchList.model.value.value = props.value
}

</script>