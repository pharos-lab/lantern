import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { defaultTheme } from './themes/default'

import { lantern } from './plugin'
createApp(App).use(lantern, {
    theme: defaultTheme,
}).mount('#app')
