<template>
  <v-container style="max-width: 90vh" fluid>
    <div v-if="template">
      <v-card>
        <v-card v-if="this.$store.state.template != 'opord'">
          <v-row class="ma-2" align="center">
            <v-col cols="6">
              <v-subheader>Supprimer le contexte</v-subheader>
            </v-col>
            <v-col cols="6" align="right">
              <v-icon
                class="ma-4"
                v-on:click="deleteCheck = true"
                color="error"
              >mdi-trash-can-outline</v-icon>
            </v-col>
          </v-row>
        </v-card>
        <JsonEditor
          :options="{
            confirmText: 'Valider',
            cancelText: 'Annuler',
        }"
          :objData="template"
          v-model="template"
        ></JsonEditor>
      </v-card>
    </div>

    <v-dialog v-model="deleteCheck" max-width="900">
      <v-card>
        <v-card-title
          class="headline"
        >Confirmer la supression du contexte {{this.$store.state.template}} ?</v-card-title>
        <v-card-text>Cette action supprimera le template de formulaire de façon définitive.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="deleteCheck = false">Annuler</v-btn>
          <v-btn text @click="removeTemplate()">Valider</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import api from "@/service/api";
import refresh from "@/service/refresh";

export default {
  name: "formEditor",
  data() {
    return {
      template: this.$store.state.templateList[this.$store.state.template],
      deleteCheck: false
    };
  },
  watch: {
    template: function saveJSON() {
      const name = this.$store.state.template;
      const newTemplate = this.template;
      this.$store.commit("UPDATE_TEMPLATE", newTemplate);
      api()
        .post("/update/template/" + name, newTemplate)
        .catch(e => {
          console.log(e);
        });
    }
  },
  methods: {
    removeTemplate() {
      const name = this.$store.state.template;
      api()
        .get("/delete/template/" + name)
        .then(ret => {
          console.log(ret);
          this.deleteCheck = false;
          refresh("opord");
          this.$router.push({
            path: "/"
          });
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style scoped>
.theme--dark >>> .collapse-down {
  color: white;
}

.theme--dark >>> .pure-form select {
  background-color: black;
}

div >>> .val-input {
  width: 50%;
}

</style>