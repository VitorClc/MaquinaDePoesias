<template>
  <div class="poem">
    <v-container fluid class="paper">
      <v-row>
        <v-col cols="1" align="center" justify="center">
          <router-link to="/"><button class="rightSpacing"><v-icon dark>mdi-arrow-left</v-icon></button></router-link>
        </v-col>
        <v-col cols="9" align="center" justify="center">
          <transition name="fade" mode="out-in">      
            <v-row class="centered" v-if="page==1" key="1">
              <v-col cols="1"></v-col>
              <v-col cols="10" align="center" justify="center">
                1
              </v-col>
            </v-row>

            <v-row class="centered" v-if="page==2" key="2">
              <v-col cols="1"></v-col>
              <v-col cols="10" align="center" justify="center">
                asdasdd
              </v-col>
            </v-row> 

            <v-row class="centered" v-if="page==3" key="3">
              <v-col cols="1"></v-col>
              <v-col cols="10" align="center" justify="center">
                3
              </v-col>
            </v-row> 
          </transition>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        page: 0,
      }
    },
  }
</script>

<style scoped>

    *{
        font-family: 'Roboto';
        src: url("./../fonts/Roboto-Regular.ttf") format("ttf");
        font-style: normal;
        font-weight: 400;
    }

    .poem{
        background-image: url("./../images/paper.jpg");
        background-size: cover;
        height: 100vh;
    }

    .rightSpacing{
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

    .rightSpacing:focus {outline:0 !important;}

    .rightSpacing:active{
        background-color: #c4a5c4;
        text-decoration: none;
    }

    .rightSpacing:disabled{
        padding: 15px 32px;
        background-color: #cccccc;
        color: #666666;
    }
    
    .fade-enter-active, .fade-leave-active {
      transition: opacity .25s;
    }

    .fade-enter, .fade-leave-to{
      opacity: 0;
    }
</style>
