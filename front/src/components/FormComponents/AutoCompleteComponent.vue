<template>
  <v-autocomplete
    :label="item.label"
    :name="root"
    v-model="root[value]"
    :items="test"
    item-text="name"
  ></v-autocomplete>
</template>

<script>
export default {
  name: "AutoCompleteTextComponent",
  data() {
    return {
      test: [
        { name: 'Non Protégé', abbr: 'NP', id: 0 },
        { name: 'Diffusion Restreinte', abbr: 'DR', id: 1 },
        { name: 'Confidentiel-Défense', abbr: 'CD', id: 2 },
        { name: 'Confidentiel-Défense Spécial France', abbr: 'CD-SF', id: 3 },
        { name: 'Secret-Défense', abbr: 'SD', id: 4 },
        { name: 'Secret-Défense Spécial France', abbr: 'SD-SF', id: 5 }
      ]
    };
  },
  props: {
    item: Object,
    root: Object,
    value: String
  }
};
</script>