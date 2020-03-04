<template>
  <v-container fluid>
    <div v-for="label in Object.keys(items)" :key="label">
      <div
        v-if="(items[label].type === 'category') && data[label]"
        style="
        border: lightgrey solid 0.1em;
        margin: 0.5em;
        "
      >
        <h2 style="padding: 0.8rem;">{{items[label].label}}</h2>
        <ViewerComponent :items="items[label].content" :data="data[label]" :level="level + 1"></ViewerComponent>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "ViewerComponent",
  components: {},
  data() {
    return {};
  },
  props: {
    items: Object,
    data: Object,
    level: Number
  }
};
</script>