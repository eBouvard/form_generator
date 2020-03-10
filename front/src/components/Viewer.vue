<template>
  <v-container fluid>
    <v-form id="load">
      <v-btn block color="primary" @click="updatePath" dark>Charger formulaire numéro</v-btn>
      <v-text-field label="Identifiant" outlined v-model="form_id"></v-text-field>
    </v-form>
    <div v-if="data && $route.params.form_id">
<!--  New API
-->
      <ViewerComponent :items="template" :data="data.content.main" :level=1></ViewerComponent>
<!--  Old API
      <ViewerComponent :items="template" :data="data.data.content" :level=1></ViewerComponent>
-->
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
      form_id: null,
      data: null
    };
  },
  methods: {
    updatePath() {
      this.$router.push({
        path: "/view/order/" + this.form_id
      });
    },
    loadForm(form_id) {
      var request = "/read/" + form_id;
      console.log(request);
      api()
        .get(request)
        .then(ret => {
          console.log(ret);
          this.data = ret.data;
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