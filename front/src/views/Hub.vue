<template>
  <v-container grid-list-md >
      <v-layout row wrap>
          <v-flex xs6>
              <Table></Table>
            </v-flex>
            <v-flex xs6>
              <Table></Table>
            </v-flex>
      </v-layout>
  </v-container>
</template>
<script>
import Table from "@/components/Table.vue";

export default {
  name: "Hub",

  components: {
      Table,
  },
  data() {
    return {
    };
  }
}
</script>