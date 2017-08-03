import Vue from 'vue'
import Router from 'vue-router'
import * as app from '../utils/app'
import store from '../store/store'
import * as types from '../store/types'
// import Hello from '@/components/Hello-pug'
import Blog from '@/components/main-wrapper/main-content/blog.vue'
import Player from '@/components/main-wrapper/player/index.vue'
import Listen from '../components/main-wrapper/main-content/listen/index.vue'
import Homepage from '../components/main-wrapper/main-content/homepage/index.vue'
import Profile from '../components/main-wrapper/main-content/userprofile/index.vue'
import Clubs from '@/components/main-wrapper/main-content/clubs/index.vue'
import Events from '@/components/main-wrapper/main-content/events.vue'
import Register from '@/components/auth/register-form.vue'
import Login from '@/components/auth/login-form.vue'
import siteHeader from '@/components/site-header/index.vue'
import mainWrapper from '@/components/main-wrapper/index.vue'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      components: {
        header: siteHeader,
        wrapper: mainWrapper
      },
      beforeEnter: (to, from, next) => {
        if (store.getters[types.GET_CURRENT_LOGGED_USER_NAME] === 'test') {
          next('login')
        }
        next()
      },
      children: [
        {
          name: 'insidehomepage',
          path: '',
          components: {content: Homepage}
        }
      ]
    }, {
      path: '/blog',
      name: 'Blog',
      components: {
        header: siteHeader,
        wrapper: mainWrapper
      },
      children: [
        {
          name: 'insideBlog',
          path: '',
          components: {content: Blog, player: Player}
        }
      ]
    },
    {
      path: '/clubs',
      name: 'Club',
      components: {
        header: siteHeader,
        wrapper: mainWrapper
      },
      children: [
        {
          name: 'insideClub',
          path: '',
          components: {content: Clubs},
          children: [{name: '', path: '', components: {player: Player}}]
        }
      ]
    }, {
      path: '/events',
      name: 'Event',
      components: {
        header: siteHeader,
        wrapper: mainWrapper
      },
      children: [
        {
          name: 'insideevents',
          path: '',
          components: {content: Events}
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      components: {
        register: Register
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        login: Login
      }
    }, {
      path: '/profile',
      name: 'UserProfile',
      components: {
        header: siteHeader,
        wrapper: mainWrapper
      },
      children: [
        {
          name: 'insideuserprofile',
          path: '',
          components: {content: Profile}
        }
      ]
    },
    {
      path: '*',
      name: 'wildcards',
      redirect: '/'
    },
    {
      path: '/listen/:id',
      name: 'Listen_Club',
      components: {
        header: siteHeader,
        wrapper: mainWrapper
      },
      children: [
        {
          name: 'insidelisten',
          path: '',
          components: {content: Listen}
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  app.manageBackground(to.name)
  next()
})
export default router
