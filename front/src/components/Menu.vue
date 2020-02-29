<template>
  <v-navigation-drawer app mini-variant permanent>
    <v-list-item-group>
      <v-list nav>
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
        { title: "", icon: "mdi-home", menu: "j0", content: [] },
        { title: "J1", icon: "J1", menu: "j1", content: [] },
        { title: "J2", icon: "J2", menu: "j2", content: [] },
        {
          title: "J3",
          icon: "J3",
          menu: "j3",
          content: [
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
              path: "/view/order"
            }
          ]
        },
        { title: "J4", icon: "J4", menu: "j4", content: [] },
        { title: "J5", icon: "J5", menu: "j5", content: [] },
        { title: "J6", icon: "J6", menu: "j6", content: [] },
        { title: "J7", icon: "J7", menu: "j7", content: [] },
        { title: "J8", icon: "J8", menu: "j8", content: [] },
        { title: "J9", icon: "J9", menu: "j9", content: [] },
        { title: "Je", icon: "JE", menu: "jE", content: [] }
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
