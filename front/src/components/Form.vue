<template>
  <v-container fluid>
    <v-form ref="to_send">
      <FormComponent :items="template" :root="form.content.main"></FormComponent>
    </v-form>
    <v-btn color="secondary" large fixed right bottom fab v-on:click="submitForm()">
      <v-icon>mdi-content-save</v-icon>
    </v-btn>
<!--
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialog = false">Disagree</v-btn>
          <v-btn text @click="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
-->
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
      form: JSON.parse(JSON.stringify(opord_form))
    };
  },
  methods: {
    submitForm() {
      const data = JSON.parse(JSON.stringify(this.form));
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
      this.$refs.to_send.reset(); 
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
