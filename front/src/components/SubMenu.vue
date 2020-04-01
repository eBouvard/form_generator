<template>
  <div @focusout="handleFocusOut" tabindex="0">
    <v-list-item-group v-if="(items) && (items.length > 0)">
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
  </div>
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
      const path = item.path;
      this.$emit("leave-menu");
      this.$router.push({ path: path });
    },
    handleFocusOut() {
      this.$emit("leave-menu");
    }
  }
};
</script>