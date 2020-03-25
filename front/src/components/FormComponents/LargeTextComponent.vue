<template>
  <div>
    <v-btn-toggle v-if="isSubOrder()" rounded class="pb-2" multiple>
      <v-btn icon v-model="show_old" small>
        <v-icon v-if="show_old">mdi-eye-off</v-icon>
        <v-icon v-else>mdi-eye</v-icon>
      </v-btn>
      <v-btn icon v-if="show_old" v-on:click="copyOld(value)" :v-riple="false" small>
        <v-icon>mdi-content-copy</v-icon>
      </v-btn>
    </v-btn-toggle>
    <v-textarea
      v-if="show_old"
      disabled
      outlined
      rows="5"
      :label="item.label"
      auto-grow
      :name="old"
      v-model.lazy="old[value]"
    ></v-textarea>
    <v-textarea
      outlined
      rows="5"
      :label="item.label"
      auto-grow
      :name="root"
      v-model.lazy="root[value]"
    ></v-textarea>
  </div>
</template>

<script>
export default {
  name: "LargeTextComponent",
  data() {
    return {
      show_old: false
    };
  },
  props: {
    item: Object,
    root: Object,
    old: Object,
    value: String
  },
  methods: {
    copyOld(value) {
      this.root[value] = this.old[value];
    },
    isSubOrder() {
      return this.$route.params.is_copy == 2;
    }
  }
};
</script>