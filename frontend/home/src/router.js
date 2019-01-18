import Vue from 'vue'
import Router from 'vue-router'
import About from './components/About.vue'
import Blog from './components/Blog.vue'
import BlogPost from './components/BlogPost.vue'
import EditPost from './components/EditPost.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'about',
      component: About
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/Blog/:postid',
      name: 'Blogpost',
      component: BlogPost
    },
    {
      path: '/EditPost',
      name: 'EditPost',
      component: EditPost
    }
  ]
})