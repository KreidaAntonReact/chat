<script setup lang="ts">
import { defineComponent } from 'vue';

import { Sidebar } from '@/widgets';
</script>


<template>
  <div class="min-w-20 w-16 h-full">
    <Sidebar />
  </div>
</template>

<script lang="ts">
export default defineComponent({ name: 'App' });
</script>
