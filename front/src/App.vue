<template>
  <v-app>
    <AppWrapper v-if="auth"></AppWrapper>
    <Auth v-else v-on:authentified="testAuth"></Auth>
  </v-app>
</template>

<script>
//TODO Add a timer to store to auth for a certain time
import AppWrapper from "@/views/AppWrapper.vue";
import Auth from "@/views/Auth.vue";
import api from "@/service/api.js";
import sha1 from "@/service/sha1.js";

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
      const data = {"hashed_pass": sha1(val)}; 
      console.log(data);
      api()
        .post("/auth", data)
        .then(ret => {
          console.log(ret);
          this.auth = ret.data;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
