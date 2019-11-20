<template>
  <div class="poem">
    <v-container fluid class="paper">
      <v-row>
        <v-col cols="1" align="center" justify="center">
          <router-link to="/" @click="this.page = 0"><button class="rightSpacing"><v-icon dark>mdi-arrow-left</v-icon></button></router-link>
        </v-col>
        <v-col cols="11" align="center" justify="center"></v-col>
        <v-col cols="1" align="center" justify="center"></v-col>
        <v-col cols="10" align="center" justify="center">
          <transition name="fade" mode="out-in">      
            <v-row class="centered" v-if="page==0" key="1">
              <v-col cols="1"></v-col>
              <v-col cols="10" align="center" justify="center">
                <div class="poemsDiv">
                  <v-row>
                    <v-col cols="2"></v-col>
                    <v-col cols="8">
                      <label class="inputInfo">CPF</label>
                      <input ref="cpfInput" @keypress="handleCPF()" @blur="handleCPF()" placeholder="Digite seu CPF"/>
                      <div class="error" v-if="!$v.cpf.required">Você precisa digitar seu CPF</div>
                      <div class="error" v-if="$v.cpf.required && !$v.cpf.validCPF">CPF Inválido</div>

                      <div class="buttons">
                        <button class="formPrevious" @click="prevPage()" :disabled="page < 1">Voltar</button>
                        <button class="formNext" @click="infoPage()" :disabled="!$v.cpf.validCPF">Próximo</button>
                      </div>
                    </v-col>
                  </v-row>  
                </div>
              </v-col>
            </v-row>

            <v-row class="centered" v-if="page==1" key="2">
              <v-col cols="1"></v-col>
              <v-col cols="10" align="center" justify="center">
                <div class="poemsDiv">
                  <v-row>
                    <v-col cols="2"></v-col>
                    <v-col cols="8">
                      <label class="inputInfo">Nome</label>
                      <input ref="nameInput" @keypress="handleName()" @blur="handleName()" placeholder="Digite seu nome"/>
                      <div class="error" v-if="!$v.name.required">Você precisa digitar seu nome</div>
                      
                      <br><br><br>
                      <label class="inputInfo">E-mail</label>
                      <input type="email" ref="emailInput" @keypress="handleEmail()" @blur="handleEmail()" placeholder="Digite seu e-mail"/>
                      <div class="error" v-if="!$v.email.required && $v.email.email">Você precisa digitar seu e-mail</div>
                      <div class="error" v-if="!$v.email.email">E-mail inválido</div>

                      <br><br><br>
                      <label class="inputInfo">Telefone - Formato: (XX) XXXX-XXXX</label>
                      <input ref="phoneInput" @keypress="handlePhone()" @blur="handlePhone()" placeholder="Digite seu número telefone"/>
                      <div class="error" v-if="!$v.phone.required">Você precisa digitar seu número de telefone</div>
                      <div class="error" v-if="$v.phone.required && !$v.phone.mustBeCool">Número de telefone Inválido</div>                      
                      
                      <div class="buttons">
                        <button class="formPrevious" @click="prevPage()" :disabled="page < 1">Voltar</button>
                        <button class="formNext" @click="nextPage()" :disabled="this.$v.$invalid">Próximo</button>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>

            <v-row class="centered" v-if="page==2" key="3">
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
          </transition>
        </v-col>
        <v-app>
          <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="400">
              <v-card>
                <v-card-title class="headline grey lighten-2">Erro</v-card-title>
                <v-card-text style="margin-top: 20px">CPF já cadastrado</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <button @click="dialog = false" class="modalButton">Fechar</button>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-dialog v-model="dialog2" persistent max-width="400">
              <v-card>
                <v-card-title class="headline grey lighten-2">Confirmação</v-card-title>
                <v-card-text>Cadastro finalizado</v-card-text>
                <v-card-actions style="margin-top: 20px">
                  <v-spacer></v-spacer>
                  <router-link to="/"><button text @click="closeEndDialog()"></button></router-link>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </v-app>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, email } from 'vuelidate/lib/validators'
  import { format as formatCPF } from 'gerador-validador-cpf'
  import { validate as validateCPF } from 'gerador-validador-cpf'

  function testCPF(value){
        var convertedCPF = value.replace('.', '')
        convertedCPF = convertedCPF.replace('-', '')
        convertedCPF = convertedCPF.replace('.', '')
        var cpf = convertedCPF

    if(cpf.length < 11)
            {
              return false
            }
            else{
              cpf = formatCPF(cpf)
              if(validateCPF(cpf) == false){
                return false
              }else{
                return true
              }
            }
        }

  const mustBeCool = (value) => /^\([1-9]\d\)(\s|)(9?\d{4}-\d{4}|(\d{4}-\d{4}))$/.test(value) == true
  const validCPF = (value) => testCPF(value) == true

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required },
      email: { required, email },
      phone: {required, mustBeCool},
      cpf: {required, validCPF}
    },

    methods:{
      handleCPF(){
        this.cpf = this.$refs.cpfInput.value
        //console.log(this.name)
      },
      handleName(){
        this.name = this.$refs.nameInput.value
        //console.log(this.name)
      },
      handleEmail(){
        this.email = this.$refs.emailInput.value
        //console.log(this.email)
      },
      handlePhone(){
        this.phone = this.$refs.phoneInput.value
        //console.log(this.email)
      },
      ans1Check(evt){
        if (this.ans1.length >= 190) {
          evt.preventDefault()
          return
        }
      },
      prevPage () {
        if(this.page > 0){
          this.page -= 1
        }
      },
      infoPage:function(){
        if(this.$v.cpf.validCPF){
          var convertedCPF = this.cpf.replace('.', '')
          convertedCPF = convertedCPF.replace('-', '')
          convertedCPF = convertedCPF.replace('.', '')
          var cpf = convertedCPF
          
          this.$socket.emit('cpfValidation', cpf)
          this.sockets.subscribe("cpfResponse", (data) => {
            if(data == false){
              console.log("asdasd")
              this.dialog = false
              this.dialog = true
            }else{
              console.log("Con")
              this.page = 0
              this.page += 1
            }
          })
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
        var data = [
          this.cpf,
          this.name,
          this.email,
          this.phone,
          this.ans1,
          this.ans2,
          this.ans3,
          this.ans4,
          this.ans5,
        ]

        this.$socket.emit('saveData', data)
        this.sockets.subscribe("finished", () => {
          this.dialog2 = true
        })
      },
      closeEndDialog:function(){
        this.dialog2 = false
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
        page: 0,
        cpf: '',
        name: '',
        email: '',
        phone: '',
        ans1: '',
        ans2: '',
        ans3: '',
        ans4: '',
        ans5: '',
        dialog: false,
        dialog2: false,
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

    .buttons{
      margin-top: 45px
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

  input{
    font-size: 25px;
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid#c4a5c4;
    border-radius: 4px;
  }

  .inputInfo{
    float: left;
    font-size: 25px;
  }

  .error{
    color: #FF0000;
    font-size: 18px;
    position: fixed;
  }
  
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }

  .modalButton{
    font-size: 15px;
    padding: 10px 30px;
  }
</style>
