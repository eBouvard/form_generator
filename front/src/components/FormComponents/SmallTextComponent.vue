<template>
  <v-text-field :label="item.label" :name="root" v-model="root[value]"></v-text-field>
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