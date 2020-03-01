<template>
  <v-container fluid style="border: 0.1rem solid grey; margin: 0.5rem;">
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