<template>
  <v-container fill-height>
    <v-row no-gutter>
      <v-col>
        <ScopeSelector></ScopeSelector>
      </v-col>
      <v-col>
        <LastOrders :key="$store.getters.template"></LastOrders>
      </v-col>
      <v-col>
        <KPI></KPI>
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