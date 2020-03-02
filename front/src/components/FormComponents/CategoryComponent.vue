<template>
  <h2  style="padding-left: 0.8rem;">{{item.label}}</h2>
</template>

<script>
export default {
  name: "CategoryComponent",
  data() {
    return {};
  },
  props: {
    item: Object
  }
};
</script>