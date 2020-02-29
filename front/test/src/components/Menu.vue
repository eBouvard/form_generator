<template>
  <v-list-item-group>
    <v-list nav>
      <v-list-item :ripple="false" v-for="item in items" :key="item.title">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </v-list-item-group>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      items: [
        { title: "", icon: "", menu: "j0" },
        { title: "J1", icon: "J1", menu: "j1" },
        { title: "J2", icon: "J2", menu: "j2" },
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
        { title: "J4", icon: "J4", menu: "j4" },
        { title: "J5", icon: "J5", menu: "j5" },
        { title: "J6", icon: "J6", menu: "j6" },
        { title: "J7", icon: "J7", menu: "j7" },
        { title: "J8", icon: "J8", menu: "j8" },
        { title: "J9", icon: "J9", menu: "j9" },
        { title: "Je", icon: "JE", menu: "jE" }
      ]
    };
  }
};
</script>
