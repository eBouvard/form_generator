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

    export default {	
      components:{ VFormBase },
      data () {
        return {
          myValue: {
            name: 'Jumo',
            password: '123456',
            email: 'base@mail.com',
            checkbox: true,
            select: 'Jobs',
          },   
          mySchema: {
            name: { type: 'text', label: 'Name' },
            password: { type: 'password', label: 'Password' },
            email: { type: 'email', label: 'Email' },
            checkbox: { type: 'checkbox', label: 'Checkbox' },
            select: { type: 'select', label: 'Select', items: ['Tesla', 'Jobs', 'Taleb'] }
          }
        }
      }
    }
</script>
