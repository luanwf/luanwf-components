import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Notification from "@/components/Notification"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Notification',
      component: Notification
    }
  ]
})
