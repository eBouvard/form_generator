<template>
  <v-container>
    <v-card text-center wrap class="ma-1 pa-2">
        <v-file-input
          v-model="selectedFile"
          id="upload"
          accept="audio/mp3"
          prepend-icon="mdi-file"
          label="Upload your document"
          @change="onFileChange">
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
      selectedFile: null
    };
  },
  methods: {
    onFileChange(selectedFile) {
      if (selectedFile) {
        const fileFD = new FormData();
        fileFD.append('file', selectedFile);
        api().post('/upload', fileFD).then((ret) => {
            console.log(ret)
        }).catch((e) => { console.log(e); });
      } else {
        this.selectedFile = null;
      }
    }
  }
};
</script>
© 2020 GitHub, Inc.