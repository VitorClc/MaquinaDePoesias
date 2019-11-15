<template>
  <div class="poem">
    <v-container fluid class="paper">
      <v-row>
        <v-col cols="1" align="center" justify="center">
          <router-link to="/"><button class="rightSpacing"><v-icon dark>mdi-arrow-left</v-icon></button></router-link>
        </v-col>
        <v-col cols="11" align="center" justify="center"></v-col>
        <v-col cols="1" align="center" justify="center"></v-col>
        <v-col cols="10" align="center" justify="center">
          <transition name="fade" mode="out-in">      
            <v-row class="centered" v-if="page==1" key="1">
              <v-col cols="1"></v-col>
              <v-col cols="10" align="center" justify="center">
                <div class="poemsDiv">
                  <v-row>
                    <v-col cols="2"></v-col>
                    <v-col cols="8">
                      <input ref="nameInput" @keypress="test()" @blur="test()"/>
                      <v-text-field v-model="email" :error-messages="emailErrors" @input="$v.email.$touch()" @blur="$v.email.$touch()" class="styledInput" label="E-mail"></v-text-field>
                      <v-text-field v-model="tel" :error-messages="telErrors" @input="$v.tel.$touch()" @blur="$v.tel.$touch()" class="styledInput" label="Telefone"></v-text-field>
                      <button class="formPrevious" @click="prevPage()" :disabled="page < 2">Voltar</button>
                      <button class="formNext" @click="nextPage()" :disabled="this.$v.$invalid">Próximo</button>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>

            <v-row class="centered" v-if="page==2" key="2">
              <v-col cols="1"></v-col>
              <v-col cols="10" align="center" justify="center">
                <div class="poemsDiv">
                  <v-row>
                    <v-col cols="2"></v-col>
                    <v-col cols="8">
                        <v-textarea v-model="ans1" @keydown="ans1Check" outlined label="Deixe sua opnião sobre o projeto" rows="3"></v-textarea>
                        <v-text-field v-model="ans2" class="styledInput" label="Qual poesia você mais gostou?"></v-text-field>
                        <v-text-field v-model="ans3" class="styledInput" label="Quantas poesias você ouviu?"></v-text-field>
                        <v-text-field v-model="ans4" class="styledInput" label="O que achou da janela de LIBRAS?"></v-text-field>
                        <v-text-field v-model="ans5" class="styledInput" label="Você gostaria que este totem ocupasse algum outro espaço?"></v-text-field>
                        <button class="formPrevious" @click="prevPage()" :disabled="page < 2" >Voltar</button>
                        <button class="formNext" @click="finishForm()">Próximo</button>
                    </v-col>
                  </v-row>
                </div>
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
  import { validationMixin } from 'vuelidate'
  import { required, email } from 'vuelidate/lib/validators'

  const mustBeCool = (value) => /^(\(11\) [9][0-9]{4}-[0-9]{4})|(\(1[2-9]\) [5-9][0-9]{3}-[0-9]{4})|(\([2-9][1-9]\) [5-9][0-9]{3}-[0-9]{4})$/.test(value) == true

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required },
      email: { required, email },
      tel: {required, mustBeCool}
    },

    methods:{
      test(){
        this.name = this.$refs.nameInput.value
        console.log(this.name)
      },
      ans1Check(evt){
        if (this.ans1.length >= 190) {
          evt.preventDefault()
          return
        }
      },
      prevPage () {
        if(this.page > 1){
          this.page -= 1
        }
      },
      nextPage:function(){
        this.$v.$touch()

        if(this.page < 2){
          if (!this.$v.$invalid) {
            this.page += 1
          }
        }
      },
      finishForm:function() {
        const data = {
          name: this.name,
          email: this.email,
          tel: this.tel,
          ans1: this.ans1,
          ans2: this.ans2,
          ans3: this.ans3,
          ans4: this.ans4,
          ans5: this.ans5,
        }

        const jsonString = JSON.stringify(data)

        alert(jsonString)
      }
    },
    computed:{
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.required && errors.push('Digite seu nome.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('E-mail inválido')
        !this.$v.email.required && errors.push('Digite seu e-mail')
        return errors
      },
      telErrors () {
        const errors = []
        if (!this.$v.tel.$dirty) return errors
        !this.$v.tel.mustBeCool && errors.push('Telefone inválido')
        !this.$v.tel.required && errors.push('Digite seu número de telefone')
        return errors
      },
    },
    data () {
      return {
        page: 1,
        name: '',
        email: '',
        tel: '',
        ans1: '',
        ans2: '',
        ans3: '',
        ans4: '',
        ans5: '',
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
    
    .poemsDiv{
      border: 2px solid #c4a5c4;
      border-radius: 25px;
      padding: 25px;
    }

    .poem{
        background-image: url("./../images/paper.jpg");
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
    
    .formNext, .formPrevious{
      font-size: 20px;
    }

    .formNext{
      margin-left: 10px;
    }
    
    .styledInput{
      height: 80px;
      font-size: 20px;
    }

    .fade-enter-active, .fade-leave-active {
      transition: opacity .25s;
    }

    .fade-enter, .fade-leave-to{
      opacity: 0;
    }
</style>
