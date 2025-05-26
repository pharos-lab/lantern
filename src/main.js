import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { lantern } from './library'
import { pharos } from '@/themes/pharos.js'

createApp(App).use(lantern, {
    theme: pharos,
    defaultColor: 'red',
    defaultVariant: 'light'
}).mount('#app')
