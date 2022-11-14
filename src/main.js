import {
    createApp
} from 'vue'
import './assets/sass/main.scss';
import App from './App.vue'
/* import the fontawesome core */
import {
    library
} from '@fortawesome/fontawesome-svg-core';
import {
    faPhone
} from "@fortawesome/free-solid-svg-icons";
import {
    FontAwesomeIcon
} from "@fortawesome/vue-fontawesome";



library.add(faPhone);
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')