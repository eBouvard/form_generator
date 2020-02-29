<template>
  <v-app>
    <NavDrawer></NavDrawer>

    <v-app-bar app></v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import NavDrawer from "@/views/NavDrawer.vue";

export default {
  name: "App",

  components: {
    NavDrawer
  },

  data: () => ({
    //
  }),

  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
