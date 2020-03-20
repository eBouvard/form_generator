<template>
  <v-textarea outlined rows="5" :label="item.label" auto-grow :name="root" v-model.lazy="root[value]"></v-textarea>
</template>

<script>
export default {
  name: "LargeTextComponent",
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