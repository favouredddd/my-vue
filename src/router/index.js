import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import pluginList from '@/components/pluginlist'
import pluginDown from '@/components/plugindown'
import tree from '@/components/pluginlist/tree'
import carousel from '@/components/pluginlist/carousel'
import magn from '@/components/pluginlist/magn'
import App from '@/components/App'
import imgSHow from '@/components/pluginlist/magn'
import instruction from '@/components/pluginlist/instruction'
import inputAuto from '@/components/pluginlist/autoComplete.vue'
import page from '@/components/pluginlist/page.vue'
import buffer from '@/components/pluginlist/buffer.vue'
import upload from '@/components/pluginlist/upload.vue'
Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    { path: "/", redirect: "/vue" },
    {
      path: '/vue',
      redirect: '/vue/home',
      meta: { index: 0 },
      component:()=>import('@/components/App'),
      children: [
        { path: 'home', component:()=>import('@/components/Home')},
        { path: 'pluginDown',component:()=>import('@/components/plugindown')},
        {
          path: 'pluginList',
          component:()=>import('@/components/pluginlist'),
          redirect: "/vue/pluginList/instruction",
          children: [
            { path: 'instruction', component:()=>import('@/components/pluginlist/instruction') },
            { path: 'tree', component:()=>import('@/components/pluginlist/tree') },
            { path: 'carousel',component:()=>import('@/components/pluginlist/carousel') },
            { path: 'magn', component:()=>import('@/components/pluginlist/magn') },
            { path: 'imgShow', component:()=>import('@/components/pluginlist/magn')  },
            { path: "inputAuto", component:()=>import('@/components/pluginlist/autoComplete') },
            { path: "paging", component:()=> import('@/components/pluginlist/page') },
            { path: "buffering", component:()=> import('@/components/pluginlist/buffer')},
            { path: "upload", component: ()=> import('@/components/pluginlist/upload')}
          ]
        }
      ]
    }
  ]
})
