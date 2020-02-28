<template>
  <v-bottom-sheet overlay-color="transparent" top>
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Timeline</v-btn>
    </template>
    <iframe
      src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1CgwqeLR4dZP3KrllN5LhgEizl3nJ9-pXXeWM3bVjD6M&font=Default&lang=fr&initial_zoom=1&height=350"
      width="100%"
      height="350"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen
      frameborder="0"
    ></iframe>
  </v-bottom-sheet>
</template>

<script>
export default {
  name: "TimeLine"
};
</script>