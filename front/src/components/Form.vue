<template>
  <v-container fluid>
    <v-form @submit.prevent="submitForm" ref="to_send">
      <FormComponent :items="template" :root="form.content.main"></FormComponent>
    </v-form>
    <v-btn color="secondary" large fixed right bottom fab type="submit">
      <v-icon>mdi-content-save</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import template from "@/assets/opord_template.json";
import opord_form from "@/assets/opord.json";
import FormComponent from "@/components/FormComponents/FormComponent.vue";
import api from "@/service/api";

export default {
  name: "Form",
  components: {
    FormComponent
  },
  data() {
    return {
      template: template,
      form: Object.assign({}, opord_form)
    };
  },
  methods: {
    submitForm() {
      const data = Object.assign({}, this.form);
      data.date = new Date();
      data.title = this.form.content.main["0_header"].title;
      data.author = this.getUser();
      console.log(data);
      api()
        .post("/create/json", data)
        .then(ret => {
          console.log(ret);
        })
        .catch(e => {
          console.log(e);
        });
    },
    getUser() {
      const user_list = [
        "Joachim Murat",
        "Michel Ney",
        "Jean Lannes",
        "André Masséna",
        "Louis Alexandre Berthier",
        "Louis-Nicolas Davout"
      ];
      const user = user_list[Math.floor(Math.random() * 6)];
      return user;
    }
  }
};
</script>
