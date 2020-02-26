<template>
    <v-container fluid>
      <v-form id="load"
        >
        <v-btn block color="primary" @click="loadForm" dark>Charger formulaire numéro</v-btn>
        <v-text-field
          label="Identifiant"
          outlined
          id="opord_id"
        ></v-text-field>
      </v-form>
      <v-form id="to_print">
        <v-text-field
          label="Titre"
          outlined
          id="viewer_title"
        ></v-text-field>
        <v-form-base :value="myValue" :schema="mySchema" />
      </v-form>
    </v-container>   
</template>

<script>
	import VFormBase from 'vuetify-form-base';  
	import template from '../assets/opord_template.json';  
  import empty from '../assets/opord.viewer.json';
  import api from '@/service/api';


  export default {	
    name: 'Viewer',
    components:{ VFormBase },
    data () {
      return {
        myValue: empty,   
        mySchema: template
      }
    },
    methods: {
      loadForm () {
        var request = "/read/" + document.getElementById("opord_id").value;
        api().get(request).then((ret) => {
          console.log(ret);
          this.myValue = JSON.parse(JSON.stringify(ret.data.content));
          console.log(this.myValue);
        }).catch((e) => {console.log(e)})
      }
    }
  }
</script>

<style>
  #form-base .item { 
    width:100%; 
  }
</style>