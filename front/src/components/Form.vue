<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <v-form id="to_send">
          <v-form-base :value="myValue" :schema="mySchema" />
        </v-form>
        <v-btn block color="primary" @click="submitForm" dark>Submit</v-btn>
      </v-container>   
    </v-content>
  </v-app>
</template>

<script>
	import VFormBase from 'vuetify-form-base';  
	import template from '../assets/opord_template.json';  
  import data from '../assets/opord.json';
  import api from '@/service/api';

  export default {	
    name: 'Form',
    components:{ VFormBase },
    data () {
      return {
        myValue: data,   
        mySchema: template
      }
    },
    methods: {
      submitForm () {
        //console.log(JSON.stringify(data));
        api().post('/create/json', data).then((ret) => {
          console.log(ret);
        }).catch((e) => {console.log(e)});
      }
    }
  }
</script>
