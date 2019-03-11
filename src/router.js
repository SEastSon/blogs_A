import addBlog from './components/addBlog.vue'
import sinleBlog from './components/sinle-blog.vue'
import Pigeonhole from './components/pigeonhole.vue'
import Motivational from './components/motivational.vue'
import Login from './components/login.vue'
import Admin from './components/admin.vue'
import Href from './components/href.vue'
import Leave from './components/leave.vue'
import Register from './components/register.vue'
import Errors from './components/Error.vue'
import Fight from './components/fight.vue'
export default[

  {
    path:"/showblog",
    name:"showblog",
    component:()=>import('./components/showBlog.vue')
  },
  {
    path:"/fight",
    name:"Fight",
    component:Fight
  },
  {
    path:"/error",
    name:"errorName",
    component:Errors
  },
  {
    path:"/register",
    component:Register
  },
  {
    path:"/leave",
    component:Leave
  },
  {
    path:"/admin",
    component:Admin
  },
  {
    path:"/hrefs",
    component:Href
  },
  {
    path:"/add",
    component:addBlog

  },
  {
    path:"/blog/:id",
    name:"sinle-blog",
    component:sinleBlog
  },
  {
    path:"/pigeonhole",
    component:Pigeonhole
  },
  {
    path:"/",
    component:Motivational
  },
  {
    path:"/login",
    name:"loginName",
    component:Login
  }
]
