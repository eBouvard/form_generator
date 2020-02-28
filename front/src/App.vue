<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    j0: null,
    j1: null,
    j2: null,
    j3: null,
    j4: null,
    j5: null,
    j6: null,
    j7: null,
    j8: null,
    j9: null,
    je: null,
    switch: null,
  }),

  created() {
    this.$vuetify.theme.dark = true;
    // Light theme
    this.$vuetify.theme.themes.light.primary = "#9caf98";
    this.$vuetify.theme.themes.light.primary = "#4c5540";

    // Dark theme
    this.$vuetify.theme.themes.dark.primary = "#765d47";
    this.$vuetify.theme.themes.dark.primary = "#4c5540";
  }
};
</script>

<style>
html {
  overflow-y: hidden;
}
</style>