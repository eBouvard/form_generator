<template>
  <v-navigation-drawer clipper class="ma-0 pa-1" mini-variant permanent>
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
        { title: "home", icon: "mdi-home", menu: "home", content: [] },
        { title: "form", icon: "mdi-file-document", menu: "form", content: [
            {
              title: "Carte",
              icon: "mdi-earth",
              path: "/map"
            },
            {
              title: "Remplissage",
              icon: "mdi-pen",
              path: "/new/order"
            },
            {
              title: "Liste des ordres",
              icon: "mdi-table",
              path: "/list/order"
            },
            {
              title: "Visionnage",
              icon: "mdi-file-document",
              path: "/view/order/55"
            }
          ]
        },
        { title: "map", icon: "mdi-earth", menu: "home", path: "/map" },
      ]
    };
  },
  methods: {
    selectItem(item) {
      if (item.path == undefined) {
        this.$emit("item-selected", item);
      } else {
        this.$router.push({ path: item.path });
      }
    }
  }
};
</script>
