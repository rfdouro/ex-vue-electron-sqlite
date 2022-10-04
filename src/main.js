import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

import {createPinia} from 'pinia'

const pinia = createPinia();

createApp(App).use(pinia).use(Quasar, quasarUserOptions).use(router).mount('#app')
