import Vue from 'vue'
import Router from 'vue-router'
import About from './components/About.vue'
import Blog from './components/Blog.vue'
import BlogPost from './components/BlogPost.vue'
import DBBlog from './components/DBBlog.vue'
import DBBlogPost from './components/DBBlogPost.vue'
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
    }
  ]
})