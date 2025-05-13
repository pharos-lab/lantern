<template>
    <div class="l-dialog-trigger inline-block"  @click="dialog.open">
        <slot></slot>
    </div>
  </template>
  
  <script setup>
  import { inject } from 'vue'
  
  const dialog = inject('dialog')
  </script>
  
  <style scoped>
  /* Ajouter des styles pour le bouton déclencheur */
  </style>
  