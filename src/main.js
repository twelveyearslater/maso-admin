import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import common from './assets/common.js'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$qs = qs
Vue.prototype.HOST = '/demo'
Vue.use(common)

// 路由登录拦截
router.beforeEach((to, from, next) => {
  // 要不要对meta.loginRequire属性做监控拦截
  if (to.matched.some(function (item) {
    return item.meta.loginRequire
  })) {
    const loginUser = sessionStorage.getItem('loginUser')
    if (!loginUser) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
