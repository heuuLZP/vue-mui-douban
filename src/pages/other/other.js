// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'normalize.css'
import '../../assets/css/base.css'

/* eslint-disable no-new */
new Vue({
  el: '#other',
  template: '<App/>',
  components: { App }
})
