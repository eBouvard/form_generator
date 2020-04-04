<template>
  <v-data-table
    :headers="headers"
    :items="forms"
    :items-per-page="10"
    class="elevation-1"
    :loading="loading"
    loading-text="Chargement en cours..."
    dense
    hide-default-footer
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>10 dernières entrées</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          dark
          class="mb-2"
          v-on:click="$router.push({path: '/list/order'})"
        >Tout voir</v-btn>
      </v-toolbar>
    </template>

    <template v-slot:item.open="{ item }">
      <v-btn class="ma-1" v-on:click="openItem(item.id)" icon>
        <v-icon small>mdi-eye-outline</v-icon>
      </v-btn>
    </template>
  </v-data-table>
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
        { text: "Auteur", value: "author" },
        { text: "Date", value: "date" },
        { text: "", value: "open", sortable: false }
      ],
      forms: [],
      loading: true
    };
  },
  methods: {
    init() {
      console.log("INIT...\n\n");
      api()
        .post("/api/get/read/last/" + this.$store.state.template, {})
 //       .get("/read/last/" + this.$store.state.template)
        .then(ret => {
          console.log(ret);
          const raw = JSON.parse(ret.data);
          const array = [];
          raw.forEach(element => {
            const date = moment(element.data.date).fromNow();
            const newline = {
              id: element.id,
              title: element.data.title,
              author: element.data.author,
              date: date
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

<style>
.last-orders td {
  max-width: 15vw;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>