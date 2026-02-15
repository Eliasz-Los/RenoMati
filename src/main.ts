import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// PrimeVue
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'

// PrimeVue styles
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
// import '@primevue/themes/aura/theme.css'

// App global styles
import './assets/theme.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(PrimeVue)
app.use(ToastService)

app.mount('#app')
