<template>
  <v-container fluid>
    <div v-for="item in items" :key="item.label">
      <fieldset v-if="item.type === 'category'" style="margin: 0.5em;">
        <CategoryComponent :item="item"></CategoryComponent>
        <FormComponent :items="item.content"></FormComponent>
      </fieldset>
      <SmallTextComponent v-if="item.type === 'small_text'" :item="item"></SmallTextComponent>
      <LargeTextComponent v-if="item.type === 'large_text'" :item="item"></LargeTextComponent>
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
    items: Object
  }
};
</script>