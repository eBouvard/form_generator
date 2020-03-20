<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs4>
        <FilterList></FilterList>
        <v-divider></v-divider>
        <MapHub></MapHub>
      </v-flex>
      <v-flex xs8>
        <LastOrders></LastOrders>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import LastOrders from "@/components/Hub/Last10.vue";
import MapHub from "@/components/Hub/Map.vue";
import FilterList from "@/components/Hub/Filter.vue";

export default {
  name: "Hub",

  components: {
    FilterList,
    LastOrders,
    MapHub
  },
  data() {
    return {};
  }
};
</script>