<template>
  <v-container fluid>
    <div v-for="item in items" :key="item.label">
      <fieldset v-if="item.type === 'category'" style="margin: 0.5em;">
        <CategoryComponent :item="item"></CategoryComponent>
        <FormComponent :items="item.content"></FormComponent>
      </fieldset>
      <div v-if="item.type === 'small_text'">
        <SmallTextComponent :item="item"></SmallTextComponent>
      </div>
      <div v-if="item.type === 'large_text'">
        <LargeTextComponent :item="item"></LargeTextComponent>
      </div>
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