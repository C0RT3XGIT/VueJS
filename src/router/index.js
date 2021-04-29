import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "list" */ "../views/Create.vue")
    }
    ,
    {
        path: '/list',
        name: 'Task List',
        component: () => import(/* webpackChunkName: "list" */ "../views/List.vue")
    }
    ,
    {
        path: '/bacgroundchange',
        name: 'Background Change',
        component: () => import(/* webpackChunkName: "task" */ "../views/BackgroundChange")
    }
    ,
    {
        path: '/burgermenu',
        name: 'Burger Menu',
        component: () => import(/* webpackChunkName: "task" */ "../views/BurgerMenu")
    }

    ,
    {
        path: '/news',
        name: 'news',
        component: () => import(/* webpackChunkName: "task" */ "../views/News.vue")
    }
    ,
    {
        path: '/blog',
        name: 'blog',
        component: () => import(/* webpackChunkName: "task" */ "../views/JSONPlaceHolder/blog.vue")
    }
    ,
    {
        path: '/posts',
        name: 'posts',
        component: () => import(/* webpackChunkName: "task" */ "../views/JSONPlaceHolder/Posts")
    }
    ,
    {
        path: '/comments',
        name: 'comments',
        component: () => import(/* webpackChunkName: "task" */ "../views/JSONPlaceHolder/Comments")
    }
    ,
    {
        path: '/albums',
        name: 'albums',
        component: () => import(/* webpackChunkName: "task" */ "../views/JSONPlaceHolder/Albums")
    },
    {
        path: '/photos',
        name: 'photos',
        component: () => import(/* webpackChunkName: "task" */ "../views/JSONPlaceHolder/Photos")
    }
    ,
    {
        path: '/photosbyid',
        name: 'photos by id',
        component: () => import(/* webpackChunkName: "task" */ "../views/JSONPlaceHolder/PhotoById")
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
