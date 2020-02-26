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
            { text: 'Data', value: 'data.content' }
        ],
        forms: []
      }
    },
    mounted() {
        api().get('/read/all/scan').then((ret) => {
            const raw = ret.data
            const array = []
            raw.forEach(element => {
                console.log(element)
                const newline = {
                    id: element.id,
                    title: element.data.Title,
                    authors: element.data.Authors,
                    date: element.data.Created_Date,
                    content: element.data.Content
                }
                array.push(newline)
            });
            this.forms = array
        }).catch((e) => {console.log(e)});
    }
  }
</script>
