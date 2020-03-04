<template>
  <v-container fluid>
    <v-form id="load">
      <v-btn block color="primary" @click="updatePath" dark>Charger formulaire numéro</v-btn>
      <v-text-field label="Identifiant" outlined id="opord_id"></v-text-field>
    </v-form>
    <div v-if="data">
      <ViewerComponent :items="template" :data="data.data.content" :level=2></ViewerComponent>
    </div>
  </v-container>
</template>

<script>
import ViewerComponent from "@/components/ViewerComponent.vue";
import template from "@/assets/opord_template.json";
import api from "@/service/api";

export default {
  name: "Viewer",
  components: {
    ViewerComponent
  },
  data() {
    return {
      template: template,
      data: null
    };
  },
  methods: {
    updatePath() {
      this.$router.push({
        path: "/view/order/" + document.getElementById("opord_id").value
      });
    },
    loadForm(form_id) {
      var request = "/read/" + form_id;
      console.log(request);
      api()
        .get(request)
        .then(ret => {
          console.log(ret);
          this.data = ret;
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