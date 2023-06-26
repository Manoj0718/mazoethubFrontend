import { createApp } from "vue";
import "./assets/sass/main.scss";
import App from "./App.vue";
import router from "./plugin/router.js";
import { createHead } from "@vueuse/head";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const head = createHead();
library.add(faPhone);
createApp(App)
  .use(head)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
