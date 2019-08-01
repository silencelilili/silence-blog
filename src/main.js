import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'

import './registerServiceWorker'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css';
import { post, get, patch, put, _delete } from './server/axios'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueAxios, axios)

//定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;
Vue.prototype.$delete = _delete;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
