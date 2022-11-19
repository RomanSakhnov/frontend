import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

const app = createApp(App);
app.component("v-select", vSelect);
app.use(store).use(router).mount("#app");
