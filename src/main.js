import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './styles/index.less'


import { ElementTiptapPlugin } from 'element-tiptap';
// import ElementUI's styles
import 'element-ui/lib/theme-chalk/index.css';
// import this package's styles
import 'element-tiptap/lib/index.css';

// use ElementUI's plugin
Vue.use(ElementUI);
// use this package's plugin
Vue.use(ElementTiptapPlugin, { /* plugin options */ });
// Now you register `'el-tiptap'` component globally.

Vue.use(ElementUI)

Vue.use(ElementTiptapPlugin, {
	  lang: 'zh',
	})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
