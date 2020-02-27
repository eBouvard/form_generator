<template>
  <v-container fluid>
    <v-form id="to_send">
      <v-text-field label="Titre" outlined id="title"></v-text-field>
      <v-form-base :value="myValue" :schema="mySchema" @keyup.enter="submitForm" />
    </v-form>
    <v-btn block color="primary" v-on:click="submitForm" dark>Submit</v-btn>
  </v-container>
</template>

<script>
import VFormBase from "vuetify-form-base";
import template from "../assets/opord_template.json";
import content from "../assets/opord.json";
import api from "@/service/api";

export default {
  name: "Form",
  components: { VFormBase },
  data() {
    return {
      myValue: content,
      mySchema: template
    };
  },
  methods: {
    submitForm() {
      var d = new Date();
      var datestring =
        d.getFullYear() +
        "-" +
        (d.getMonth() + 1) +
        "-" +
        d.getDate() +
        "T" +
        d.getHours() +
        ":" +
        d.getMinutes() +
        ":" +
        d.getSeconds();
      var data = {
        title: document.getElementById("title").value,
        author: "Bob",
        date: datestring,
        content: content
      };
      console.log(JSON.stringify(data));
      3;
      api()
        .post("/create/json", data)
        .then(ret => {
          console.log(ret);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style>
#title {
  width: 100%;
}

#form-base .item {
  width: 100%;
}
</style>