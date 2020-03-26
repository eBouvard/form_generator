<template>
  <v-container fluid ma-0 pa-0 style="max-width: 700px" >
    <JsonEditor
      :options="{
            confirmText: 'confirm',
            cancelText: 'cancel',
        }"
      :objData="jsonData"
      v-model="jsonData"
    ></JsonEditor>
  </v-container>
</template>
<script>
export default {
    name: "formEditor",
    data() {
        return {
            jsonData: this.$store.getters.templateSelected
        }
    },
    methods: {
        init() {
        }
    },
    mounted() {
        this.init();
    }
}
</script> 