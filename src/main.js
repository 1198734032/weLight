import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Upload} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/changeEle.css'

Vue.use(Upload)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
