<template>
  <v-autocomplete
    :label="item.label"
    :name="root"
    v-model="root[value]"
    :items="item.list"
    item-text="name"
  ></v-autocomplete>
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