    <template>
      <v-app>
        <v-content>
          <v-container fluid>
            <v-form>
              <v-form-base :value="myValue" :schema="mySchema" />
            </v-form>
          </v-container>   
        </v-content>
      </v-app>
    </template>

<script>
  import VFormBase from 'vuetify-form-base';
  import opord from './assets/opord.json';
  import template from './assets/opord_template.json';

  export default {
    components: { VFormBase },
    data() {
      return {
        myValue: opord,
        mySchema: template
      }
    }
  }
</script>
