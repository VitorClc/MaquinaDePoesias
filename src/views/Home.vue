<template>
  <v-container fluid>
    <v-row >
      <v-col cols="4"></v-col>
      <v-col cols="4" align="center" justify="center">
        <h1>Escolha uma poesia</h1>
      </v-col>
      <v-col cols="4" align="center" justify="center">
        <IndexNavigation></IndexNavigation>
      </v-col>
    </v-row>

    <v-row>
      <v-col align="center" justify="center">
        <div class="poemsDiv">
          <router-link to="" v-for="data in poems" v-bind:key="data.key"><h1>{{data.text}}</h1></router-link>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import IndexNavigation from '../components/IndexNavigation.vue'

import json from '../data/poemsList.json'

export default {
  name: 'home',
  data(){
    return{
      poems: json
    }
  },
  components: {
    IndexNavigation
  }
}
</script>

<style scoped>  
  h1{
    margin: 0px;
  }

  .poemsDiv{
    border: 2px solid #c4a5c4;
    border-radius: 25px;
    padding: 25px;
  }
</style>
