
<template>
    <v-card
    max-width="500"
    class="mx-auto"
  >
  <v-list subheader>
    <v-subheader>Poste de Commandement</v-subheader>
    <v-list-item v-for="item in items" :key="item.title" @click="changeView">
      <v-list-item-icon>
         <v-icon>mdi-tank</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item-content>
      <v-list-item-icon>
        <v-icon :color="item.active ? 'primary' : 'secondary'">mdi-eye-outline</v-icon>
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
          img: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
        },
        {
          active: true,
          title: "Ecole de Guerre",
          img: "/assets/cpoia.png"
        },
        { title: "Sentinel", img: "../../assets/logo.png" }
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
