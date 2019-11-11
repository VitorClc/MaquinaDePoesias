<template>
  <div class="poem">
    <v-container fluid class="paper">
      <v-row>
        <v-col cols="1" align="center" justify="center">
          <button @click="previousPage" class="rightSpacing"><v-icon>mdi-arrow-right</v-icon></button>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
  .poem{
    background-image: url("./../images/poem.jpg");
    background-size: cover;
    height: 100vh;
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

  button:active{
    background-color: #c4a5c4;
    text-decoration: none;
  }

  button:disabled{
    padding: 15px 32px;
    background-color: #cccccc;
    color: #666666;
  }
</style>
