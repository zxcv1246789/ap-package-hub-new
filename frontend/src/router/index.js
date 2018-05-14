import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'
import PackageUpload from '@/components/packageupload'
import PackageList from '@/components/packagelist'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/upload',
    name: 'Upload',
    component: PackageUpload
  },
  {
    path: '/filelist',
    name: 'FileList',
    component: PackageList
  }
  ]
})
