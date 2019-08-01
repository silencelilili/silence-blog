import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Home from './views/Home.vue'
import Article from './views/Article.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect: 'home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'article',
          name: 'article',
          component: Article
        },
        {
          path: 'about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
      ]
    },
    
  ]
})
