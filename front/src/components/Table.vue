<template>
  <v-container>
    <v-data-table
      :key="loading"
      :headers="headers"
      :items="forms"
      :items-per-page="10"
      class="elevation-1"
      :loading="loading"
      loading-text="Chargement en cours..."
    >
      <template v-slot:item.score="{ item }">
        <v-progress-linear v-if="item.score" color="primary" :value="item.score" rounded></v-progress-linear>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn class="pa-1 small" v-on="on" v-on:click="openItem(item.id)" icon>
              <v-icon small>mdi-eye-outline</v-icon>
            </v-btn>
          </template>
          <span>Afficher</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn class="pa-1 small" v-on="on" v-on:click="updateItem(item.id)" icon>
              <v-icon small>mdi-pencil</v-icon>
            </v-btn>
          </template>
          <span>Modifier</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn class="pa-1 small" v-on="on" v-on:click="newFromItem(item.id)" icon>
              <v-icon small>mdi-arrow-right-bold</v-icon>
            </v-btn>
          </template>
          <span>Créer à partir de</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn class="pa-1 small" v-on="on" v-on:click="copyItem(item.id)" icon>
              <v-icon small>mdi-content-copy</v-icon>
            </v-btn>
          </template>
          <span>Créer une copie de</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              class="pa-1 small"
              v-on="on"
              v-on:click="deleteCheck = { check: true, id: item.id }"
              icon
            >
              <v-icon small>mdi-trash-can-outline</v-icon>
            </v-btn>
          </template>
          <span>Supprimer</span>
        </v-tooltip>
      </template>
    </v-data-table>
    <v-dialog v-model="deleteCheck.check" max-width="900">
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
        { text: "Titre", value: "title" },
        { text: "Auteur", value: "authors" },
        { text: "Date", value: "date" },
        { text: "Score", value: "score" },
        { text: "Actions", value: "actions", sortable: false }
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
      this.forms = [];
      this.loading = true;
      api()
        .post("/api/get/read/all/" + this.$store.getters.template)
        .then(ret => {
          const raw = ret.data;
          const array = [];
          raw.forEach(element => {
            const date = moment(element.data.date).fromNow();
            console.log(element.data.conformity)
            //Supprimer le x4
            const score = Math.ceil(element.data.conformity * 100) * 4;
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
        .post("/api/get/delete/" + this.$store.getters.template + "/" + id)
        .then(() => {
          this.snackbar = true;
          this.deleteCheck = { check: false, id: null };
          this.init();
        })
        .catch(e => {
          console.log(e);
        });
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
    newFromItem(id) {
      this.$router.push({
        path: "/new/order/2/" + id
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
