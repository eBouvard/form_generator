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
        dark: {
          primary: colors.lime.darken4,
          secondary: colors.lime.lighten1,
          accent: colors.lime.accent1,
        },
      },
    },});
