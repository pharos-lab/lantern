<template>
    <Transition>
        <div 
          v-if="dialog.isOpen.value" 
          class="l-dialog-overlay fixed inset-0 bg-black/50 z-50 flex items-center justify-center m-0"
          @click.self="dialog.close"
          @keyup.esc="close"
          tabindex="0"
          :data-open="dialog.isOpen.value"
        >
            <div class="l-dialog-content bg-white rounded" :class="pharos.theme.padding">
                <slot></slot>
            </div>
        </div>
    </Transition>
</template>
  
<script setup>
import { inject } from 'vue'

const dialog = inject('dialog')  

const pharos = inject('pharos')
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
  