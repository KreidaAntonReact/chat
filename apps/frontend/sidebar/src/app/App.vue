<script setup lang="ts">
import { defineComponent } from 'vue';

import { Sidebar } from '@/widgets';
</script>


<template>
  <div class="sidebar:min-w-20 sidebar:w-16 sidebar:h-full">
    <Sidebar />
  </div>
</template>

<script lang="ts">
export default defineComponent({ name: 'App' });
</script>
