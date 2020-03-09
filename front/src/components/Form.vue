<template>
  <v-container fluid>
    <v-form @submit.prevent="submitForm" id="to_send" method="post">
      <FormComponent :items="template" :root="'form.content.main.'"></FormComponent>
      <v-text-field label="Annexes" v-model="form.content.annex"></v-text-field>
      <v-btn type="submit" form="to_send" style="margin-left: 20%; width: 60%;">Enregistrer</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import template from "@/assets/opord_template.json";
import form from "@/assets/opord.json";
import FormComponent from "@/components/FormComponents/FormComponent.vue";
//import api from "@/service/api";

export default {
  name: "Form",
  components: {
    FormComponent
  },
  data() {
    return {
      template: template,
      form: form
    };
  },
  methods: {
    submitForm() {
      var data = JSON.parse(JSON.stringify(form));
      data.date = new Date();
      data.title = "";
      data.author = this.getUser();
 /*     api()
        .post("/create/json", data)
        .then(ret => {
          console.log(ret);
        })
        .catch(e => {
          console.log(e);
        });*/
      console.log(data);
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
      var user = user_list[Math.floor(Math.random() * Math.floor(6))];
      return user;
    }
  }
};
</script>
