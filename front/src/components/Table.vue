<template>
  <v-container fluid>
    <v-data-table :headers="headers" :items="forms" :items-per-page="100" class="elevation-1"></v-data-table>
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
        { text: "Data", value: "content" }
      ],
      forms: []
    };
  },
  mounted() {
    api()
      .get("/read/all/json")
      .then(ret => {
        const raw = ret.data;
        const array = [];
        raw.forEach(element => {
          console.log(element);
          const newline = {
            id: element.id,
            title: element.data.title,
            authors: element.data.author,
            date: element.data.date,
            content: element.data.content
          };
          array.push(newline);
        });
        this.forms = array;
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>
