import './assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import '@tomtom-international/web-sdk-maps/dist/maps.css';

const app = createApp(App)

const LARAVEL_API_KEY = 's8eS5xsQthKDZgYOwPkJdNTFYYJxaWnz';

app.config.globalProperties.$tomtom = import('@tomtom-international/web-sdk-maps');

app.config.globalProperties.$tomtom.apiKey = LARAVEL_API_KEY;

app.use(router)

app.mount('#app')
