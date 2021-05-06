import './utils/rem.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './assets/css/reset.css'

// vant的样式
import 'vant/lib/index.css'
import 'vant/lib/icon/local.css'
import './assets/css/variables.scss'

createApp(App).use(router).use(store).mount('#app')
