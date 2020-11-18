import Router from 'vue-router' // 导入路由依赖
import Vue from 'vue' // 导入vue依赖

// 导入组件
// import Home from '../components/Home'
// import About from '../components/About'
// import HelloWorld from '../components/HelloWorld'

//路由懒加载
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const HelloWorld = () => import('../components/HelloWorld')

// 1.在使用插件前，需要先安装
Vue.use(Router);

 const router = new Router({
  routes: [
    {
      // 默认路径；重定向
      path: '', 
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        title: 'Home'
      },
      //路由嵌套
      children: [
        {
          path: '',
          redirect: '/new'
        },
        {
          path: '/new',
          component: () => import('../components/HomeNew')
        },
        {
          path: 'message',
          component: () => import('../components/HomeMessage')
        },
      ]
    },
    {
      path: '/about/:userName?/:userName1?', // 动态路由，多个参数; ?：参数配置为可选的
      component: About,
      meta: {
        title: 'About'
      },
    },
    {
      path: '/hello',
      component: HelloWorld,
      meta: {
        title: 'HelloWorld'
      },
      // 路由独享守卫
      beforeEnter: (to, from, next) => {
        console.log('路由独享守卫')
        next()
      }
    },
    {
      path: '/queryData',
      component: () => import('../components/Query'),
      meta: {
        title: 'queryData'
      },
    }
  ],
  mode: 'history', // 默认使用hash路由链接
  linkActiveClass: 'active', // 改变选中状态样式名称
})

// 路由跳转的全局守卫
// 前置守卫(guard)
router.beforeEach((to, from, next) => {
  // console.log(to); // 当前活跃路由
  console.log('我是前置守卫');
  
  document.title = to.matched[0].meta.title
  next()
})

// 后置钩子(hook)
router.afterEach((to, from) => {
  console.log('我是后置钩子');
  
})


export default router 
// // 2-1.路由映射关系
// const routes = [
//   {
//     path: '/home',
//     component: Home
//   },
//   {
//     path: '/about',
//     component: About
//   },
//   {
//     path: '/hello',
//     component: HelloWorld
//   },
// ]

// // 2.创建Router对象
// const router = new Router({
//   routes
// })

// // 3.将router对象导出使用
// export default router