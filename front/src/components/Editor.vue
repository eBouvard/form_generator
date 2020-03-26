<template>
  <v-container fluid ma-0 pa-0 style="max-width: 700px">
    <JsonEditor
      :options="{
            confirmText: 'Valider',
            cancelText: 'Annuler',
        }"
      :objData="jsonData"
      v-model="jsonData"
    ></JsonEditor>
  </v-container>
</template>
<script>
export default {
  name: "formEditor",
  data() {
    return {
      jsonData: this.$store.getters.templateSelected
    };
  },
  watch: {
    jsonData: function saveJSON() {
      console.log("JSON Changed");
      this.$store.commit("SET_TEMPLATE", this.jsonData);
    }
  }
};
</script> 