// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import Video from 'video.js'
import 'video.js/dist/video-js.css'

Vue.use(MuseUI);
Vue.prototype.$video = Video
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
