import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';

import Dropdown from 'primevue/dropdown';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';  

createApp(App)
.use(PrimeVue)
.component('Dropdown', Dropdown)
.mount('#app')
