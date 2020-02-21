<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <v-form id="to_send">
          <v-form-base :value="myValue" :schema="mySchema" />
        </v-form>
      </v-container>   
    </v-content>
  </v-app>
</template>

<script>
	import VFormBase from 'vuetify-form-base';  
	import template from '../assets/opord_template.json';  
	import data from '../assets/opord.json';  

  export default {	
    name: 'Form',
    components:{ VFormBase },
    data () {
      return {
        myValue: data,   
        mySchema: template
      }
    }
  }
</script>
