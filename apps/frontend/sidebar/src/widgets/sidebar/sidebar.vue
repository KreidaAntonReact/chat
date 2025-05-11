<script setup lang="ts">
import { LogoIcon } from '@/shared';
</script>


<template>
  <div class="sidebar:w-full sidebar:h-screen sidebar:bg-dark">
    <div class="sidebar:w-full sidebar:h-full sidebar:px-3 sidebar:py-6 sidebar:flex sidebar:flex-col">
      <LogoIcon />
      <div class="sidebar:flex-[1_0_auto] sidebar:mt-16 sidebar:text-white">
        навигация
      </div>
      <div class="sidebar:text-white sidebar:m-[0_auto]">
        footer
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Sidebar',
};
</script>
