import { createApp } from 'vue'
import { Quasar, Notify } from 'quasar'

// Importar los estilos de Quasar y los iconos de Material Design (opcional pero recomendado)
import 'quasar/dist/quasar.css'
import '@quasar/extras/material-icons/material-icons.css'

import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)

app.use(Quasar, {
  plugins: { Notify },
})
app.use(router)

app.mount('#app')