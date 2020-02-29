<template>
  <v-navigation-drawer app permanent right>
    <v-list-item-group>
      <v-list nav>
        <v-list-item
          :ripple="false"
          v-for="item in items"
          :key="item.title"
          @click="selectPath(item)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-list-item-group>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "SubMenu",
  data() {
    return {};
  },
  props: {
    items: Array
  },
  methods: {
    selectPath(item) {
      this.$router.push({ path: item.path });
    }
  }
};
</script>