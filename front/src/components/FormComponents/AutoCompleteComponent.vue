<template>
  <v-col cols="6">
    <v-autocomplete
      :label="item.label"
      :name="root"
      v-model.lazy="root[value]"
      :items="item.list"
      item-text="name"
    ></v-autocomplete>
  </v-col>
</template>

<script>
export default {
  name: "AutoCompleteTextComponent",
  data() {
    return {};
  },
  props: {
    item: Object,
    root: Object,
    value: String
  }
};
</script>