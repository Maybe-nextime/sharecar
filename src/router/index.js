import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import combine from '@/components/CustomComponent/ContentBar/combine.vue'
import search from '@/components/CustomComponent/TabItem/search.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path:'/combine',
            name:'combine',
            component: combine
        },
        {
            path:'/search',
            name:'search',
            component:search
        }
    ]
})
