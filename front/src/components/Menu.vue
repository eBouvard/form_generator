<template>
  <v-navigation-drawer clipper class="ma-0 pa-1" mini-variant permanent color="tertiary">
    <v-list-item-group>
      <v-list class="ma-0 pa-1" nav>
        <v-list-item
          :ripple="false"
          v-for="item in items"
          :key="item.title"
          @click="selectItem(item)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-list-item-group>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      items: [
        { title: "home", icon: "mdi-home", menu: "home", path: "/" },
        {
          title: "form",
          icon: "mdi-file-document",
          menu: "form",
          content: [
            {
              title: "Nouvel ordre",
              icon: "mdi-pen",
              path: "/new/order/0/0"
            },
            {
              title: "Liste des ordres",
              icon: "mdi-table",
              path: "/list/order"
            }
          ]
        },
        { title: "map", icon: "mdi-earth", menu: "map", path: "/map" },
        { title: "upload", icon: "mdi-upload", menu: "upload", path: "/upload" },
        { title: "editor", icon: "mdi-tune", menu: "editor", path: "/editor" }
      ]
    };
  },
  methods: {
    selectItem(item) {
      this.$emit("item-selected", item);
    }
  }
};
</script>
