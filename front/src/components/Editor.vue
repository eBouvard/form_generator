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

export default {
  name: "formEditor",
  data() {
    return {
      template: this.$store.state.templateList[this.$store.state.template]
    };
  },
  watch: {
    jsonData: function saveJSON() {
      console.log(this.jsonData);
      this.$store.commit("SET_TEMPLATE", this.jsonData);
    }
  }
};
</script> 