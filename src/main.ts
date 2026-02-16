import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// PrimeVue
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import Aura from '@primevue/themes/aura'

// PrimeVue styles
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

// App global styles
import './styles/theme.css'
import './styles/animation.css'
import './styles/image.css'
/*import 'primevue/resources/primevue.min.css'
*/
import 'primeicons/primeicons.css'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: '.my-app-dark',
      cssLayer: false
    }
  }
})
app.use(ToastService)

app.mount('#app')
