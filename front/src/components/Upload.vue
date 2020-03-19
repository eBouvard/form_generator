<template>
  <v-container>
    <v-card text-center wrap class="ma-1 pa-2">
      <v-file-input
        v-model="uploadFile"
        id="upload"
        prepend-icon="mdi-file"
        accept="application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        label="Selectionner votre document"
        @change="onFileChange(uploadFile)"
        rounded
        :loading="loading"
        hint=".doc ou .docx seulement. L'import peux prendre plusieurs minutes."
      ></v-file-input>
    </v-card>
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
          .post("/upload", formData)
          .then(ret => {
            const id = ret.data.id;
            console.log(!isNaN(id));
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