<template>
  <v-container fluid class="overflow-hidden ma-0 pa-0">
    <v-app-bar class="white--text" height="50px" color="primary">
      <v-avatar>
        <img src="@/assets/logo.png" alt="logo" />
      </v-avatar>
      <v-spacer></v-spacer>
      <v-toolbar-title>BlueTeam - Projet Arena</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="text-xs-center pa-3">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn dark color="secondary" v-on="on">{{ $store.getters.template }}</v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in templateList"
              :key="index"
              @click="templateChange(item.value)"
            >
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <v-switch color="#500000" v-model="$vuetify.theme.dark" hide-details @change="goBlack"></v-switch>
    </v-app-bar>
    <v-row style="flex-wrap: nowrap; height: calc(100vh - 50px)" no-gutters>
      <Menu v-on:item-selected="menuItemSelected"></Menu>
      <v-col v-if="selectedMenuItem" height="100%" class="flex-grow-0 flex-shrink-1">
        <SubMenu :items="selectedMenuItem.content"></SubMenu>
      </v-col>
      <v-col style="overflow-y: auto;" class="flex-grow-1 flex-shrink-0">
        <router-view></router-view>
      </v-col>
    </v-row>
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
      selectedMenuItem: false,
      templateList: [
        { name: "OPORD", value: "opord" },
        { name: "COVID Report", value: "covid" }
      ]
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
    goBlack() {
      this.$store.commit("SET_BLACKTHEME", this.$vuetify.theme.dark);
    },
    templateChange(name) {
      this.$store.commit("SET_TEMPLATE", name);
    }
  }
};
</script>