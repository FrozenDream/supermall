import {
  createApp,
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'

import 'assets/iconfonts/iconfont.css'
const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false);
}
