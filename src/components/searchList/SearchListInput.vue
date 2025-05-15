<template>
    <input type="text" class="l-search-list-input border border-slate-500 px-3 py-1 rounded" v-model="searchList.model.value" :placeholder="searchList.props.placeholder">
</template>

<script setup>
import { inject } from 'vue'

const searchList = inject('searchList')
</script>