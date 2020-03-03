<template>
  <v-container fluid>
    <v-form id="load">
      <v-btn block color="primary" @click="loadForm" dark>Charger formulaire numéro</v-btn>
      <v-text-field label="Identifiant" outlined id="opord_id"></v-text-field>
    </v-form>
    <div v-for="item in template" :key="item.label">
      <h2>{{ item.label }}</h2>
<!--      <p v-for="content in data.content.main" :key="content">Coucou</p> -->
    </div>
  </v-container>
</template>

<script>
import template from "@/assets/opord_template.json";
import api from "@/service/api";

export default {
  name: "Viewer",
  components: {},
  data() {
    return {
      template: template,
      data: null
    };
  },
  methods: {
    loadForm() {
      var request = "/read/" + document.getElementById("opord_id").value;
      api()
        .get(request)
        .then(ret => {
          console.log(ret);
          console.log(this.myValue);
          this.data = ret;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>