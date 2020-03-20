
<template>
    <v-card
    max-width="500"
    class="mx-auto"
  >
  <v-list subheader>
    <v-subheader>Poste de Commandement</v-subheader>
    <v-list-item v-for="item in items" :key="item.title" avatar @click="changeView">
      <v-list-item-avatar>
         <img :src="item.img">
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
          title: "Barkhane",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/%C3%89cusson_de_l%27Op%C3%A9ration_Barkhane.svg/1200px-%C3%89cusson_de_l%27Op%C3%A9ration_Barkhane.svg.png"
        },
        {
          active: true,
          title: "Ecole de Guerre",
          img: "https://ecoledeguerre.paris/wp-content/uploads/2018/07/Logo_Ecole_de_guerre_def-accueil.png"
        },
        { title: "Sentinel", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Embl%C3%A8me_de_l%27Operation_Sentinelle.svg/1200px-Embl%C3%A8me_de_l%27Operation_Sentinelle.svg.png" }
      ]
    };
  },
  methods: {
    changeView(filter) {
      console.log(filter);
    }
  }
};
</script>
