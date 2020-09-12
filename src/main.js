import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
// import {Upload, Button, Form, Card} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/changeEle.css';

import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import VideoPlayer from 'vue-video-player'
import 'videojs-flash'

Vue.use(VideoPlayer)

const hls = require('videojs-contrib-hls')
Vue.use(hls)
// Vue.use(Upload);
// Vue.use(Form);
// Vue.use(Button);
// Vue.use(Card);

Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
