<template>
  <h2>{{item.label}}</h2>
</template>

<script>
export default {
  name: "FormComponent",
  data() {
    return {};
  },
  props: {
    item: Object
  }
};
</script>