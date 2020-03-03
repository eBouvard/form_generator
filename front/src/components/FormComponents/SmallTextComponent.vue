<template>
  <v-text-field :label="item.label" ></v-text-field>
</template>

<script>
export default {
  name: "SmallTextComponent",
  data() {
    return {};
  },
  props: {
    item: Object
  }
};
</script>