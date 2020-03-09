<template>
  <v-container fluid>
    <v-data-table
      :headers="headers"
      :items="forms"
      :items-per-page="10"
      class="elevation-1"
      loading
      loading-text="Chargement en cours..."
    >
      <template v-slot:item.score="{ item }">
        <v-progress-linear color="primary" :value="item.score" rounded></v-progress-linear>
      </template>
      <template v-slot:item.open="{ item }">
        <v-btn class="ma-2" small v-on:click="openItem(item.id)" outlined primary>Ouvrir</v-btn>
      </template>
      <template v-slot:item.delete="{ item }">
        <v-btn class="ma-2" icon small right>
          <v-icon v-on:click="deleteItem(item.id)">mdi-trash-can-outline</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import api from "@/service/api";

export default {
  name: "Table",
  data() {
    return {
      headers: [
        { text: "ID", value: "id" },
        { text: "Titre", value: "title" },
        { text: "Auteur", value: "authors" },
        { text: "Date", value: "date" },
        { text: "Score", value: "score" },
        { text: "Ouvrir", value: "open" },
        { text: "Supprimer", value: "delete" }
      ],
      forms: []
    };
  },
  methods: {
    init() {
      api()
        .get("/read/all")
        .then(ret => {
          const raw = ret.data;
          const array = [];
          raw.forEach(element => {
            const date = new Date(element.data.date);
            const score = Math.ceil(element.data.conformity * 100);
            const newline = {
              id: element.id,
              title: element.data.title,
              authors: element.data.author,
              date: date.toLocaleDateString("fr-FR"),
              score: score,
              content: element.data.content
            };
            array.push(newline);
            console.log(array);
          });
          this.forms = array;
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteItem(id) {
      console.log(id);
      api()
        .get("/delete/json/" + id)
        .then(ret => {
          console.log(ret);
        })
        .catch(e => {
          console.log(e);
        });
      this.init();
    },
    openItem(id) {
      console.log(id);
      this.$router.push({
        path: "/view/order/" + id
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>
