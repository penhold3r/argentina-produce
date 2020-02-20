import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import VueScrollTo from 'vue-scrollto'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueParallaxJs from 'vue-parallax-js'
import VueLazyload from 'vue-lazyload'
import './registerServiceWorker'

Vue.use(VueScrollTo, {
	duration: 700,
	easing: 'ease-in-out',
	offset: -50
})

Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyBZLEliDhUUlSxi5yjNAB8F9-lDYVVAoYM'
	}
})

Vue.use(VueParallaxJs)

Vue.use(VueLazyload, {
	preLoad: 1.3,
	attempt: 1
})

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
	let language = to.params.lang
	if (!language) {
		language = 'en'
	}

	i18n.locale = language
	next()
})

new Vue({
	router,
	i18n,
	render: h => h(App)
}).$mount('#app')
