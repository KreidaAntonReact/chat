<script setup lang="ts">
import '@packages/event-bas';
import { AtSymbolIcon } from '@heroicons/vue/24/outline';

import { SwitchTheme } from '@/features';
import { links } from '@/widgets/sidebar/lib';


const onClickLink = (path: string) => window.EventBas.emit('change-router', { to: path });

</script>


<template>
  <div class="sidebar:w-full sidebar:h-screen sidebar:dark:bg-dark sidebar:bg-black/80 sidebar:shadow-2xl">
    <div class="sidebar:w-full sidebar:h-full sidebar:px-3 sidebar:py-6 sidebar:flex sidebar:flex-col">
      <div class="sidebar:flex sidebar:justify-center">
        <AtSymbolIcon class="sidebar:w-8 sidebar:h-8 sidebar:text-white" />
      </div>

      <nav class="sidebar:flex-[1_0_auto] sidebar:mt-24 sidebar:text-white">
        <ul class="sidebar:w-full sidebar:h-full sidebar:flex sidebar:flex-col sidebar:gap-4">
          <li
            v-for="(link, index) in links"
            :key="index"
            class="sidebar:flex sidebar:flex-col sidebar:gap-1 sidebar:text-center sidebar:cursor-pointer"
            @click="onClickLink(link.to)"
          >
            <component :is="link.icon" class="sidebar:w-8 sidebar:h-8 sidebar:m-[0_auto]" />
            {{ link.name }}
          </li>
        </ul>
      </nav>

      <div class="sidebar:m-[0_auto] sidebar:flex sidebar:flex-col gap-3">
        <SwitchTheme :is-horizon-toggle="false" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Sidebar',
};
</script>
