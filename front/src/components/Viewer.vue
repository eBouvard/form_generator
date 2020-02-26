<template>
  <v-container fluid>
    <v-form id="load">
      <v-text-field label="Numéro du formulaire" outlined id="opord_id"></v-text-field>
      <v-btn block color="primary" @click="loadForm" dark>Charger</v-btn>
    </v-form>
    <h1>Formulaire {{myTitle}}</h1>
    <v-form id="to_print">
      <v-form-base :value="myValue" :schema="mySchema" />
    </v-form>
  </v-container>
</template>

<script>
import VFormBase from "vuetify-form-base";
import template from "../assets/opord_template.json";
import empty from "../assets/opord.viewer.json";
import api from "@/service/api";

export default {
  name: "Viewer",
  components: { VFormBase },
  data() {
    return {
      myValue: empty,
      mySchema: template,
      myTitle: ""
    };
  },
  methods: {
    loadForm() {
      var request =
        "/read/" + document.getElementById("opord_id").value + "/json";
      api()
        .get(request)
        .then(ret => {
          console.log(ret);
          this.myValue = ret.data.content;
          this.myTitle = ret.data.title;
          console.log(this.myValue);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style>
#form-base .item {
  width: 100%;
}
</style>