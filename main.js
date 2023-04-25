import App from './App'
import i18n from './lang/i18n'
import store from "./store"

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.$store=store
App.mpType = 'app'
const app = new Vue({
	i18n,
	...App,
	store
})
app.$mount()
// #endif


// #ifdef VUE3
import {createSSRApp} from 'vue'

export function createApp() {
	const app = createSSRApp(App)
	app.use(i18n)
	return {app}
}
// #endif
