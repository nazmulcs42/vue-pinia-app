import { createApp } from 'vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';

import App from './App.vue';
import router from './routes';

const app = createApp(App);
app.use(router);
app.mount('#app');