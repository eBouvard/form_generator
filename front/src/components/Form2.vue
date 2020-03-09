<template>
  <v-container fluid>
    <v-form v-model="data" @submit.prevent="submitForm" id="form">
      <v-btn color="secondary" large absolute right fab type="submit">
        <v-icon>mdi-content-save</v-icon>
      </v-btn>
      <FormComponent v-model="template" :items="template"></FormComponent>
    </v-form>
  </v-container>
</template>

<script>
import template from "@/assets/opord_template.json";
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
      data: true
    };
  },
  methods: {
    submitForm() {
      // const data = JSON.parse(JSON.stringify(form));
      // data.date = new Date();
      // data.title = "";
      // data.author = this.getUser();
      // data.content = {};
      console.log(this.template)
      // api()
      //   .post("/create/json", {})
      //   .then(ret => {
      //     console.log(ret);
      //   })
      //   .catch(e => {
      //     console.log(e);
      //   });
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
      const user = user_list[Math.floor(Math.random() * Math.floor(6))];
      return user;
    }
  }
};
</script>
