<template>
  <v-container>
    <template>
      <v-form ref="form" v-model="form">
        <v-text-field v-model="name" label="Titre du nouveau contexte" required></v-text-field>
        <JsonEditor
          :options="{
            confirmText: 'Valider',
            cancelText: 'Annuler',
        }"
          :objData="newTemplate"
          v-model="newTemplate"
        ></JsonEditor>
        <v-btn
          :disabled="!form"
          color="primary"
          class="mr-4"
          @click="validate"
        >Ajouter le nouveau formulaire</v-btn>

        <v-btn color="error" class="mr-4" @click="reset">Repartir à zéro</v-btn>
      </v-form>
    </template>
  </v-container>
</template>
<script>
import api from "@/service/api";
import refresh from "@/service/refresh";
import defaultTemplate from "@/assets/formTemplate/default.json";

export default {
  data: () => ({
    form: '',
    name: '',
    newTemplate: defaultTemplate
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
      const name = this.name;
      const newTemplate = this.newTemplate;
      api()
        .post("/api/post/create/template/" + name, newTemplate).then(() => {
          refresh(name)
          this.$router.push({
            path: "/"
          });
        })
        .catch(e => {
          console.log(e);
        });
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>