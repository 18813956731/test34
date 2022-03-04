import Vue from "vue";
import Vuex from 'vuex'
import * as types from './mutationsType'
Vue.use(Vuex)
const state={
    name:'小田',
    num:10,
    students:[
        {
            name:'李佳峰',
            age:20,
            sex:'男'
        },
        {
            name:'黄玲',
            age:33,
            sex:'男'
        },
        {
            name:'刘可',
            age:34,
            sex:'男'
        },
        {
            name:'谢可',
            age:25,
            sex:'男'
        },
        {
            name:'小红',
            age:32,
            sex:'女'
        }
    ]
}
// 得到学生age>用户传过来的年纪
const getters={
    getStudents(state){
        return age=> state.students.filter(i=>i.age>age)
    },
    //获取过滤后的个数
    getStudentslength(state,getters){
        return age=> getters.getStudents(age).length
    }
}
const mutations={
    // 加上用户传过来的值
    [types.ADD](state,payload){
        state.num+=payload
    },
    // 减去用户传过来的值
    [types.DELD](state,payload){
        state.num-=payload
    },
    // 改name名字
    [types.SETNAME](state,payload){
        state.name=payload
    },
}
// 异步调用 把name间隔一秒后变为用户传过来的名字
const actions={
    asetName(context,payload){
      return  new Promise((resolve,reject)=>{
            setTimeout(()=>{
                context.commit(types.SETNAME,payload)
                console.log(payload,"payload");
                resolve('已经完成了提交')  
            },1000)
        })
    }
}
const modulea={
    state:{
        aname:'a魔伴'
    },
    getters:{},
    mutations:{},
    actions:{}
}
const modules={
    a:modulea
}
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules
})

export default store