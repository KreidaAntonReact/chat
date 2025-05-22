declare module "sidebar/sidebar" {
    import { DefineComponent } from "vue";
    const SidebarApp: DefineComponent<{}, {}, any>;
    export default SidebarApp;
}

declare module 'sidebar/vue' {
    export {createApp} from 'vue';
}
