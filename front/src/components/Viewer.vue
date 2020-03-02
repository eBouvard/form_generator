<template>
  <v-container fluid>
    <!-- 
      <v-form id="load"
        >
        <v-btn block color="primary" @click="loadForm" dark>Charger formulaire numéro</v-btn>
        <v-text-field
          label="Identifiant"
          outlined
          id="opord_id"
        ></v-text-field>
      </v-form>
      <h1>Formulaire {{myTitle}}</h1>
      <v-form id="to_print">
        <v-form-base :value="myValue" :schema="mySchema" />
    </v-form>
    -->
  </v-container>
</template>

<script>
//import template from "../assets/opord_template.json";
import api from "@/service/api";

export default {
  name: "Viewer",
  components: {  },
  data() {
    return {
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
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>