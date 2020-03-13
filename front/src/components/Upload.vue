<template>
  <v-container>
    <v-card text-center wrap class="ma-1 pa-2">
        <v-file-input
          v-model="uploadFile"
          id="upload"
          accept="document/word"
          prepend-icon="mdi-file"
          label="Upload your document"
          @change="onFileChange()">
        </v-file-input>
    </v-card>
  </v-container>
</template>

<script>
import api from '@/service/api';

export default {
  name: 'Upload',
  data() {
    return {
      uploadFile: null,
    };
  },
  methods: {
    onFileChange(uploadFile) {
      if (uploadFile) {
        const FormData = new FormData();
        FormData.append('file', uploadFile);
        api().post('/upload', FormData).then((req, ret) => {
            console.log(req)
            console.log(ret.data)
        }).catch((e) => { console.log(e);});
      } else {
        this.selectedFile = null;
      }
    }
  }
};
</script>