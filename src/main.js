import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//引入css初始化文件
import "./assets/css/reset.css"

//引入适配文件
import "./assets/js/font.js"

//引入fastclick(引入会报错)
// import FastClick from "fastclick"

//引入图标文件
import "./assets/css/iconfont.css"

//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import './assets/css/swiper.css'

//引用axios文件
import axios from "axios";
Vue.prototype.axios=axios



//引入animate.css
import animate from "animate.css"





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
