<template>
  <v-container fluid class="paper">
    <v-row >
      <v-col cols="4"></v-col>
      <v-col cols="4" align="center" justify="center" class="topSpacing">
        <h1 class="title">Escolha uma poesia</h1>
      </v-col>
      <v-col cols="4" align="center" justify="center" class="topSpacing">
        <IndexNavigation></IndexNavigation>
      </v-col>
    </v-row>

    <v-row class="centered">
      <v-col cols="1"></v-col>
      <v-col cols="10" align="center" justify="center">
        <div class="poemsDiv" id="1">
          <router-link to="" v-for="data in poems" v-bind:key="data.key"><h1 class="poemTitle">{{data.text}}</h1></router-link>
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
  .paper{
    background-image: url("./../images/paper.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100vh;
  }

  .topSpacing{
    margin-top: 30px;
  }

  h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
  }

  .title{
    font-size: 60px;
  }

  .centered{
    margin-top: 90px;
  }

  .poemsDiv{
    border: 2px solid #c4a5c4;
    border-radius: 25px;
    padding: 25px;
  }

  .poemTitle{
    font-size: 40px;
    font-weight: 300;
  }

</style>
