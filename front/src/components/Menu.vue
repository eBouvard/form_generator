<template>
  <v-list-item-group>
    <v-list class="ma-0 pa-0" nav>
      <v-list-item v-for="item in items" :key="item.title" @click="selectItem(item)">
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
        { title: "J3", icon: "J3", menu: "j3" },
        { title: "J4", icon: "J4", menu: "j4" },
        { title: "J5", icon: "J5", menu: "j5" },
        { title: "J6", icon: "J6", menu: "j6" },
        { title: "J7", icon: "J7", menu: "j7" },
        { title: "J8", icon: "J8", menu: "j8" },
        { title: "J9", icon: "J9", menu: "j9" },
        { title: "Je", icon: "JE", menu: "jE" }
      ],
      j0: null,
      j1: null,
      j2: null,
      j3: null,
      j4: null,
      j5: null,
      j6: null,
      j7: null,
      j8: null,
      j9: null,
      jE: null
    };
  },
  methods: {
    selectItem(item) {
      this.$emit("item-selected", item);
    }
  }
};
</script>