<template>
  <v-container fluid class="overflow-hidden ma-0 pa-0">
    <v-app-bar
      class="white--text"
      height="50px"
      color='primary'
    >
      <v-spacer></v-spacer>

      <v-toolbar-title>Form Generator</v-toolbar-title>

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

    <v-row style="flex-wrap: nowrap; height: calc(100vh - 50px)" no-gutters>
      <Menu v-on:open-settings="settings = true" v-on:item-selected="menuItemSelected"></Menu>
      <v-col v-if="selectedMenuItem.content" height="100%" class="flex-grow-0 flex-shrink-1">
        <SubMenu v-on:leave-menu="clearItemSelected" :items="selectedMenuItem.content"></SubMenu>
      </v-col>
      <v-col
        style="overflow-y: auto;"
        class="flex-grow-1 flex-shrink-0"
        v-on:click="selectedMenuItem = false"
      >
        <router-view :key="componentKey"></router-view>
      </v-col>
    </v-row>

    <v-dialog v-model="settings" max-width="900">
      <v-card>
        <v-card-title class="headline">Paramètres d'Arena</v-card-title>
        <v-card-text>
              <v-divider></v-divider>
          <div class="mx-4">
              <v-switch v-model="$vuetify.theme.dark" hide-details @change="goBlack"></v-switch>
              <p class="mt-3">Thème sombre : {{ ($store.state.blackTheme) ? "activé" : "desactivé" }}</p>
          </div>
              <v-divider></v-divider>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="ma-2" text @click="settings = false" color="primary">Valider</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import Menu from "@/components/Menu.vue";
import SubMenu from "@/components/SubMenu.vue";

export default {
  name: "AppWrapper",

  components: {
    Menu,
    SubMenu
  },
  data() {
    return {
      settings: false,
      componentKey: 0,
      selectedMenuItem: false
    };
  },
  methods: {
    menuItemSelected(item) {
      if (
        item.path != undefined &&
        item.path != this.$router.currentRoute.path
      ) {
        this.selectedMenuItem = false;
        this.$router.push({ path: item.path });
      } else if (item === this.selectedMenuItem) {
        this.selectedMenuItem = false;
      } else if (item.content != undefined && item.content.length === false) {
        this.selectedMenuItem = false;
      } else {
        this.selectedMenuItem = item;
      }
    },
    clearItemSelected() {
      this.selectedMenuItem = false;
    },
    goBlack() {
      this.$store.commit("SET_BLACKTHEME", this.$vuetify.theme.dark);
    },
    templateChange(name) {
      this.$store.commit("SET_TEMPLATE", name);
      this.componentKey += 1;
    }
  }
};
</script>