<template>
  <v-col cols="12">
    <v-text-field :label="item.label" :name="root" v-model.lazy="root[value]"></v-text-field>
  </v-col>
</template>

<script>
export default {
  name: "SmallTextComponent",
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