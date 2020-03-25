<template>
  <v-container fluid>
    <div v-for="label in Object.keys(items)" :key="label">
      <v-card v-if="(items[label].type === 'chapter' && !isEmpty(data[label]))" class="my-2">
        <v-card-title
          v-if="(data[label].security_classification) && (data[label].security_classification != '')"
        >
          <h3
            style="font-weight: 400;text-align:center;border: 0.1em solid red;color: red;font-size: 1.3em;padding: 3%;width: 90%;margin-right: 5%;margin-left: 5%;"
          >{{ data[label].security_classification }}</h3>
        </v-card-title>
        <v-card-title v-else class="headline">{{items[label].label}}</v-card-title>
        <v-card-text style="font-size: 1.2rem;">
          <ViewerComponent :items="items[label].content" :data="data[label]"></ViewerComponent>
        </v-card-text>
      </v-card>
      <v-card
        v-if="(items[label].type === 'category' && !isEmpty(data[label]))"
        outlined
        class="my-2"
      >
        <v-card-title class="headline">{{items[label].label}}</v-card-title>
        <v-card-text style="font-size: 1.2rem;">
          <ViewerComponent :items="items[label].content" :data="data[label]"></ViewerComponent>
        </v-card-text>
      </v-card>
      <div v-if="(items[label].type === 'small_text') && data[label]">
        <h3>{{items[label].label}}</h3>
        <p style="white-space: pre-wrap;" class="my-2">{{ data[label] }}</p>
      </div>
      <div v-if="(items[label].type === 'large_text') && data[label]">
        <h3>{{items[label].label}}</h3>
        <p style="white-space: pre-wrap;" class="my-2">{{ data[label] }}</p>
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
    data: Object
  }
};
</script>