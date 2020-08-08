import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import fr from 'vuetify/es5/locale/fr';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { fr },
    current: 'fr',
  },
  theme: {
     themes: {
      dark:  {
        primary: '#300000',
        secondary: colors.indigo.darken4,
        tertiary: colors.grey.darken4
      },
      light: {
        primary: colors.indigo.darken4,
        secondary: colors.blue.darken3,
        tertiary: colors.grey.lighten5
      }
    },
  },
})
