<template>
  <v-container fluid class="overflow-hidden ma-0 pa-0" >
    <v-app-bar class="white--text" height="50px" color="primary">
    <v-avatar>
      <img
        src="@/assets/cpoia.jpeg"
        alt="logo"
      >
    </v-avatar>
    <v-spacer></v-spacer>
    <v-toolbar-title>Projet Arena</v-toolbar-title>
    <v-spacer></v-spacer>
      <v-switch
        v-model="$vuetify.theme.dark"
        hide-details
        @change="goBlack"
      ></v-switch>
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
      selectedMenuItem: 0
    };
  },
  methods: {
    menuItemSelected(item) {
      if (item.menu === "j0") {
        this.selectedMenuItem = 0;
        this.$router.push({ path: "/" });
      } else if (item === this.selectedMenuItem) {
        this.selectedMenuItem = 0;
      } else if (item.content.length === 0) {
        this.selectedMenuItem = 0;
      } else {
        this.selectedMenuItem = item;
      }
    },
    goBlack() {
      this.$store.commit("SET_BLACKTHEME", this.$vuetify.theme.dark)
    }
  }
};
</script>