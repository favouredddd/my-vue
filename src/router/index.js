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
      component: App,
      children: [
        { path: 'home', component: Home },
        { path: 'pluginDown', component: pluginDown },
        {
          path: 'pluginList',
          component: pluginList,
          redirect: "/vue/pluginList/instruction",
          children: [
            { path: 'instruction', component: instruction },
            { path: 'tree', component: tree },
            { path: 'carousel', component: carousel },
            { path: 'magn', component: magn },
            { path: 'imgShow', component: imgSHow },
            { path: "inputAuto", component: inputAuto },
            { path: "paging", component: page },
            { path: "buffering", component: buffer },
            { path: "upload", component: upload }
          ]
        }
      ]
    }
  ]
})
