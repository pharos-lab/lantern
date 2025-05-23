<template>
  <ul 
    class="l-search-list-items overflow-hidden" 
    v-show="searchList.filteredItems.value.length"
    :class="[pharos.theme.components.SearchListItems, pharos.theme.colors[searchList.props.color]?.plain?.border]"
  >
      <li 
        v-for="item in searchList.filteredItems.value" 
        class="l-search-list-item cursor-pointer overflow-hidden"
      >

        <slot 
          v-bind="item"
          :key="item"
        ></slot>
      </li>
  </ul>
</template>

<script setup>
import { inject } from 'vue'

const searchList = inject('searchList')
const pharos = inject('pharos')

</script>

<style scoped>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all .5s ease-out;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(4px);
  /* transform: scale(0.95); */
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>