import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/Pages/PageHome'
import PageThreadShow from '@/Pages/PageThreadShow'
import NotFoundPage from '@/Pages/NotFoundPage'
import ForumShow from '@/Pages/ForumShow'
import CategoryApp from '@/Pages/CategoryApp'
import ProfileApp from '@/Pages/ProfileApp'
import ThreadCreate from '@/Pages/ThreadCreate'
import ThreadEdit from '@/Pages/ThreadEdit'

const routes = [
    {
         path: '/',
         name : "Home",
          component: PageHome,
         },
         {
          path: '/profile',
          name : "profile",
           component: ProfileApp,
           meta: {toTop: true, smoothScroll: true }
          },
          {
            path: '/profile/edit',
            name : "profileEdit",
             component: ProfileApp,
             props:{ edit: true}
            },
           
         
         {
          path: '/thread/:id',
          name : "ThreadShow",
           component: PageThreadShow,
           props: true,
          //  beforeEnter(to, from, next) {
          //  const threadexist = sourceData.threads.find(thread => thread.id === to.params.id)
            // if (threadexist) {
              // return next()
            // } else {
              // next({ name: 'NotFoundPage',
              // params: {}
            // }) 
            // }
          //  }
          },
          {
            path: '/forum/:forumId/thread/create',
            name: 'ThreadCreate',
            component:ThreadCreate,
            props: true
          },
          {
            path: '/thread/:id/edit',
            name: 'ThreadEdit',
            component:ThreadEdit,
            props: true
          },
        
          {
            path: '/category/:id',
            name: 'categoryApp',
            component: CategoryApp,
            props: true
          },
          {
              path: '/forum/:id',
              name : "forumShow",
               component: ForumShow,
               props: true
        },
          { 
             path: '/:pathMatch(.*)*',
              name: 'NotFoundPage',
               component: NotFoundPage
             }
  ];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    const scroll = {}
    if(to.meta.top) scroll.top = 0
    if(to.meta.smoothScroll) scroll.behaviour = "smooth"
    return scroll
  }
})
 
export default router
