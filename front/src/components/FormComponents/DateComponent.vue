<template>
  <v-col cols="12">
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      :nudge-right="40"
      :return-value.sync="date"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          :value="(root[value] == '') ? '' : moment(root[value]).format('dddd Do MMMM YYYY')"
          clearable
          :label="item.label"
          readonly
          v-on="on"
        ></v-text-field>
      </template>

      <v-date-picker v-model.lazy="root[value]" no-title scrollable>
        <v-spacer></v-spacer>
        <v-btn flat color="primary" @click="menu = false">Annuler</v-btn>
        <v-btn flat color="primary" @click="$refs.menu.save(date)">Valider</v-btn>
      </v-date-picker>
    </v-menu>
  </v-col>
</template>

<script>
import moment from 'moment'

export default {
  name: "DateComponent",
  data() {
    return {
      menu: false,
      moment: moment
    };
  },
  props: {
    item: Object,
    root: Object,
    value: String
  }
};
</script>