<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link @click="app_position = 0">
          <v-list-item-action>
            <v-icon>mdi-earth</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Accueil</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="app_position = 1">
          <v-list-item-action>
            <v-icon>mdi-pen</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Remplissage</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="app_position = 2">
          <v-list-item-action>
            <v-icon>mdi-table</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Liste des ordres</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="app_position = 3">
          <v-list-item-action>
            <v-icon>mdi-table</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Liste des ordres historiques</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="app_position = 4">
          <v-list-item-action>
            <v-icon>mdi-file-document</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Visionnage</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="app_position = 5">
          <v-list-item-action>
            <v-icon>mdi-file-document</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Visionnage des ordres historiques</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <Map v-if="app_position == 0" />
        <Form v-if="app_position == 1" />
        <Table v-if="app_position == 2" />
        <Table2 v-if="app_position == 3" />
        <Viewer v-if="app_position == 4" />
        <Viewer2 v-if="app_position == 5" />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Map from "./components/Map.vue";
import Form from "./components/Form.vue";
import Table from "./components/Table.vue";
import Table2 from "./components/Table2.vue";
import Viewer from "./components/Viewer.vue";
import Viewer2 from "./components/Viewer2.vue";

export default {
  components: {
    Map,
    Form,
    Table,
    Table2,
    Viewer,
    Viewer2
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    app_position: 0
  }),
  created() {
    this.$vuetify.theme.dark = true;
    // this.$vuetify.theme.dark = false;
    // Light theme
    this.$vuetify.theme.themes.light.primary = "#9caf98";
    this.$vuetify.theme.themes.light.primary = "#4c5540";

    // Dark theme
    this.$vuetify.theme.themes.dark.primary = "#765d47";
    this.$vuetify.theme.themes.dark.primary = "#4c5540";
  }
};
</script>
