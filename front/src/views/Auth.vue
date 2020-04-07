<template>
  <v-container fluid class="overflow-hidden ma-0 pa-0">
    <v-app-bar class="white--text" height="50px" color="primary">
      <v-avatar>
        <img src="@/assets/logo.png" alt="logo" />
      </v-avatar>

      <v-spacer></v-spacer>

      <v-toolbar-title>BlueTeam - Projet Arena</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-row style="flex-wrap: nowrap; height: calc(100vh - 50px)" no-gutters>
      <v-col
        style="overflow-y: auto;"
        class="flex-grow-1 flex-shrink-0"
        cols="12"
        sm="8"
        offset-sm="2"
      >
        <v-card style="position: relative;top: 13%" class="text-xs-center">
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
      </v-col>
    </v-row>
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
      this.$emit("authentified", this.authPass);
    }
  }
};
</script>