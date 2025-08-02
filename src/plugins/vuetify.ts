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
    background: '#F6E8EA',
    primary: '#22181C',
    primaryLight: '#3C2A31',
    highlight: '#FF5C5F',
    backgroundContrast: '#F45B69'
  },
  variables: {
    'primary-font': 'Playfair Display, serif',
    'secondary-font': '"Rubik", sans-serif',
    'title-font': '"Outfit", sans-serif',
    'space-section--xs': '50px',
    'space-section--sm': '70px',
    'space-section--md': '100px',
    'gap-elements-outside--xs': '40px',
    'gap-elements-outside--sm': '60px',
    'gap-elements-inside--xs': '30px',
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'lightTheme',
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
