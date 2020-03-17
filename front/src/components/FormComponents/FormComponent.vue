<template>
  <v-container fluid>
    <div v-for="key in Object.keys(items)" :key="key">
      <v-stepper v-if="items[key].type === 'chapter'" :v-model="root[key]" class="mb-2" vertical>
        <v-card-title class="headline">
          <h3 style="font-weight: 400;">{{ items[key].label }}</h3>
        </v-card-title>
        <FormComponent :items="items[key].content" :root="root[key]"></FormComponent>
      </v-stepper>
      <v-card v-if="items[key].type === 'category'" class="mt-2">
        <v-card-title class="headline">
          <h4 style="font-weight: 400;">{{ items[key].label }}</h4>
        </v-card-title>
        <v-card-actions>
          <FormComponent :items="items[key].content" :root="root[key]"></FormComponent>
        </v-card-actions>
      </v-card>
      <SmallTextComponent
        v-if="items[key].type === 'small_text'"
        :item="items[key]"
        :root="root"
        :value="key"
      ></SmallTextComponent>
      <LargeTextComponent
        v-if="items[key].type === 'large_text'"
        :item="items[key]"
        :root="root"
        :value="key"
      ></LargeTextComponent>
    </div>
  </v-container>
</template>

<script>
import SmallTextComponent from "@/components/FormComponents/SmallTextComponent.vue";
import LargeTextComponent from "@/components/FormComponents/LargeTextComponent.vue";

export default {
  name: "FormComponent",
  components: {
    SmallTextComponent,
    LargeTextComponent
  },
  data() {
    return {};
  },
  props: {
    items: Object,
    root: Object
  }
};
</script>