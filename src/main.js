import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Upload} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/changeEle.css'
// import VideoPlayer from 'vue-video-player'
// import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'

// Vue.use(VideoPlayer)
Vue.use(Upload)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
