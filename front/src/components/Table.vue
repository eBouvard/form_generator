<template>
      <v-container fluid>
          <v-data-table
                :headers="headers"
                :items="forms"
                :items-per-page="10"
                class="elevation-1"
                loading
                loading-text="Chargement en cours..."
            >         
            <template v-slot:item.score="{ item }">
              <v-progress-linear color="primary" :value="item.score" rounded></v-progress-linear>
            </template>
            <template v-slot:item.delete>
                <v-btn class="ma-2" icon dark small color="primary">
                    <v-icon v-on:click="console.log('foo')" dark>mdi-trash-can-outline</v-icon>
                </v-btn>
            </template>
            </v-data-table>
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
            { text: 'Titre', value: 'title' },
            { text: 'Auteur', value: 'authors' },
            { text: 'Date', value: 'date' },
            { text: 'Score', value: 'score' },
            { text: 'Objet', value: 'content' },
            { text: 'Supprimer', value: 'delete' }
        ],
        forms: []
      }
    },
    methods() {
    },
    mounted() {
        api().get('/read/all/scan2').then((ret) => {
            const raw = ret.data
            const array = []
            raw.forEach(element => {
                const date = new Date(element.data.Created_Date)
                const score = Math.ceil(element.data.Conformity * 100)
                console.log(score)
                const newline = {
                    id: element.id,
                    title: element.data.Title,
                    authors: element.data.Authors,
                    date: date.toLocaleDateString('fr-FR'),
                    score: score,
                    content: element.data.Content
                }
                array.push(newline)
            });
            this.forms = array
        }).catch((e) => {console.log(e)});
    }
  }
</script>
