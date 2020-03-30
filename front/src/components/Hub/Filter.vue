
<template>
  <v-card max-width="500" class="mx-auto">
    <v-list subheader>
      <v-subheader>Formulaires</v-subheader>
      <v-list-item v-for="item in items" :key="item.title" @click="templateSelected(item.value)">
        <v-list-item-avatar>
          <img :src="item.avatar"  alt="avatar" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
        <v-list-item-icon>
          <v-icon :color="item.active ? 'primary' : 'secondary'">mdi-plus</v-icon>
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
      items: [
        {
          active: true,
          title: "OPORD - Ecole de Guerre",
          value: 'opord',
          avatar:
            "https://ecoledeguerre.paris/wp-content/uploads/2018/07/Logo_Ecole_de_guerre_def-accueil.png"
        },
        {
          title: "COVID-19 - Rapports journaliers",
          value: 'covid',
          avatar:
            "https://www.bswrehab.com/-/media/project/baylorrehab/dotcom/usa/images/about-us/in-the-news/covid19visitationpolicy.jpg?h=256&la=en&w=256&t=20200316170652&hash=D73E2D3341AB5C78C308B47EA5D10F5E1068B43D"
        }
      ]
    };
  },
  methods: {
    templateSelected(name) {
      this.$store.commit("SET_TEMPLATE", name);
    }
  }
};
</script>
