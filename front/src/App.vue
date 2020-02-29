<template>
  <v-app>
    <v-navigation-drawer app mini-variant permanent>
      <Menu></Menu>
    </v-navigation-drawer>

    <v-app-bar app>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
    </v-footer>
  </v-app>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
  name: "App",

  components: {
    Menu
  },

  data: () => ({
    //
  }),

  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
