<template>
  <v-container class="ma-0 pa-0">
    <!-- <v-list-item>
      <span>{{ item.title }}</span>
    </v-list-item>-->
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: "SousMenu2",

  data() {
    return {
      items: [
        { title: "Noir 11", icon: "mdi-view-dashboard" },
        { title: "Noir 12", icon: "mdi-view-dashboard" },
        { title: "Noir 13", icon: "mdi-view-dashboard" },
        { title: "Noir 14", icon: "mdi-view-dashboard" },
        { title: "Vert 11", icon: "mdi-view-dashboard" },
        { title: "Vert 12", icon: "mdi-view-dashboard" },
        { title: "Vert 13", icon: "mdi-view-dashboard" },
        { title: "Vert 14", icon: "mdi-view-dashboard" }
      ],
      right: null
    };
  },
  props: {
    item: Object
  }
};
</script>
