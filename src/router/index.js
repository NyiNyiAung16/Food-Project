import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Menu from '../views/Menu.vue'
import Service from '../views/Service.vue'
import Contact from '../views/Contact.vue'
import CreateAcc from '../views/CreateAcc.vue'
import {auth} from '../firebase/config'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter(from,to,next){
      let user=auth.currentUser;
      if(user){
        next()
      }else{
        next('/createUserAccount')
      }
    }
  },
  {
    path:'/about',
    name:'about',
    component:About,
    beforeEnter(from,to,next){
      let user=auth.currentUser;
      if(user){
        next()
      }else{
        next('/createUserAccount')
      }
    }
  },
  {
    path:'/menu',
    name:'menu',
    component:Menu,
    beforeEnter(from,to,next){
      let user=auth.currentUser;
      if(user){
        next()
      }else{
        next('/createUserAccount')
      }
    }
  },
  {
    path:'/service',
    name:'service',
    component:Service,
    beforeEnter(from,to,next){
      let user=auth.currentUser;
      if(user){
        next()
      }else{
        next('/createUserAccount')
      }
    }
  },
  {
    path:'/contact',
    name:'contact',
    component:Contact,
    beforeEnter(from,to,next){
      let user=auth.currentUser;
      if(user){
        next()
      }else{
        next('/createUserAccount')
      }
    }
  },
  {
    path:'/createUserAccount',
    name:'createAccount',
    component:CreateAcc,
    beforeEnter(from,to,next){
      let user=auth.currentUser;
      if(!user){
        next()
      }else{
        next('/')
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
