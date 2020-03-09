<template>
  <v-textarea outlined rows="5" :label="item.label" auto-grow :name="root" :v-model="root"></v-textarea>
</template>

<script>
export default {
  name: "LargeTextComponent",
  data() {
    return {};
  },
  props: {
    item: Object,
    root: String
  }
};
</script>