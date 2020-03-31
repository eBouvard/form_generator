<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs3>
        <KPI></KPI>
        <v-divider></v-divider>
      </v-flex>
      <v-flex xs9>
        <LastOrders :key="$store.getters.template"></LastOrders>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import LastOrders from "@/components/Hub/Last10.vue";
import KPI from "@/components/Hub/KPI.vue";

export default {
  name: "Hub",

  components: {
    LastOrders,
    KPI
  },
  data() {
    return {};
  }
};
</script>