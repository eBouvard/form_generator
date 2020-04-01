
<template>
  <v-card height="100%">
    <v-list subheader>
      <v-subheader>Formulaires</v-subheader>
      <v-list-item v-for="(item, index) in items" :key="index" @click="templateSelected(item)">
        <v-list-item-avatar>
          <img
            v-if="{}.hasOwnProperty.call(avatars, item)"
            :src="avatars[item]"
            alt="avatar"
          />
          <v-icon v-else>mdi-book</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="item.toUpperCase()"></v-list-item-title>
        </v-list-item-content>
        <v-list-item-icon>
          <v-icon
            v-if="item == $store.getters.template"
            :color="'primary'"
          >mdi-checkbox-blank-circle</v-icon>
          <v-icon v-else :color="'grey'">mdi-checkbox-blank-circle-outline</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "FilterList",
  data() {
    return {
      items: {},
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
    }
  },
  mounted() {
    this.items = Object.keys(this.$store.state.templateList);
  }
};
</script>
