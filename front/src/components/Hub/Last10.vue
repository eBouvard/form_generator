<template>
  <v-container fluid >
    <v-data-table
      :headers="headers"
      :items="forms"
      :items-per-page="10"
      class="elevation-1  text-truncate "
      :loading="loading"
      loading-text="Chargement en cours..."
      dense
      hide-default-footer
    >
      <template v-slot:item.open="{ item }">
        <v-btn class="ma-2" color="primary" icon x-small right>
          <v-icon  v-on:click="openItem(item.id)">mdi-eye-outline</v-icon>
        </v-btn>
      </template>
    </v-data-table>
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
        { text: "Auteur", value: "author" },
        { text: "Date", value: "date" },
        { text: "", value: "open" }
      ],
      forms: [],
      loading: true
    };
  },
  methods: {
    init() {
      api()
        .get("/read/last/" + this.$store.state.template)
        .then(ret => {
          const raw = ret.data;
          const array = [];
          raw.forEach(element => {
            const date = moment(element.data.date).fromNow();
            const newline = {
              id: element.id,
              title: element.data.title,
              author: element.data.author,
              date: date,
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
