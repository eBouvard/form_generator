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
        primary: colors.green.darken4,
        secondary: colors.orange.accent1,
        tertiary: colors.brown.darken1,
      },
      light: {
        primary: colors.indigo.darken4,
        secondary: colors.blue.darken3,
        tertiary: colors.pink.lighten5
      }
    },
  },
})
