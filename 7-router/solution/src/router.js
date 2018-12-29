import Vue from 'vue'
import Router from 'vue-router'
import WesterosMapPage from '@/views/WesterosMapPage.vue'
import MemberPage from '@/views/MemberPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: WesterosMapPage
    },
    {
      path: '/:houseId/:memberId',
      name: 'member',
      component: MemberPage,
      props: true
    }
  ]
})
