// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ROOT from './App'
import router from './router/index.js'
import Vuex from 'vuex'
import store from "./store/store.js"
import '../static/css/base.css'
import axios from 'axios'
Vue.prototype.$http = axios;
// import '../static/css/plugin_list.css'
// import '../static/css/plugin_list1.css'
Vue.config.productionTip = false
Vue.use(Vuex)
/* eslint-disable no-new */
const app = new Vue({
  router,
  store,
  components: {
    ROOT
  },
  render: h => h(ROOT),
  beforeCreate() {
    let x;
    let setFontSize = function() {
      let width = window.innerWidth
      //设置页面最大宽度
      let fontSize = parseFloat(window.getComputedStyle(document.documentElement).fontSize) || 16
      x = width * 16 / (20 * fontSize)
      document.documentElement.style.fontSize = x + 'px';
    }
    setFontSize();
    if (window.innerWidth < 800) {
      this.$store.commit("setFontSize", { size: x });
    }
  },
  mounted() {}
})
if (process.env.NODE_ENV === 'production') {
  if (window.STYLE_READY) {
    app.$mount('#app')
  }
} else {
  app.$mount('#app')
}
