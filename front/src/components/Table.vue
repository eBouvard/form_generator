<template>
  <v-container fluid>
    <v-data-table
      :headers="headers"
      :items="forms"
      :items-per-page="10"
      class="elevation-1"
      :loading="loading"
      loading-text="Chargement en cours...">
      <template v-slot:item.score="{ item }">
        <v-progress-linear v-if="item.score" color="primary" :value="item.score" rounded></v-progress-linear>
      </template>
      <template v-slot:item.open="{ item }">
        <v-btn class="ma-2" icon small right>
          <v-icon v-on:click="openItem(item.id)">mdi-eye-outline</v-icon>
        </v-btn>
      </template>
      <template v-slot:item.modify="{ item }">
        <v-btn class="ma-2" icon small right>
          <v-icon v-on:click="updateItem(item.id)">mdi-pencil-plus</v-icon>
        </v-btn>
      </template>
      <template v-slot:item.copy="{ item }">
        <v-btn class="ma-2" icon small right>
          <v-icon v-on:click="copyItem(item.id)">mdi-content-copy</v-icon>
        </v-btn>
      </template>
      <template v-slot:item.delete="{ item }">
        <v-btn class="ma-2" icon small right>
          <v-icon v-on:click="deleteCheck = { check: true, id: item.id }">mdi-trash-can-outline</v-icon>
        </v-btn>
      </template>
    </v-data-table>

    <v-dialog v-model="deleteCheck.check">
      <v-card>
        <v-card-title class="headline">Confirmer la supression de l'ordre</v-card-title>
        <v-card-text>Cette action supprimera l'ordre de façon définitive.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="deleteCheck.check = false">Annuler</v-btn>
          <v-btn text @click="deleteItem(deleteCheck.id)">Valider</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbar" :timeout="2000">
      {{ snackText }}
      <v-btn text @click="snackbar = false">Fermer</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import api from "@/service/api";
import moment from "moment";
moment.locale("fr");

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
        { text: "", value: "open" },
        { text: "", value: "modify" },
        { text: "", value: "copy" },
        { text: "", value: "delete" }
      ],
      optionsList: [
        { title: "Ouvrir", action: this.openItem },
        { title: "Modifier", action: this.updateItem }
      ],
      forms: [],
      deleteCheck: { check: false, id: null },
      snackbar: false,
      snackText: "Element supprimé",
      loading: true
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
            const date = moment(element.data.date).fromNow();
            const score = Math.ceil(element.data.conformity * 100);
            const newline = {
              id: element.id,
              title: element.data.title,
              authors: element.data.author,
              date: date,
              score: score
            };
            array.push(newline);
          });
          this.forms = array;
          this.loading = false;
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteItem(id) {
      api()
        .get("/delete/json/" + id)
        .then(() => {
          this.snackbar = true;
        })
        .catch(e => {
          console.log(e);
        });
      this.deleteCheck = { check: false, id: null };
      this.forms = [];
      this.init();
    },
    openItem(id) {
      this.$router.push({
        path: "/view/order/" + id
      });
    },
    updateItem(id) {
      this.$router.push({
        path: "/update/order/" + id
      });
    },
    copyItem(id) {
      this.$router.push({
        path: "/new/order/1/" + id
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>
