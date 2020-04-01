<template>
  <v-container fill-height>
    <v-row no-gutter>
      <v-col
      sm="6"
      md="3"
      order-sm="1"
      order-md="1"
      >
        <ScopeSelector :key="$store.getters.templateList"></ScopeSelector>
      </v-col>
      <v-col
      sm="12"
      md="6"
      order-sm="3"
      order-md="2"
      >
        <LastOrders :key="$store.getters.template"></LastOrders>
      </v-col>
      <v-col
      sm="6"
      md="3"
      order-sm="2"
      order-md="3"
      >
        <KPI :key="$store.getters.template"></KPI>
      </v-col>
    </v-row>
    <v-row>
      <v-col align-self="center">
        <MiniMap></MiniMap>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ScopeSelector from "@/components/Hub/ScopeSelector.vue";
import LastOrders from "@/components/Hub/Last10.vue";
import KPI from "@/components/Hub/KPI.vue";
import MiniMap from "@/components/Hub/MiniMap.vue";

export default {
  name: "Hub",

  components: {
    ScopeSelector,
    LastOrders,
    KPI,
    MiniMap
  },
  data() {
    return {};
  }
};
</script>