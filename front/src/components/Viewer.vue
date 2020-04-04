<template>
  <v-container fluid>
    <div v-if="template && data && $route.params.form_id">
      <ViewerComponent :items="template" :data="data.content.main" :level=1></ViewerComponent>
    </div>
  </v-container>
</template>

<script>
import ViewerComponent from "@/components/ViewerComponent.vue";
import api from "@/service/api";

export default {
  name: "Viewer",
  components: {
    ViewerComponent
  },
  data() {
    return {
      template: this.$store.state.templateList[this.$store.state.template],
      form_id: null,
      data: null
    };
  },
  methods: {
    loadForm(form_id) {
      var request = "/read/" + this.$store.getters.template + "/" + form_id;
      api()
        .post("/api/get/" + request)
        .then(ret => {
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