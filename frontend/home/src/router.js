import Vue from 'vue'
import Router from 'vue-router'
import About from './components/About.vue'
import Blog from './components/Blog.vue'
import BlogPost from './components/BlogPost.vue'
import DBBlog from './components/DBBlog.vue'
import DBBlogPost from './components/DBBlogPost.vue'
import EditPost from './components/EditPost.vue'
import SignIn from './components/SignIn.vue'
import SignInProcess from './components/SignInProcess.vue'


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
      path: '/Blog/:year/:month/:day/:title',
      name: 'blogpost',
      component: BlogPost
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
    },
    {
      path: '/SignInProcess',
      name: 'SignInProcess',
      component: SignInProcess
    }
  ]
})