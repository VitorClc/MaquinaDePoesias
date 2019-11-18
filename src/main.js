import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vuetify from 'vuetify/lib'
import vuetify from './plugins/vuetify';

import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
    debug: false,
    connection: 'http://localhost:8081'
}))

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
