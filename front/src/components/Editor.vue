<template>
  <v-container v-if="template" fluid ma-0 pa-0 style="max-width: 700px">
    <JsonEditor
      :options="{
            confirmText: 'Valider',
            cancelText: 'Annuler',
        }"
      :objData="template"
      v-model="template"
    ></JsonEditor>
  </v-container>
</template>
<script>
import api from "@/service/api";

export default {
  name: "formEditor",
  data() {
    return {
      template: this.$store.state.templateList[this.$store.state.template]
    };
  },
  watch: {
    template: function saveJSON() {
      const name = this.$store.state.template
      const newTemplate = this.template
      this.$store.commit("UPDATE_TEMPLATE", newTemplate);
      api()
        .post("/update/template/" + name, newTemplate)
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script> 