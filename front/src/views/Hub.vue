<template>
  <v-container grid-list-md >
      <v-layout row wrap>
          <v-flex xs6>
              <Table></Table>
            </v-flex>
            <v-flex xs6>
              <LastOrders></LastOrders>
            </v-flex>
      </v-layout>
  </v-container>
</template>
<script>
import LastOrders from "@/components/Hub/Last10.vue";

export default {
  name: "Hub",

  components: {
      LastOrders,
  },
  data() {
    return {
    };
  }
}
</script>