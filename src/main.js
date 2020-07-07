import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './common/plugins/bootstrap-vue'
import App from './App.vue'
import router from './router';
import "./router/routerGuard";


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
