<template>
  <v-container>
    <v-card text-center wrap class="ma-1 pa-2">
      <v-file-input
        :disabled="$store.getters.template != 'opord'"
        v-model="uploadFile"
        id="upload"
        prepend-icon="mdi-file"
        accept="application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        label="Selectionner votre document"
        @change="onFileChange(uploadFile)"
        rounded
        :loading="loading"
        hint="doc/docx et pdf seulement. L'import peut prendre plusieurs minutes."
      ></v-file-input>
    </v-card>
    <v-alert
      type="warning"
      dismissible
      class="mt-5"
      v-if="$store.getters.template != 'opord'"
    >Le template {{ $store.getters.template.toUpperCase() }} n'est pas compatible avec le parser.</v-alert>
  </v-container>
</template>

<script>
import api from "@/service/api";

export default {
  name: "Upload",
  data() {
    return {
      uploadFile: null,
      loading: false
    };
  },
  methods: {
    onFileChange(uploadFile) {
      this.loading = true;
      if (uploadFile) {
        const formData = new FormData();
        formData.append("file", uploadFile);
        api()
          .post("/upload/" + this.$store.state.template, formData)
          .then(ret => {
            const id = ret.data.id;
            this.loading = false;
            if (!isNaN(id)) {
              this.$router.push({
                path: "/view/order/" + id
              });
            }
          })
          .catch(e => {
            console.log(e);
          });
      } else {
        this.uploadFile = false;
      }
    }
  }
};
</script>