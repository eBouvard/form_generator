<template>
  <v-row no-gutters>
    <Menu v-on:item-selected="menuItemSelected"></Menu>
    <v-col v-if="selectedMenuItem" class="flex-grow-0 flex-shrink-1">
      <SubMenu :items="selectedMenuItem.content"></SubMenu>
    </v-col>
  </v-row>
</template>

<script>
import Menu from "@/components/Menu.vue";
import SubMenu from "@/components/SubMenu.vue";

export default {
  name: "NavDrawer",

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