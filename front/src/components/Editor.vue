<template>
  <v-container fluid>
    <div v-if="template">
      <v-card>
        <JsonEditor
          :options="{
            confirmText: 'Valider',
            cancelText: 'Annuler',
        }"
          :objData="template"
          v-model="template"
        ></JsonEditor>
      </v-card>

      <v-btn
        color="secondary"
        x-large
        fixed
        right
        bottom
        fab
        v-on:click="chooseName = true"
        style="margin-right: 2vw; margin-bottom: 2vw;"
      >
        <v-icon>mdi-content-save</v-icon>
      </v-btn>
    </div>

    <v-dialog v-model="chooseName" max-width="900">
      <v-card>
        <v-card-title class="headline">Choisir le nom du nouveau modèle</v-card-title>
        <v-card-text>
          <p>Veuillez choisir un nom pour ce modèle :</p>
          <v-text-field v-model="name" label="Nom du modèle"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="chooseName = false">Annuler</v-btn>
          <v-btn text @click="formatName">Valider</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="submitCheck" max-width="900">
      <v-card>
        <v-card-title
          class="headline"
        >Confirmer l'enregistrement du modèle {{ name.toUpperCase() }} ?</v-card-title>
        <v-card-text>Cette action enregistrera le nouveau modèle et vous renverra à la page d'accueil.</v-card-text>
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
import api from "@/service/api";

export default {
  name: "FormEditor",
  data() {
    return {
      chooseName: false,
      submitCheck: false,
      template: this.$store.state.templateList[this.$store.state.template],
      name: ""
    };
  },
  methods: {
    async submit() {
      let data = (data = JSON.parse(JSON.stringify(this.template)));
      console.log("/create/template/" + this.name);
      api()
        .post("/create/template/" + this.name, data)
        .catch(e => {
          console.log(e);
        });
    },
    saveExit() {
      this.submit().then(() => {
        this.$router.push({
          path: "/"
        });
      });
    },
    formatName() {
      this.name = this.name.replace(/\s/g, "_");
      this.name = this.name.toLowerCase();
      console.log(this.name);
      this.chooseName = false;
      this.submitCheck = true;
    }
  }
  /*
  ,
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
  }
  */
};
</script> 