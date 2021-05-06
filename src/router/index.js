import { createRouter, createWebHashHistory } from 'vue-router'
// import { Dialog } from 'vant'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "login" */ '@/pages/login/index.vue'),
    alias: ['/home'],
    meta: {
      title: '金晋集团'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/pages/login/login.vue'),
    meta: {
      title: '金晋集团'
    }
  },
  {
    path: '/my',
    name: 'My',
    component: () => import(/* webpackChunkName: "my" */ '@/pages/my/index.vue'),
    meta: {
      title: '个人中心'
    }
  },
  {
    path: '/userInfo',
    name: 'UserInfo',
    component: () => import(/* webpackChunkName: "my" */ '@/pages/my/userInfo.vue'),
    meta: {
      title: '我的信息'
    }
  },
  {
    path: '/myRepair',
    name: 'MyRepair',
    component: () => import(/* webpackChunkName: "myRepair" */ '@/pages/myRepair/index.vue'),
    meta: {
      title: '我的报修'
    }
  },{
    path: '/addRepair',
    name: 'AddRepair',
    component: () =>
      import(/* webpackChunkName: "myRepair" */ '@/pages/myRepair/addRepair.vue'),
    meta: {
      title: '移动报修'
    }
  },
  {
    path: '/myComplaint',
    name: 'MyComplaint',
    component: () => import(/* webpackChunkName: "myComplaint" */ '@/pages/myComplaint/index.vue'),
    meta: {
      title: '我的投诉'
    }
  },
  {
    path: '/addComplaint',
    name: 'AddComplaint',
    component: () =>
      import(/* webpackChunkName: "myComplaint" */ '@/pages/myComplaint/addComplaint.vue'),
    meta: {
      title: '投诉建议'
    }
  }
  // // 404 重定向
  // { path: '*', redirect: '/'}
]

const router = createRouter({
  // base: '/bai-an-ji',
  history: createWebHashHistory(),
  routes
})

// 白名单
const whiteList = ['Home', 'Login']
// 路由守卫
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  if (whiteList.indexOf(to.name) > -1 || window.localStorage.username) {
    next()
  } else if (to.name === 'Home') {
    next()
  } else {
    next('/login')
  }
})

export default router
