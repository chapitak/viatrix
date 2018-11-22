import Vue from 'vue'
import Router from 'vue-router'
import About from './components/About.vue'
import Blog from './components/Blog.vue'
import DBBlog from './components/DBBlog.vue'
import DBBlogPost from './components/DBBlogPost.vue'
import EditPost from './components/EditPost.vue'
import SignIn from './components/SignIn.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'about',
      component: About
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/DBBlog',
      name: 'DBBlog',
      component: DBBlog
    },
    {
      path: '/DBBlog/:postid',
      name: 'DBBlogpost',
      component: DBBlogPost
    },
    {
      path: '/EditPost',
      name: 'EditPost',
      component: EditPost
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: SignIn
    }
  ]
})