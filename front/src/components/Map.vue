<template>
  <div style="height: 100%; width: 100%;">
    <!-- <div style="height: 50px overflow: auto;">
      <p>First marker is placed at {{ withPopup.lat }}, {{ withPopup.lng }}</p>
      <p>Center is at {{ currentCenter }} and the zoom is: {{ currentZoom }}</p>
      <button @click="showLongText">Toggle long popup</button>
      <button @click="showMap = !showMap">Toggle map</button>
    </div>-->
    <l-map
      :key="$store.state.blackTheme"
      :class="{'darkMap': $store.state.blackTheme}"
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 100%; z-index: 0;"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer :url="url" />
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer } from "vue2-leaflet";

export default {
  name: "ExampleMap",
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
      withPopup: latLng(47.41322, -1.219482),
      withTooltip: latLng(47.41422, -1.250482),
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

<style scoped>
.darkMap {
  filter: invert(100%) brightness(60%) contrast(80%) hue-rotate(180deg)
    saturate(130%);
}

.darkMap >>> .leaflet-bar {
  box-shadow: 0 1px 5px rgba(255,255,255,0.8);
  border: black 1px solid;
}

.darkMap >>> a {
  color: black;
}
</style>
