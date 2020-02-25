<template>
  <v-container fluid>
      <v-data-table
            :headers="headers"
            :items="forms"
            :items-per-page="10"
            class="elevation-1"
        ></v-data-table>
  </v-container>   
</template>

<script>
  import api from '@/service/api';

  export default {	
    name: 'Table',
    data () {
      return {
         headers: [
            { text: 'ID', value: 'id' },
            { text: 'Titre', value: 'Title' },
            { text: 'Auteur', value: 'Authors' },
            { text: 'Date', value: 'Date' },
            { text: 'Data', value: 'Content' }
        ],
        forms: [
            {id:1, Title: "Salut", Authors: 'Michel', Date: "01/01/2020", Content: 'blabla'},
            {id:2, Title: "World", Authors: 'Denisot', Date: "02/02/2020", Content: 'blabla'}
         ]
      }
    },
    mounted() {
        api().get('/read/all/scan').then((ret) => {
            console.log(ret.data)
            this.forms = ret.data
        }).catch((e) => {console.log(e)});
    }
  }
</script>
