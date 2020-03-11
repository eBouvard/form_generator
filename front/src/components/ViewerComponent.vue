<template>
  <v-container fluid>
    <div v-for="label in Object.keys(items)" :key="label">
      <div
        v-if="((items[label].type === 'chapter') || (items[label].type === 'category')) && !isEmpty(data[label])"
        style="
        border: lightgrey solid 0.1em;
        margin: 0.5em;
        "
      >
        <h2>{{items[label].label}}</h2>
        <ViewerComponent :items="items[label].content" :data="data[label]" :level="level + 1"></ViewerComponent>
      </div>
      <div v-if="(items[label].type === 'small_text') && data[label]">
        <h3>{{items[label].label}}</h3>
        {{ data[label] }}
      </div>
      <div v-if="(items[label].type === 'large_text') && data[label]">
        <h3>{{items[label].label}}</h3>
        {{ data[label] }}
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
  methods: {
    isEmpty(obj) {
      if (obj == null) return true;
      if (obj == "") return true;
      if (typeof obj == "object") {
        if (obj.length === 0) {
          return true;
        } else {
          let emptyFlag = true;
          for (const item in obj) {
            emptyFlag = emptyFlag && this.isEmpty(obj[item]);
          }
          return emptyFlag;
        }
      } else {
        return false;
      }
    }
  },
  props: {
    items: Object,
    data: Object,
    level: Number
  }
};
</script>