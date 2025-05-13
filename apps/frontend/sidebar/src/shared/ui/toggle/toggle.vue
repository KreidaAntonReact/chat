<script lang="ts" setup>
import { ref, defineEmits, defineProps } from 'vue';

const { isHorizon } = defineProps<{
  isHorizon: boolean
}>();
const emits = defineEmits(['toggle:update']);
const isActive = ref(false);

const handleOnClick = (value: boolean) => {
  isActive.value =  value;
  emits('toggle:update', isActive.value);
};
</script>


<template>
  <div
    class="sidebar:flex sidebar:bg-gray-600 sidebar:rounded-full sidebar:p-1
    sidebar:cursor-pointer"
    :class="{
      'sidebar:w-18 sidebar:h-10 sidebar:justify-start': isHorizon,
      'sidebar:w-10 sidebar:h-18 sidebar:items-end sidebar:justify-center': !isHorizon
    }"
    @click="handleOnClick(!isActive)"
  >
    <div
      :class="{
        'sidebar:-translate-y-8': isActive && !isHorizon,
        'sidebar:translate-x-8': isActive && isHorizon
      }"
      class="sidebar:w-8 sidebar:transition-all sidebar:h-8 sidebar:bg-white sidebar:rounded-full"
    />
  </div>
</template>


<script lang="ts">
export default {
  name: 'Toggle',
};
</script>
