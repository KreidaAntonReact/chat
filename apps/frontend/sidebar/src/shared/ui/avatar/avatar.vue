<script setup lang="ts">
import { UserCircleIcon } from '@heroicons/vue/24/outline';
const {src} = defineProps({
  src: {
    type: String,
    default: '',
  }
});

</script>


<template>
  <div
    class="sidebar:w-10 sidebar:h-10 sidebar:rounded-full sidebar:bg-brown/30
    sidebar:flex sidebar:items-center sidebar:justify-center
    sidebar:dark:bg-dark sidebar:cursor-pointer"
  >
    <img
      v-if="src"
      :src="src"
      class="sidebar:w-full sidebar:h-full sidebar:rounded-full
        sidebar:object-cover sidebar:object-center"
    />
    <UserCircleIcon v-else class="sidebar:w-full sidebar:h-full sidebar:dark:stroke-white sidebar:stroke-white/80" />
  </div>
</template>

<script lang="ts">

export default {
  name: 'Avatar',
};
</script>
