
<template>
  <v-card height="100%">
    <v-card-text>
      <v-row align="center">
        <v-col class="subtitle">Total de formulaires</v-col>
      </v-row>
      <v-row align="center">
        <v-col class="display-3">{{totalForms}}</v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import api from "@/service/api";

export default {
  name: "KPI",
  data() {
    return {
      totalForms: 0,
    };
  },
  methods: {
    init() {
      api()
        .post("/api/get/read/stat/" + this.$store.state.template)
        .then(ret => {
          this.totalForms = ret.data.count
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.init();
  }
};
</script>
