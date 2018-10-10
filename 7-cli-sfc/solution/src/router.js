import Vue from 'vue'
import Router from 'vue-router'
import WesterosMapPage from '@/views/WesterosMapPage'
import MemberPage from '@/views/MemberPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: WesterosMapPage },
    { path: '/:houseId/:memberId', name: 'member', component: MemberPage, props: true }
  ]
})
