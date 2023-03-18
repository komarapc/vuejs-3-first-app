import Blog from '../views/blog/Blog.vue'
import BlogDetail from '../views/blog/BlogDetails.vue'

const blogRoutes: any = [
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/blog/:id',
    name: 'BlogDetail',
    component: BlogDetail
  }
]
export default blogRoutes
