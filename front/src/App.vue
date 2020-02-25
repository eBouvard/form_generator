<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item link
        @click="app_position = 0"
        >
          <v-list-item-action>
            <v-icon>mdi-earth</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Accueil</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link
        @click="app_position = 1"
        >
          <v-list-item-action>
            <v-icon>mdi-pen</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Remplissage</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link
        @click="app_position = 2"
        >
          <v-list-item-action>
            <v-icon>mdi-table</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Liste des ordres</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link
        @click="app_position = 3"
        >
          <v-list-item-action>
            <v-icon>mdi-file-document</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Visionnage</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
      <div v-if="app_position == 0"/>
      <Form v-if="app_position == 1"/>
      <div v-if="app_position == 2"/>
      <div v-if="app_position == 3"/>
      </v-container>
    </v-content>

    <v-footer app>
    </v-footer>
  </v-app>
</template>

<script>
import Form from './components/Form.vue';


export default {
    components:{
      Form
      },
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      app_position: 0,
    }),
    created () {
      this.$vuetify.theme.dark = true
    }/*,
    methods: {
      submitForm () {
        var data = {
          title: document.getElementById("title").value,
          author: "",
          date: "",
          content: content};
        console.log(JSON.stringify(data));
        api().post('/create/json', data).then((ret) => {
          console.log(ret);
        }).catch((e) => {console.log(e)});
      }
    }*/
  }
</script>