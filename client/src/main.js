// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueResource)
Vue.use(VueMaterial)


Vue.config.productionTip = false
// Vue.http.options.root = process.env.API
Vue.http.options.root = 'http://localhost:9000/'
Vue.router = router
Vue.use(require('@websanova/vue-auth'), {
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/vue-resource.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  rolesVar: 'type',
  loginData: {
    url: 'auth', method: 'POST', redirect: '/', fetchUser: false,
    parameter: {access_token:'pfsQZQbAS9WcX4Duto7u4OFSP1B9b7O4'}
  },
  fetchData: {url: 'auth/user', method: 'GET'},
  refreshData: {url: 'auth/refresh', method: 'GET', atInit: false}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
