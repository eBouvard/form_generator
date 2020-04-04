<template>
  <v-container style="position: relative;top: 13%;" class="text-xs-center">
    <v-card>
      <v-card-title primary-title>
        <h4>Connexion</h4>
      </v-card-title>
      <v-form>
        <v-text-field
          prepend-icon="mdi-lock"
          name="Password"
          label="Mot de passe"
          type="password"
          v-model="authPass"
        ></v-text-field>
        <v-card-actions>
          <v-btn primary large block v-on:click="authentificateMe()">Connexion</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Auth",

  components: {},
  data() {
    return {
      authPass: ""
    };
  },
  methods: {
    authentificateMe() {
      if (this.authPass === "Aren@Emile2020") {
        this.$emit("authentified", true);
      } else this.$emit("authentified", false);
    }
  }
};
</script>