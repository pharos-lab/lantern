import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'

import { lantern } from './library'
import { pharos } from '@/themes/pharos.js'

createApp(App).use(lantern, {
    theme: pharos
}).mount('#app')
