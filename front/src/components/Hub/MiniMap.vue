<template>
  <v-card height="100%" width="100%">
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
  style="z-index: 0; height: 50vh;"
    >
      <l-tile-layer :url="url" />
    </l-map>
  </v-card>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer } from "vue2-leaflet";

export default {
  name: "MiniMap",
  components: {
    LMap,
    LTileLayer
  },
  data() {
    return {
      zoom: 13,
      center: latLng(48.8514965, 2.3021654),
      url:
        "https://tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=fbfa5071d3d442f0806a7d5eafa3741b",
      currentZoom: 11.5,
      currentCenter: latLng(48.8514965, 2.3021654),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    }
  }
};
</script>
