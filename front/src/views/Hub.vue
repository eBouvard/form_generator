<template>
  <v-container>
    <v-row no-gutter align="start">
      <v-col cols="6">
        <ScopeSelector :key="Object.keys($store.getters.templateList).length"></ScopeSelector>
      </v-col>
      <v-col cols="6">
        <KPI :key="$store.getters.template"></KPI>
      </v-col>
      <v-col cols="12">
        <LastOrders :key="$store.getters.template"></LastOrders>
      </v-col>
    </v-row>
    <v-row no-gutter>
      <v-col align-self="center" cols="12">
        <MiniMap></MiniMap>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ScopeSelector from "@/components/Hub/ScopeSelector.vue";
import LastOrders from "@/components/Hub/Last10.vue";
import MiniMap from "@/components/Hub/MiniMap.vue";
import KPI from "@/components/Hub/KPI.vue";

export default {
  name: "Hub",

  components: {
    ScopeSelector,
    LastOrders,
    MiniMap,
    KPI
  },
  data() {
    return {};
  }
};
</script>