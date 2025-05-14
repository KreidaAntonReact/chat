<script setup lang="ts">
import {defineProps} from 'vue';

import { useTheme } from '@/features/switch-theme/model';
import { Toggle } from '@/shared';

const { handleChangeTheme, theme } = useTheme();

const { isHorizonToggle } = defineProps({
  isHorizonToggle: {
    type: Boolean,
    required: true,
  },
});

</script>

<template>
  <Toggle
    :is-horizon="isHorizonToggle"
    :default-value="theme === 'dark' ? true : false"
    @toggle:update="(isActive) => handleChangeTheme(isActive)"
  />
</template>

<script lang="ts">
export default {
  name: 'SwitchTheme',
};
</script>
