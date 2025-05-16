<script setup lang="ts">
import { defineComponent } from 'vue';

import SidebarWrapper from '@/widgets/sidebar/ui/sidebar-async-wrapper.vue';
</script>


<template>
  <div class="sidebar:min-w-20 sidebar:w-16 sidebar:h-full">
    <SidebarWrapper />
  </div>
</template>

<script lang="ts">
export default defineComponent({ name: 'App' });
</script>
