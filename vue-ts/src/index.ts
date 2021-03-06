import Vue from 'vue'

import App from '@/App.vue'
import router from '@/router'
import httpPlugin from '@/service/httpPlugin'
import vuexStore from '@/store'

import 'src/assets/icons/iconfont.js'
import 'src/assets/styles/functional.styl'
import 'src/assets/styles/reset.styl'

Vue.use(httpPlugin)

const app = new Vue({
  render: h => h(App),
  router,
  store: vuexStore,
})

document.addEventListener('DOMContentLoaded', () => {
  app.$mount('#app')
})

// service worker
// if (window.location.protocol === 'https:' && navigator.serviceWorker) {
//   navigator.serviceWorker.register('/service-worker.js')
// }
