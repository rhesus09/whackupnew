// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// require('element-ui')

// import {Vue} from './bootstrap'
import { event } from './utils'
import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/fr'
import 'element-ui/lib/theme-default/index.css'
import VueMasonryPlugin from 'vue-masonry'
/**
 * Use Element IO
 */
Vue.use(VueMasonryPlugin)
Vue.use(ElementUI, {locale})
require('./bootstrap')
// import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
// require('./utils/app')
// Vue.config.productionTip = false

/* eslint-disable no-new */
import * as firebase from 'firebase'
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
  created () { event.init() }
})
var config = {
  apiKey: 'AIzaSyCL9-MzNwRV85iylp7Cwk3jClu7701oIoc',
  authDomain: 'whackup-f253c.firebaseapp.com',
  databaseURL: 'https://whackup-f253c.firebaseio.com',
  projectId: 'whackup-f253c',
  storageBucket: 'whackup-f253c.appspot.com',
  messagingSenderId: '619291686683'
}
firebase.initializeApp(config)

