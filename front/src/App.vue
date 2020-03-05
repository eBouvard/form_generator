<template>
  <v-app>
    <AppWrapper></AppWrapper>
  </v-app>
</template>

<script>
import AppWrapper from "@/views/AppWrapper.vue";

export default {
  name: "App",

  components: {
    AppWrapper
  },

  data: () => ({
    //
  }),

  created() {
    this.$vuetify.theme.dark = true;
    this.$vuetify.theme.light = true;
  }
};
</script>
