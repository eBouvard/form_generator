<template>
  <v-container>
    <v-card text-center wrap class="ma-1 pa-2">
        <v-file-input
          v-model="uploadFile"
          id="upload"
          prepend-icon="mdi-file"
          label="Upload your document"
          @change="onFileChange(uploadFile)"
          rounded>
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
        const formData = new FormData();
        formData.append('file', uploadFile);
        api().post('/upload', formData).then(() => {
        }).catch((e) => { console.log(e);});
      } else {
        this.selectedFile = null;
      }
    }
  }
};
</script>