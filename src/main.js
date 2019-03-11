// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import VueResource from 'vue-resource'
import Routers from './router'

Vue.config.productionTip = false
import VueRouter from 'vue-router'

import Vuex from 'vuex'
import createPersiste from 'vue-savedata'

import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'element-ui/lib/theme-chalk/display.css';
Vue.use(ElementUI);
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(createPersiste)
Vue.use(VueAwesomeSwiper)
Vue.use(Vuex)



const router = new VueRouter({
    // mode:"history",
    routes:Routers
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
