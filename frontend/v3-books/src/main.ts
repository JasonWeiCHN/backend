import './assets/main.css'
import { createHead } from '@unhead/vue'
import 'github-markdown-css'
import 'highlight.js/styles/default.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const head = createHead()
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(head)

app.mount('#app')
