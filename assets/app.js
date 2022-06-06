import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import 'primevue/resources/themes/tailwind-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import store from './store'
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import MenuBar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import MegaMenu from 'primevue/megamenu';
import Avatar from 'primevue/avatar';
import Divider from 'primevue/divider';

import './styles/main.scss';

createApp(App)
    .use(store)
    .use(router)
    .use(PrimeVue)
    .component('Dialog', Dialog)
    .component('Button', Button)
    .component('Menubar', MenuBar)
    .component('MegaMenu', MegaMenu)
    .component('InputText', InputText)
    .component('Avatar', Avatar)
    .component('Divider', Divider)
    .mount('#app');
