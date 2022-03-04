import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
 

const Home = () =>  import('@/components/Home') 
const Test = () =>  import('@/components/Test') 
const User = () =>  import('@/components/User') 
const News = () =>  import('@/components/homecs/News') 
const Tianye = () =>  import('@/components/homecs/Tianye') 
const routes=[
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home,
        meta:{
            title:'首页'
        },
        children:[
            {
                path:'',
                redirect:'news'
            },
            {
                path:'news',
                component:News
            },
            {
                path:'tianye',
                component:Tianye
            },
        ]
    },
    {
        path:'/test',
        component:Test,
        meta:{
            title:'测试页'
        },
    },
    {
        path:'/user/:id',
        component:User,
        meta:{
            title:'用户页'
        },
    }
]
const router = new VueRouter({
    routes,
    mode:'history'
})

router.beforeEach((to,from,next)=>{
    document.title=to.matched[0].meta.title
    next()
})

export default router