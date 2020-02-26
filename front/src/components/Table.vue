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
            { text: 'Titre', value: 'data.title' },
            { text: 'Auteur', value: 'data.author' },
            { text: 'Date', value: 'data.date' },
//            { text: 'Data', value: 'data.content' }
        ],
        forms: [
//            {id:1, data: {title: "Salut", author: 'Michel', date: "01/01/2020", content: 'blabla'}}
         ]
      }
    },
    mounted() {
        api().get('/read/all/').then((ret) => {
            console.log(ret.data)
            this.forms = ret.data
        }).catch((e) => {console.log(e)});
    }
  }
</script>
