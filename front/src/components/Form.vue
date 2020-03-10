<template>
  <v-container fluid>
    <v-form ref="to_send">
      <FormComponent :items="template" :root="form.content.main"></FormComponent>
    </v-form>

    <v-btn color="secondary" large fixed right bottom fab v-on:click="submitCheck = true">
      <v-icon>mdi-content-save</v-icon>
    </v-btn>

    <v-dialog v-model="submitCheck">
      <v-card>
        <v-card-title class="headline">Confirmer l'envoi du formulaire ?</v-card-title>
        <v-card-text>Cette action enregistrera le formulaire en cours et vous renverra à la liste des ordres.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="submitCheck = false">Annuler</v-btn>
          <v-btn text @click="submit">Valider</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      form: JSON.parse(JSON.stringify(opord_form)),
      submitCheck: false,
      submitFeedback: true
    };
  },
  methods: {
    submit() {
      const data = JSON.parse(JSON.stringify(this.form));
      data.date = new Date();
      console.log(data.date)
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
      this.$router.push({
        path: "/list/order/"
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
