<script lang="ts" setup>
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline';
import { ref, defineEmits, defineProps } from 'vue';

const { isHorizon, defaultValue } = defineProps({
  isHorizon: {
    type: Boolean,
    required: true,
  },
  defaultValue: {
    type: Boolean,
    default: false,
  }
});
const emits = defineEmits(['toggle:update']);
const isActive = ref(defaultValue ?? false);

const handleOnClick = (value: boolean) => {
  isActive.value =  value;
  emits('toggle:update', isActive.value);
};
</script>


<template>
  <div
    class="sidebar:bg-gray-400 sidebar:rounded-full sidebar:p-1
    sidebar:cursor-pointer sidebar:shadow sidebar:border sidebar:transition-colors"
    :class="{
      'sidebar:bg-gray-200 sidebar:border sidebar:border-gray-100': isActive,
      'sidebar:w-20 sidebar:h-10': isHorizon,
      'sidebar:w-10 sidebar:h-20': !isHorizon
    }"
    @click="handleOnClick(!isActive)"
  >
    <div
      class="sidebar:relative sidebar:h-full sidebar:w-full sidebar:flex"
      :class="{
        'sidebar:justify-start': isHorizon,
        'sidebar:items-end': !isHorizon,
        'sidebar:justify-end': isHorizon && isActive,
        'sidebar:items-start': !isHorizon && isActive
      }"
    >
      <MoonIcon
        class="sidebar:w-8 sidebar:h-8 sidebar:absolute
      sidebar:top-0 sidebar:pointer-events-none
      sidebar:z-10 sidebar:p-1"
        :class="{'sidebar:fill-orange-200': isActive}"
      />
      <div
        :class="{'sidebar:bg-gray-500': isActive}"
        class="sidebar:w-8 sidebar:transition-all
      sidebar:h-8 sidebar:bg-gray-200 sidebar:rounded-full sidebar:hover:h-10"
      />
      <SunIcon
        class="sidebar:w-8 sidebar:h-8 sidebar:absolute
      sidebar:top-full sidebar:pointer-events-none
      sidebar:z-10 sidebar:p-1 sidebar:translate-y-[-100%]"
        :class="{'sidebar:fill-orange-200': !isActive}"
      />
    </div>
  </div>
</template>


<script lang="ts">
export default {
  name: 'Toggle',
};
</script>
