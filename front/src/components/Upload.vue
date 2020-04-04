<template>
  <v-container>
    <v-row no-gutter align="start">
      <v-col cols="12">
        <v-card text-center wrap class="ma-1 pa-2">
          <v-card-title>
            <span
              class="subtitle-1"
            >Vous pouvez téléverser des documents depuis cette interface afin de les enregistrer en base</span>
          </v-card-title>
          <v-file-input
            :disabled="$store.getters.template != 'opord'"
            v-model="uploadFile"
            id="upload"
            prepend-icon="mdi-file"
            accept="application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            label="Selectionner votre document"
            rounded
            :loading="loading"
            hint="doc/docx et pdf seulement. L'import peut prendre plusieurs minutes."
          ></v-file-input>
        </v-card>
      </v-col>
    </v-row>

    <v-row align="end" no-gutter>
      <v-col
        v-if="$store.getters.template == 'opord'"
        justify="end"
        offset-md="9"
        md="3"
        offset-sm="6"
        sm="6"
        cols="12"
      >
        <v-btn
          right
          v-bind:disabled="uploadFile == null"
          color="primary"
          block
          v-on:click="onFileChange(uploadFile)"
          :loading="loading"
        >Soumettre</v-btn>
      </v-col>
      <v-col v-if="$store.getters.template != 'opord'" cols="12">
        <v-alert
          type="warning"
          dismissible
          class="mt-5"
        >Le template {{ $store.getters.template.toUpperCase() }} n'est pas compatible avec le parser.</v-alert>
      </v-col>
    </v-row>
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
          .post("/api/post/upload/" + this.$store.state.template, formData)
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