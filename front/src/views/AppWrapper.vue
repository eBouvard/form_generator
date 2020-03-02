<template>
  <v-container fluid class="ma-0 pa-0">
    <v-app-bar height="84px" dark></v-app-bar>
    <v-row style="flex-wrap: nowrap; height: calc(100vh - 84px - 74px)" no-gutters>
      <Menu v-on:item-selected="menuItemSelected"></Menu>
      <v-col v-if="selectedMenuItem" height="100%" class="flex-grow-0 flex-shrink-1">
        <SubMenu :items="selectedMenuItem.content"></SubMenu>
      </v-col>
      <v-col style="overflow-y: auto;" class="flex-grow-1 flex-shrink-0">
        <router-view></router-view>
      </v-col>
    </v-row>
    <v-footer style="height: 74px;" absolute></v-footer>
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
    }
  }
};
</script>