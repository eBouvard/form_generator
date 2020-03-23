<template>
  <v-text-field :label="item.label" :name="root" v-model.lazy="root[value]"></v-text-field>
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