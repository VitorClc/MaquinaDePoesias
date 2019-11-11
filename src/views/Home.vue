<template>
  <v-container fluid class="paper">
    <v-row>
      <v-col cols="4"></v-col>
      <v-col cols="4" align="center" justify="center" class="topSpacing">
        <h1 class="title">Escolha uma poesia</h1>
      </v-col>
      <v-col cols="4" align="center" justify="center" class="topSpacing">
        <IndexNavigation :page={page} @pageValue="changePage"></IndexNavigation>
      </v-col>
    </v-row>

    <transition name="fade" mode="out-in">      
      <v-row class="centered" v-if="page==0" key="0">
        <v-col cols="1"></v-col>
        <v-col cols="10" align="center" justify="center">
          <div class="poemsDiv" id="1">
            <router-link :to="{ path:'/poem', query: { index: i }}" v-for="i in 10" v-bind:key="i"><h1 class="poemTitle">{{poems[i - 1].text}}</h1></router-link>
          </div>
        </v-col>
      </v-row>

      <v-row class="centered" v-if="page==1" key="1">
        <v-col cols="1"></v-col>
        <v-col cols="10" align="center" justify="center">
          <div class="poemsDiv" id="1">
            <router-link :to="{ path:'/poem', query: { index: i + 10}}" v-for="i in 10" v-bind:key="i"><h1 class="poemTitle">{{poems[i - 1 + 10].text}}</h1></router-link>
          </div>
        </v-col>
      </v-row>

      <v-row class="centered" v-if="page==2" key="2">
        <v-col cols="1"></v-col>
        <v-col cols="10" align="center" justify="center">
          <div class="poemsDiv" id="1">
            <router-link :to="{ path:'/poem', query: { index: i + 20}}" v-for="i in 10" v-bind:key="i"><h1 class="poemTitle">{{poems[i - 1 + 20].text}}</h1></router-link>
          </div>
        </v-col>
      </v-row> 

      <v-row class="centered" v-if="page==3" key="3">
        <v-col cols="1"></v-col>
        <v-col cols="10" align="center" justify="center">
          <div class="poemsDiv" id="1">
            <router-link :to="{ path:'/poem', query: { index: i + 30}}" v-for="i in 10" v-bind:key="i"><h1 class="poemTitle">{{poems[i - 1 + 30].text}}</h1></router-link>
          </div>
        </v-col>
      </v-row> 

      <v-row class="centered" v-if="page==4" key="4">
        <v-col cols="1"></v-col>
        <v-col cols="10" align="center" justify="center">
          <div class="poemsDiv" id="1">
            <router-link :to="{ path:'/poem', query: { index: i + 40}}" v-for="i in 10" v-bind:key="i"><h1 class="poemTitle">{{poems[i - 1 + 40].text}}</h1></router-link>
          </div>
        </v-col>
      </v-row>

      <v-row class="centered" v-if="page==5" key="5">
        <v-col cols="1"></v-col>
        <v-col cols="10" align="center" justify="center">
          <div class="poemsDiv" id="1">
            <router-link :to="{ path:'/poem', query: { index: i + 50}}" v-for="i in 10" v-bind:key="i"><h1 class="poemTitle">{{poems[i - 1 + 50].text}}</h1></router-link>
          </div>
        </v-col>
      </v-row>   

      <v-row class="centered" v-if="page==6" key="6">
        <v-col cols="1"></v-col>
        <v-col cols="10" align="center" justify="center">
          <div class="poemsDiv" id="1">
            <router-link :to="{ path:'/poem', query: { index: i + 60}}" v-for="i in 10" v-bind:key="i"><h1 class="poemTitle">{{poems[i - 1 + 60].text}}</h1></router-link>
          </div>
        </v-col>
      </v-row>   

      <v-row class="centered" v-if="page==7" key="7">
        <v-col cols="1"></v-col>
        <v-col cols="10" align="center" justify="center">
          <div class="poemsDiv" id="1">
            <router-link :to="{ path:'/poem', query: { index: i + 70}}" v-for="i in 10" v-bind:key="i"><h1 class="poemTitle">{{poems[i - 1 + 70].text}}</h1></router-link>
          </div>
        </v-col>
      </v-row>

      <v-row class="centered" v-if="page==8" key="8">
        <v-col cols="1"></v-col>
        <v-col cols="10" align="center" justify="center">
          <div class="poemsDiv" id="1">
            <router-link :to="{ path:'/poem', query: { index: i + 80}}" v-for="i in 10" v-bind:key="i"><h1 class="poemTitle">{{poems[i - 1 + 80].text}}</h1></router-link>
          </div>
        </v-col>
      </v-row>

      <v-row class="centered" v-if="page==9" key="9">
        <v-col cols="1"></v-col>
        <v-col cols="10" align="center" justify="center">
          <div class="poemsDiv" id="1">
            <router-link :to="{ path:'/poem', query: { index: i + 90}}" v-for="i in 10" v-bind:key="i"><h1 class="poemTitle">{{poems[i - 1 + 90].text}}</h1></router-link>
          </div>
        </v-col>
      </v-row>                       
    </transition>

  </v-container>
</template>

<script>
import IndexNavigation from '../components/IndexNavigation.vue'

import json from '../data/poemsList.json'

export default {
  name: 'home',
  methods: {
    changePage: function(e){
      this.page = e
    },
  },
    data(){
      return{
        poems: json,
        page: 0
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

  .fade-enter-active, .fade-leave-active {
    transition: opacity .25s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
    opacity: 0;
  }

</style>
