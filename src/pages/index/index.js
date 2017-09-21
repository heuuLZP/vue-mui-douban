// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './APP.vue'

Vue.config.productionTip = false

import 'normalize.css'
import '../../assets/css/base.css'

import '../../mock/index'

/* eslint-disable no-new */
new Vue({
  el: '#home',
  template: '<App/>',
  components: { App }
})
