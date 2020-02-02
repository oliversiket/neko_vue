import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toaster from 'v-toaster'

Vue.use(Toaster, {timeout: 5000})
Vue.config.productionTip = false

import 'v-toaster/dist/v-toaster.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
