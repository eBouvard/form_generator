<template >
  <v-container fluid class="ma-0 pa-0">
    <v-app-bar
      height="84px"
      dark
      src="https://www.tissushop.fr/WebRoot/ce_fr3/Shops/263138/58D8/E0C8/92BB/E525/C29C/C0A8/190D/DD97/C-809_CAMOUFLAGE_N2_-3_ml.jpg"
    >
      <template v-slot:img="{ props }">
        <v-img v-bind="props"></v-img>
      </template>
      <v-app-bar-nav-icon style="position:relative; left:10px;">
        <v-img width="50px" aspect-ratio="1" :src="require('../assets/logo.svg')" />
      </v-app-bar-nav-icon>
      <v-toolbar-title>Prométhée -- Opération Barkhane -- 17/01/2020</v-toolbar-title>
      <v-spacer></v-spacer>
      <Date></Date>
    </v-app-bar>
    <!-- <v-row :style=" this.switch ? 'flex-wrap: nowrap; height: calc(100vh - 84px - 174px)' : 'flex-wrap: nowrap; height: calc(100vh - 84px - 84px)' "  no-gutters> -->
    <v-row style="flex-wrap: nowrap; height: calc(100vh - 84px - 74px)"  no-gutters>
      <Menu v-on:item-selected="menuItemSelected"></Menu>
      <v-col v-if="selectedMenuItem" class="flex-grow-0 flex-shrink-1">
        <SousMenu1 v-on:item-selected-sub="menuItemSelectedSub" :item="selectedMenuItem"></SousMenu1>
      </v-col>
      <v-col v-if="selectedMenuItemSub" class="flex-grow-0 flex-shrink-1">
        <SousMenu2 :item="selectedMenuItemSub"></SousMenu2>
      </v-col>
      <v-col class="flex-grow-1 flex-shrink-0" no-gutters>
        <Map></Map>
      </v-col>
    </v-row>
    <v-footer style="height: 74px;" absolute>
      <v-switch color="primary" v-model="switch3">
	</v-switch>
      <v-spacer></v-spacer>
      <TimeLine></TimeLine>
      <div style="width: 10px"></div>
      <Form></Form>
      <div style="width: 10px"></div>
      <Message></Message>
      <div style="width: 10px"></div>
    </v-footer>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/Menu.vue";
import SousMenu1 from "@/components/SousMenu1.vue";
import SousMenu2 from "@/components/SousMenu2.vue";
import Map from "@/components/Map.vue";
import Message from "@/components/Message.vue";
import Date from "@/components/Date.vue";
import TimeLine from "@/components/TimeLine.vue";
import Form from "@/components/Form.vue";

export default {
  name: "home",
  components: {
    Menu,
    SousMenu1,
    SousMenu2,
    Map,
    Message,
    Date,
    TimeLine,
    Form
  },
  data() {
    return {
      selectedMenuItem: null,
      selectedMenuItemSub: null,
      selectedMenuItemSubDetail: null,
      switch: false
    };
  },
  methods: {
    menuItemSelected(item) {
      if (item === this.selectedMenuItem) {
        this.selectedMenuItem = null;
        this.selectedMenuItemSub = null;
      } else {
        this.selectedMenuItem = item;
      }
    },
    menuItemSelectedSub(item) {
      if (item === this.selectedMenuItemSub) {
        this.selectedMenuItemSub = null;
      } else {
        this.selectedMenuItemSub = item;
      }
    },
  }
};
</script>