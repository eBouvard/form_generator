<template>
  <v-container>
    <v-text-field :label="item.label"></v-text-field>
  </v-container>
</template>

<script>
export default {
  name: "TextComponent",
  data() {
    return {};
  },
  props: {
    item: Object
  }
};
</script>