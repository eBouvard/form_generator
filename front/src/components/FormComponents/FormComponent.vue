<template>
  <v-container fluid>
    <div v-for="key in Object.keys(items)" :key="key">
      <v-stepper v-if="items[key].type === 'chapter'" :v-model="root[key]" style="margin: 0.5em;" vertical>
        <CategoryComponent :item="items[key]"></CategoryComponent>
        <FormComponent :items="items[key].content" :root="root[key]"></FormComponent>
      </v-stepper>
      <fieldset v-if="items[key].type === 'category'" style="margin: 0.5em;">
        <CategoryComponent :item="items[key]"></CategoryComponent>
        <FormComponent :items="items[key].content" :root="root[key]"></FormComponent>
      </fieldset>
      <SmallTextComponent v-if="items[key].type === 'small_text'" :item="items[key]" :root="root" :value="key"></SmallTextComponent>
      <LargeTextComponent v-if="items[key].type === 'large_text'" :item="items[key]" :root="root" :value="key"></LargeTextComponent>
    </div>
  </v-container>
</template>

<script>
import CategoryComponent from "@/components/FormComponents/CategoryComponent.vue";
import SmallTextComponent from "@/components/FormComponents/SmallTextComponent.vue";
import LargeTextComponent from "@/components/FormComponents/LargeTextComponent.vue";

export default {
  name: "FormComponent",
  components: {
    CategoryComponent,
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