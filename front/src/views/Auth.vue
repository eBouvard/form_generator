<template>
  <v-container>
    <v-app-bar class="white--text" height="50px" color="primary">
      <v-avatar>
        <img src="@/assets/logo.png" alt="logo" />
      </v-avatar>

      <v-spacer></v-spacer>

      <v-toolbar-title>BlueTeam - Projet Arena</v-toolbar-title>

      <v-spacer></v-spacer>

      <div :key="Object.keys($store.getters.templateList).length" class="text-xs-center pa-3">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn dark color="secondary" v-on="on" class="px-3">
              {{ $store.getters.template }}
              <v-divider class="mx-2" vertical></v-divider>
              <v-icon>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in Object.keys(this.$store.state.templateList)"
              :key="index"
              @click="templateChange(item)"
            >
              <v-list-item-title>{{ item.toUpperCase() }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
    
    <v-card style="position: relative;top: 13%;" class="text-xs-center">
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
      this.$emit("authentified", this.authPass);
    }
  }
};
</script>