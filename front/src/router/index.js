import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'
import Form from '@/components/Form.vue'
import Table from '@/components/Table.vue'
import Viewer from '@/components/Viewer.vue'
import Map from '@/components/Map.vue'

Vue.use(VueRouter)

const routes = [
	{ path: '/', component: Home },
	{ path: '/new/order', component: Form },
	{ path: '/list/order', component: Table },
	{ path: '/view/order/:id', component: Viewer },
	{ path: '/map', component: Map }
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router