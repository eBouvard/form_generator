<template>
  <v-container fluid>
    <v-form id="to_send">
      <v-text-field v-for="item in template"
          :key="item.label"
          :label="item.label"
      ></v-text-field>
    </v-form>
    <v-btn block color="primary" @click="submitForm" dark>Enregistrer</v-btn>
  </v-container>
</template>

<script>
import template from "../assets/opord_template.json";
import api from "@/service/api";

export default {
  name: "Form",
  components: {},
  data() {
    return {
      template: template
    };
  },
  methods: {
    submitForm() {
      var data = {
        title: document.getElementById("title").value,
        author: "",
        date: "",
        content: ""
      };
      console.log(JSON.stringify(data));
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
