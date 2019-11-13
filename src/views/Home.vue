<template>
  <v-container fluid class="paper">
    <v-row>
      <v-col cols="4"  justify="center" class="topSpacing leftSpacing"><router-link to="/poem"><button class="bookDraw">Ganhe um livro grátis!</button></router-link></v-col>
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
  *{
    -webkit-user-drag: none;
  }

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
    font-size: 55px;
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
    font-size: 50px;
    font-weight: 300;
    width: 10% !important;
  }
  
  a {
    color:#212121;
    font-weight: bold; 
  }
  a:visited {color:#212121;}
  a:hover {color:#a33689;}
  a:active {color:#212121;}

  .fade-enter-active, .fade-leave-active {
    transition: opacity .25s;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }

  button{
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 30px;
    background-color: #a33689;
    border-radius: 30px;
    font-family: 'Roboto';
    font-style: normal;
  }

  button:focus {outline:0 !important;}

  button:active {
    background-color: #c4a5c4;
    text-decoration: none;
  }

  button:disabled{
    padding: 15px 32px;
    background-color: #cccccc;
    color: #666666;
  }

  @-webkit-keyframes color_change /* Safari and Chrome */ {
    0% {background:#a33689;}
    100%{background: #d648b5;}
  }

  .bookDraw {
    -webkit-animation: color_change 1s infinite alternate;
    -moz-animation: color_change 1s infinite alternate;
    -ms-animation: color_change 1s infinite alternate;
    -o-animation: color_change 1s infinite alternate;
    animation: color_change 1s infinite alternate;
  }

  .leftSpacing{
    padding-left: 50px;
  }
</style>
