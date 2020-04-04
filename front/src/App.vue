<template>
  <v-app>
    <AppWrapper v-if="auth"></AppWrapper>
    <Auth v-else v-on:authentified="testAuth"></Auth>
  </v-app>
</template>

<script>
import AppWrapper from "@/views/AppWrapper.vue";
import Auth from "@/views/Auth.vue";
import api from "@/service/api.js";

export default {
  name: "App",

  components: {
    AppWrapper,
    Auth
  },

  data() {
    return {
      auth: false
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
  },
  methods: {
    testAuth(val) {
      this.auth = val;
    }
  }
};
</script>
