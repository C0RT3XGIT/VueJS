import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './components/global-components'
import Ripple from "vue-ripple-directive";
Vue.directive('ripple', Ripple);

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  Ripple,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
