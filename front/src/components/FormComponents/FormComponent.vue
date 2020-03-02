<template>
  <v-container fluid>
    <div v-for="item in items" :key="item.label">
      <div v-if="item.type === 'category'" style="border: 0.1rem solid grey; margin: 0.5rem;">
        <CategoryComponent :item="item"></CategoryComponent>
        <FormComponent :items="item.content"></FormComponent>
      </div>
      <TextComponent v-if="item.type === 'text'" :item="item"></TextComponent>
    </div>
  </v-container>
</template>

<script>
import CategoryComponent from "@/components/FormComponents/CategoryComponent.vue";
import TextComponent from "@/components/FormComponents/TextComponent.vue";

export default {
  name: "FormComponent",
  components: {
    CategoryComponent,
    TextComponent
  },
  data() {
    return {};
  },
  props: {
    items: Object
  }
};
</script>