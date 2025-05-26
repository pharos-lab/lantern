<template>
    <div class="l-dialog-trigger inline-block"  @click="dialog.open" :class="pharos.getStaticClass('DialogTrigger')">
        <slot></slot>
    </div>
  </template>
  
  <script setup>
  import { inject } from 'vue'
  
  const dialog = inject('dialog')
  const pharos = inject('pharos')
  </script>
  
  <style scoped>
  /* Ajouter des styles pour le bouton déclencheur */
  </style>
  