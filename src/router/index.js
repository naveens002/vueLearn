import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    route: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld

        },
        {
            path: '/home',
            name: 'Home',
            component: Home

        }
    ]
})