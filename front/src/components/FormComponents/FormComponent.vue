<template>
  <v-container fluid>
    <h2>{{items.label}}</h2>
    <v-text-field v-for="item in items.content" :key="item.label" :label="item.label"></v-text-field>
  </v-container>
</template>

<script>
export default {
  name: "FormComponent",
  data() {
    return {};
  },
  props: {
    items: Object
  }
};
</script>