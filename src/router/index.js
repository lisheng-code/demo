import VueRouter from 'vue-router'
import Vue from 'vue'
import top from '../components/top.vue'
import left from '../components/left.vue'
import bottom from '../components/bottom.vue'
// import found from '../components/found.vue'
import f_music from '../components/found-music/found_music.vue'
// import r_ation from '../components/found-music/recommend_ation.vue'
Vue.use(VueRouter)

const router = new VueRouter({
	routes: [{
			path: '/',
			redirect: 'left/f_music'
		},
		{
			path: '/left',
			components: {
				top: top,
				left: left,
				bottom: bottom
			},
			children:[{
				path:'f_music',
				component:f_music
			}]
		}
	]
})

export default router
