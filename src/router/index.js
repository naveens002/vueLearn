import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import HelloWorld from '@/components/HelloWorld'
import food from '@/components/food'
import game from '@/components/game'
import sports from '@/components/sports'
import image from '@/components/image'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/food', component: food,
            children: [
              { path: 'image/:id', component: image },
            ]
          },
          {
            path: '/game', component: game,
            children: [
              { path: 'image/:id', component: image },
            ]
          },
        {
            path: '/sports', component: sports,
            children: [
              { path: 'image/:id', component: image },
            ]
          },
        {
            path: '/home',
            name: 'HelloWorld',
            component: HelloWorld
        }
    ]
})