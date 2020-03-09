<template>
  <v-text-field :label="item.label" :name="root" :v-model="root"></v-text-field>
</template>

<script>
export default {
  name: "SmallTextComponent",
  data() {
    return {};
  },
  props: {
    item: Object,
    root: String
  }
};
</script>