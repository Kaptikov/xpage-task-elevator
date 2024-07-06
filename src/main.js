import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.scss'
import { createPinia } from 'pinia'

const app = createApp(App)

const pinia = createPinia()

app.use(pinia).mount('#app')
