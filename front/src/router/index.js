import Vue from 'vue'
import VueRouter from 'vue-router'

import Hub from '@/views/Hub.vue'
import Form from '@/components/Form.vue'
import Table from '@/components/Table.vue'
import Update from '@/components/Update.vue'
import Viewer from '@/components/Viewer.vue'
import Map from '@/components/Map.vue'
import Upload from '@/components/Upload.vue'
import Editor from '@/components/Editor.vue' 

Vue.use(VueRouter)

const routes = [
	{ path: '/', component: Hub },
	{ path: '/new/order/:is_copy/:origin_id', component: Form },
	{ path: '/update/order/:form_id', component: Update },
	{ path: '/list/order', component: Table },
	{ path: '/view/order/:form_id', component: Viewer },
	{ path: '/map', component: Map },
	{ path: '/upload', component: Upload },
	{ path: '/formEditor', component: Editor },
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router