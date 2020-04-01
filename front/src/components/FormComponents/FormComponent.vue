<template>
  <v-container style="max-width: 90vh">
    <div v-for="key in Object.keys(items)" :key="key">
      <v-stepper v-if="items[key].type === 'chapter'" :v-model="root[key]" class="mb-2" vertical>
        <v-card-title class="headline">
          <h3
            v-if="(root[key].security_classification) && (root[key].security_classification != '')"
            class="security_classification"
          >{{ root[key].security_classification }}</h3>
          <h3 v-else style="font-weight: 400;">{{ items[key].label }}</h3>
        </v-card-title>
        <FormComponent
          :items="items[key].content"
          :root="root[key]"
          :old="(old == undefined) ? (undefined) : old[key]"
        ></FormComponent>
      </v-stepper>
      <v-card v-if="items[key].type === 'category'" class="mt-2" outlined>
        <v-card-title class="headline">
          <h4 style="font-weight: 400;">{{ items[key].label }}</h4>
        </v-card-title>
        <v-card-actions>
          <FormComponent
            :items="items[key].content"
            :root="root[key]"
            :old="(old == undefined) ? (undefined) : old[key]"
          ></FormComponent>
        </v-card-actions>
      </v-card>
      <v-row justify="center" no-gutters>
        <SmallTextComponent
          v-if="items[key].type === 'small_text'"
          :item="items[key]"
          :root="root"
          :value="key"
        ></SmallTextComponent>
        <DateComponent
          v-if="items[key].type === 'date'"
          :item="items[key]"
          :root="root"
          :value="key"
        ></DateComponent>
        <AutoCompleteComponent
          v-if="items[key].type === 'autocomplete'"
          :item="items[key]"
          :root="root"
          :value="key"
        ></AutoCompleteComponent>
      </v-row>
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
import DateComponent from "@/components/FormComponents/DateComponent.vue";
import AutoCompleteComponent from "@/components/FormComponents/AutoCompleteComponent.vue";
import LargeTextComponent from "@/components/FormComponents/LargeTextComponent.vue";

export default {
  name: "FormComponent",
  components: {
    SmallTextComponent,
    DateComponent,
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