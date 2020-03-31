
<template>
  <v-card max-width="500" class="mx-auto">
    <v-list subheader>
      <v-subheader>Formulaires</v-subheader>
      <v-list-item v-for="item in items" :key="item.title" @click="templateSelected(item.name)">
        <v-list-item-avatar>
          <img
            v-if="{}.hasOwnProperty.call(avatars, item.name)"
            :src="avatars[item.name]"
            alt="avatar"
          />
          <v-icon v-else>mdi-book</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="item.name.toUpperCase()"></v-list-item-title>
        </v-list-item-content>
        <v-list-item-icon>
          <v-icon
            v-if="item.name == $store.getters.template"
            :color="($store.state.blackTheme) ? 'white' : 'primary'"
          >mdi-checkbox-blank-circle</v-icon>
          <v-icon v-else :color="'grey'">mdi-checkbox-blank-circle-outline</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import api from "@/service/api";

export default {
  name: "FilterList",
  data() {
    return {
      items: [],
      avatars: {
        opord:
          "https://ecoledeguerre.paris/wp-content/uploads/2018/07/Logo_Ecole_de_guerre_def-accueil.png",
        covid:
          "https://www.bswrehab.com/-/media/project/baylorrehab/dotcom/usa/images/about-us/in-the-news/covid19visitationpolicy.jpg?h=256&la=en&w=256&t=20200316170652&hash=D73E2D3341AB5C78C308B47EA5D10F5E1068B43D"
      }
    };
  },
  methods: {
    templateSelected(name) {
      this.$store.commit("SET_TEMPLATE", name);
    },
    loadForm() {
      var request = "/read/all/template";
      api()
        .get(request)
        .then(ret => {
          this.items = ret.data;
          console.log(ret);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.loadForm();
  }
};
</script>
