<template>
    <input type="text" class="l-search-list-input border" v-model="searchList.model.input" :placeholder="searchList.props.placeholder">
</template>

<script setup>
import { inject } from 'vue'

const searchList = inject('searchList')
</script>