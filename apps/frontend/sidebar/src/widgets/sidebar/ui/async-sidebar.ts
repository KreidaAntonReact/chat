import { defineAsyncComponent } from 'vue';

import Loading from './sidebar-skeleton.vue';


export const AsyncSidebar = defineAsyncComponent({
  loader: () => import('./sidebar.vue'),
  loadingComponent: Loading
});
