<template>
  <v-container fluid>
    <v-form id="to_send">
      <FormComponent :items="template"></FormComponent>
      <v-btn block color="primary" @click="getUser" dark>Enregistrer</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import template from "@/assets/opord_template.json";
import FormComponent from "@/components/FormComponents/FormComponent.vue";
import api from "@/service/api";

export default {
  name: "Form",
  components: {
    FormComponent
  },
  data() {
    return {
      template: template
    };
  },
  methods: {
    submitForm() {
      api()
        .post("/create/json", "")
        .then(ret => {
          console.log(ret);
        })
        .catch(e => {
          console.log(e);
        });
    },
    getUser() {
      var user_list = [
        "Joachim Murat",
        "Michel Ney",
        "Jean Lannes",
        "André Masséna",
        "Louis Alexandre Berthier",
        "Louis-Nicolas Davout"
      ];
      console.log(user_list[Math.floor(Math.random() * Math.floor(6))]);
    }
  }
};
</script>
