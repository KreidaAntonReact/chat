declare module "vue_sidebar/sidebar" {
    import { DefineComponent } from "vue";
    const SidebarApp: DefineComponent<{}, {}, any>;
    export default SidebarApp;
}

declare module 'vue_sidebar/vue' {
    export {createApp} from 'vue';
}
