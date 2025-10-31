import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'
import DialogService from 'primevue/dialogservice'

import { VueQueryPlugin } from '@tanstack/vue-query'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.use(DialogService)
app.use(VueQueryPlugin)

app.mount('#app')
