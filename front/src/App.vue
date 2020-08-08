<template>
  <v-app>
    <AppWrapper></AppWrapper>
  </v-app>
</template>

<script>
import AppWrapper from "@/views/AppWrapper.vue";
import api from "@/service/api.js";

export default {
  name: "App",

  components: {
    AppWrapper
  },

  data() {
    return {
    };
  },
  created() {
    this.$vuetify.theme.dark = this.$store.getters.blackTheme;
    api()
      .post("/api/get/read/all/template")
      .then(ret => {
        const raw = ret.data;
        const list = {};
        raw.forEach(element => {
          list[element.name] = element.data;
        });
        this.$store.commit("SET_TEMPLATELIST", list);
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>
