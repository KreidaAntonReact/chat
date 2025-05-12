<script lang="ts" setup>
import { ref } from 'vue';

const isActive = ref(false);

const handleOnClick = () => {
  isActive.value = !isActive.value;
};

</script>


<template>
  <div
    class="sidebar:w-10 sidebar:h-18 sidebar:flex sidebar:items-end
    sidebar:justify-center sidebar:bg-gray-600 sidebar:rounded-full sidebar:p-1
    sidebar:cursor-pointer"
    @click="handleOnClick"
  >
    <div
      :class="{'sidebar:-translate-y-8': isActive}"
      class="sidebar:w-8 sidebar:transition-all sidebar:h-8 sidebar:bg-white sidebar:rounded-full"
    />
  </div>
</template>


<script lang="ts">
export default {
  name: 'Toggle',
};
</script>
