<template>
  <v-container fluid>
    <div v-if="form">
      <v-form ref="to_send">
        <FormComponent :items="template" :root="form.content.main"></FormComponent>
      </v-form>

      <v-btn
        color="secondary"
        x-large
        fixed
        right
        bottom
        fab
        v-on:click="submitCheck = true"
        style="margin-right: 2vw; margin-bottom: 2vw;"
      >
        <v-icon>mdi-content-save</v-icon>
      </v-btn>
    </div>
    <v-dialog v-model="submitCheck" max-width="900">
      <v-card>
        <v-card-title class="headline">Confirmer la modification du formulaire ?</v-card-title>
        <v-card-text>Cette action enregistrera les modifications apportées au formulaire en cours et vous renverra à la liste des ordres.</v-card-text>
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
import FormComponent from "@/components/FormComponents/FormComponent.vue";
import api from "@/service/api";

export default {
  name: "Update",
  components: {
    FormComponent
  },
  data() {
    return {
      template: this.$store.state.templateList[this.$store.state.template],
      form_id: null,
      form: null,
      submitCheck: false,
      submitFeedback: true
    };
  },
  methods: {
    submit() {
      const data = JSON.parse(JSON.stringify(this.form));
      data.date = new Date();
      data.title = this.form.content.main["0_header"].title;
      data.author = this.getUser();
      api()
        .post(
          "/api/post/update/" + this.$store.getters.template + "/" + this.form_id,
          data
        )
        .catch(e => {
          console.log(e);
        });
      this.$refs.to_send.reset();
      this.$router.push({
        path: "/list/order"
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
    },
    loadForm(form_id) {
      var request = "/read/" + this.$store.getters.template + "/" + form_id;
      api()
        .post("/api/get" + request)
        .then(ret => {
          console.log(ret);
          this.form = ret.data;
          this.form_id = form_id;
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  created() {
    this.loadForm(this.$route.params.form_id);
  },
  beforeRouteUpdate(to, from, next) {
    this.loadForm(to.params.form_id);
    next();
  }
};
</script>
