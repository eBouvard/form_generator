<template>
  <v-container fluid>
    <v-form ref="to_send">
      <FormComponent :items="template" :root="form.content.main"></FormComponent>
    </v-form>

    <v-speed-dial right bottom fixed>
      <template v-slot:activator>
        <v-btn color="secondary" large fab v-on:click="fab = (fab ? false : true)">
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-content-save</v-icon>
        </v-btn>
      </template>

      <v-tooltip left>
        <template v-slot:activator="{ on }">
          <v-btn fab dark small color="green" v-on:click="submitCheck = true" v-on="on">
            <v-icon>mdi-exit-to-app</v-icon>
          </v-btn>
        </template>
        <span>Sauver et quitter</span>
      </v-tooltip>

      <v-tooltip left>
        <template v-slot:activator="{ on }">
          <v-btn fab dark small color="indigo" v-on:click="saveStay" v-on="on">
            <v-icon>mdi-content-save-edit</v-icon>
          </v-btn>
        </template>
        <span>Sauver et continuer</span>
      </v-tooltip>
    </v-speed-dial>

    <v-dialog v-model="submitCheck">
      <v-card>
        <v-card-title class="headline">Confirmer l'envoi du formulaire ?</v-card-title>
        <v-card-text>Cette action enregistrera le formulaire en cours et vous renverra à la liste des ordres.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="submitCheck = false">Annuler</v-btn>
          <v-btn text @click="saveExit">Valider</v-btn>
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
      fab: false,
      template: template,
      form:
        this.$route.params.is_copy == 1
          ? this.loadForm(this.$route.params.origin_id)
          : JSON.parse(JSON.stringify(opord_form)),
      submitCheck: false,
      updateCheck: false,
      submitFeedback: true
    };
  },
  methods: {
    async submit() {
      const data = JSON.parse(JSON.stringify(this.form));
      data.date = new Date();
      console.log(data.date);
      data.title = this.form.content.main["0_header"].title;
      data.author = this.getUser();
      console.log(data);
      let ret = await api()
        .post("/create/json", data)
        .catch(e => {
          console.log(e);
        });
      return ret.data;
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
    },
    saveExit() {
      this.submit();
      this.$refs.to_send.reset();
      this.$router.push({
        path: "/list/order/"
      });
    },
    saveStay() {
      this.submit().then(ret => {
        this.$router.push({
          path: "/update/order/" + ret
        });
      });
    },
    loadForm(form_id) {
      var request = "/read/" + form_id;
      console.log(request);
      api()
        .get(request)
        .then(ret => {
          console.log(ret);
          this.form = ret.data;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
