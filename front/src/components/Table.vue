<template>
  <v-container fluid>
    <v-data-table
      :headers="headers"
      :items="forms"
      :items-per-page="10"
      class="elevation-1"
      :loading="loading"
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
       <v-snackbar
      v-model="snackbar"
      :timeout=2000
    >
      {{ snackText }}
      <v-btn text @click="snackbar = false">
        Fermer
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import api from "@/service/api";
import moment from 'moment';
moment.locale('fr');

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
      forms: [],
      snackbar: false,
      snackText: "Element supprimé",
      loading: true
    };
  },
  methods: {
    init() {
      api().get("/read/all").then(ret => {
          const raw = ret.data;
          const array = [];
          raw.forEach(element => {
            const date = moment(element.data.date).fromNow()
            const score = Math.ceil(element.data.conformity * 100);
            const newline = {
              id: element.id,
              title: element.data.title,
              authors: element.data.author,
              date: date,
              score: score,
              content: element.data.content
            };
            array.push(newline);
          });
          this.forms = array;
          this.loading = false
        })
        .catch(e => {console.log(e);});
    },
    deleteItem(id) {
      if(confirm('Etes-vous sûrs de supprimer cet ordre ?')) {
        api().get("/delete/json/" + id).then(() => {
            this.snackbar = true
          }).catch(e => {console.log(e)});
          this.forms = []
          this.init()
      }
    },
    openItem(id) {
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
