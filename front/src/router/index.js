import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'
import Form from '@/components/Form.vue'
import List from '@/components/List.vue'
import Viewer from '@/components/Viewer.vue'

Vue.use(VueRouter)

const routes = [
	{ path: '/', component: Home },
	{ path: '/new/order', component: Form },
	{ path: '/list/order', component: List },
	{ path: '/view/order', component: Viewer }
]

const router = new VueRouter({
	routes
})

export default router