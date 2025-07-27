/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import {createI18n} from 'vue-i18n'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Styles
import 'unfonts.css'
import '@/styles/animations.scss'

import pl from '@/locales/pl'
import en from '@/locales/en'


const messages = {
  pl,
  en,
}

const i18n = createI18n({
  allowComposition: true,
  locale: 'pl',
  fallbackLocale: 'en',
  messages,
})

const app = createApp(App);

registerPlugins(app);

app.use(i18n)
app.mount('#app')
