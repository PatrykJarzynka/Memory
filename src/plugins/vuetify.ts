/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import {createVuetify, type ThemeDefinition} from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#efebdf',
    primary: '#6b5336',
    primaryLight: '#886944',
    highlight: '#BE753A',

  },
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      lightTheme,
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})
