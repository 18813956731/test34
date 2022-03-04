<template>
  <div id="app">
      <router-link to="/home">首页</router-link>
      <router-link to="/test">测试</router-link>
      <button @click="routetz">用户</button>
      <div>
        <div>{{$store.state.name}}</div>
        <div>{{$store.state.num}}</div>
        <div>{{$store.getters.getStudents(10)}}</div>
        <div>学生个数{{$store.getters.getStudentslength(10)}}</div>
        <button @click="setname">改变name值</button>
        <button @click="setnum">改变num值</button>
        <button @click="asetname">异步改变name值</button>
        <!-- <button @click="setstudents">改变students值</button> -->
       <div>modules里面的name</div> 
        <div>{{$store.state.a.aname}}</div>
      </div>
      <div v-for="item in message" :key="item.goods_id"><img :src="item.image_src" alt=""></div>
      <keep-alive exclude="test"> <router-view></router-view> </keep-alive>
      <tab-nav/>
  </div>
</template>

<script>

import TabNav from '@/components/TabNav/index'
import * as types from './store/mutationsType'
import {getLbt} from './request/home'

export default {
  name: 'App',
  data(){
    return{
      name:'zhangshan',
      message:[]
    }
  },
  created(){
    this.init()
    new Promise((resolve,rejcet)=>{
      setTimeout(()=>{
        resolve({name:'小南'})
      },1500)
    }).then(res=>{
       let obj ={age:'22'}
       return obj
    },rej=>{
       let obj ={rej:'22'}
      return obj
    }).then(res=>console.log(res),rej=>console.log(rej))

     Promise.all([
       new Promise((resolve,rejcet)=>{
         setTimeout(() => {
            resolve('001')
         }, 100);
       }),
       new Promise((resolve,rejcet)=>{
         setTimeout(() => {
            resolve('002')
         }, 1200);
       })
     ]).then(res=>console.log(res,"fdff"),rej=>console.log(rej,"飞飞飞"))
  },
    methods:{
      // 调用接口 获取轮播图 测试一下git
        init(){
         getLbt().then(res=>{
           console.log(res,"resres");
           if(res.meta.status===200){
              this.message=res.message
           }
         })
        },
       routetz(){
           let path = '/user/'+this.name
           this.$router.push(
               {
                   path,
                   query:{
                     name:'小田',
                     age:'28'
                   }
               }
           )
       },
       setname(){
         this.$store.commit(types.SETNAME,'李佳飞')
       },
       setnum(){
         this.$store.commit(types.ADD,7)
       },
       asetname(){
         this.$store.dispatch('asetName','小刚').then(res=>console.log(res,'hhhh'))
       },
    },
  components: {
    TabNav
  }
}
</script>

<style lang="less">

</style>
