<template>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Formulaire</v-btn>
      </template>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Settings</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="dialog = false">Envoyer</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-for="form in forms"
            :key="form.title"
            v-model="name"
            :counter="5"
            :rules="nameRules"
            label="texte"
            required
          ></v-text-field>

          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

          <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Ce champ est requis']"
            label="Item"
            required
          ></v-select>

          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'Le formulaire doit être attesté']"
            label="J'atteste de la veracité et de la completude du document"
            required
          ></v-checkbox>

          <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Valider</v-btn>

          <v-btn color="warning" @click="resetValidation">Annuler</v-btn>
        </v-form>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      valid: true,
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      select: null,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      forms: ["forms 1", "forms 2", "forms 3", "forms 4"],
      checkbox: false,
      dialog: false,
      notifications: false,
      form: {
        name: "test",
        fields: {
          title: "titre1",
          content: "content1"
        }
      }
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>