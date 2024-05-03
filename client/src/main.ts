import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { globalCookiesConfig } from "vue3-cookies";

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPlus, faChartSimple } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faPlus)
library.add(faChartSimple)

import App from './App.vue'
import router from './router'


globalCookiesConfig({
    expireTimes: "30d",
});

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
