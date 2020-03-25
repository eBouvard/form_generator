<template>
  <v-container fluid>
    <div v-for="key in Object.keys(items)" :key="key">
      <v-stepper v-if="items[key].type === 'chapter'" :v-model="root[key]" class="mb-2" vertical>
        <v-card-title class="headline">
          <h3
            v-if="(root[key].security_classification) && (root[key].security_classification != '')"
            class="security_classification"
          >{{ root[key].security_classification }}</h3>
          <h3 v-else style="font-weight: 400;">{{ items[key].label }}</h3>
        </v-card-title>
        <FormComponent :items="items[key].content" :root="root[key]" :old="(old == undefined) ? (undefined) : print(old[key])"></FormComponent>
      </v-stepper>
      <v-card v-if="items[key].type === 'category'" class="mt-2">
        <v-card-title class="headline">
          <h4 style="font-weight: 400;">{{ items[key].label }}</h4>
        </v-card-title>
        <v-card-actions>
          <FormComponent :items="items[key].content" :root="root[key]" :old="(old == undefined) ? (undefined) : print(old[key])"></FormComponent>
        </v-card-actions>
      </v-card>
      <SmallTextComponent
        v-if="items[key].type === 'small_text'"
        :item="items[key]"
        :root="root"
        :value="key"
      ></SmallTextComponent>
      <AutoCompleteComponent
        v-if="items[key].type === 'autocomplete'"
        :item="items[key]"
        :root="root"
        :value="key"
      ></AutoCompleteComponent>
      <LargeTextComponent
        v-if="items[key].type === 'large_text'"
        :item="items[key]"
        :root="root"
        :old="old"
        :value="key"
      ></LargeTextComponent>
    </div>
  </v-container>
</template>

<script>
import SmallTextComponent from "@/components/FormComponents/SmallTextComponent.vue";
import AutoCompleteComponent from "@/components/FormComponents/AutoCompleteComponent.vue";
import LargeTextComponent from "@/components/FormComponents/LargeTextComponent.vue";

export default {
  name: "FormComponent",
  components: {
    SmallTextComponent,
    AutoCompleteComponent,
    LargeTextComponent
  },
  data() {
    return {};
  },
  props: {
    items: Object,
    root: Object,
    old: Object
  },
  methods: {
    print(thing) {console.log(thing); return thing;}
  }
};
</script>

<style scoped>
.security_classification {
  font-weight: 400;
  text-align: center;
  border: 0.1em solid red;
  color: red;
  font-size: 1.3em;
  padding: 2%;
  width: 90%;
  margin-right: 5%;
  margin-left: 5%;
}
.theme--dark.v-stepper {
  background: #1e1e1e;
}
</style>