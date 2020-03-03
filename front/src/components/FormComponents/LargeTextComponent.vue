<template>
  <v-textarea outlined rows="5" :label="item.label" auto-grow></v-textarea>
</template>

<script>
export default {
  name: "LargeTextComponent",
  data() {
    return {};
  },
  props: {
    item: Object
  }
};
</script>