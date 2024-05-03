import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { globalCookiesConfig } from "vue3-cookies";

import App from './App.vue'
import router from './router'


globalCookiesConfig({
    expireTimes: "30d",
    secure: true,
});

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
