<template>
  <div class="inline-block l-modal-trigger" @click="isOpen = true">
    <slot name="label">
      <LButton>
        {{ props.label ?? 'Add a label' }}
      </LButton>
    </slot>
  </div>

  <teleport to="body">
    <div
      class="
        l-modal
        absolute
        inset-0
        flex
        justify-center
        items-start
        pt-64
        bg-slate-500/50
      "
      v-show="isOpen"
      @click.self="isOpen = false"
    >
      <div class="l-modal-content w-2/3 opacity-100 bg-white relative">
        <XMarkIcon
          v-if="props.dismissable"
          @click="isOpen = false"
          class="right-2 absolute top-2 w-6 h-6 rounded"
          :class="closeColorClass"
        ></XMarkIcon>

        <div class="l-modal-header p-4">
          <slot name="header"></slot>
        </div>
        <div class="l-modal-body p-4">
          <slot></slot>
        </div>
        <div class="l-modal-footer p-4">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, computed } from 'vue';
import LButton from './LButton.vue';
import { useHoverSwitch } from './composables/hoverSwitch.js';
import { XMarkIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
  label: {
    type: String,
  },
  dismissable: {
    type: Boolean,
    default: true,
  },
});

const isOpen = ref(false);

const closeColorClass = computed(() => {
  return useHoverSwitch('gray', 'light');
});
</script>

<style scoped></style>
