import axios from 'axios'

// 实例axios对象
const instance = axios.create({
    timeout:2000,
    baseURL:'https://api-hmugo-web.itheima.net/api/public/v1/',
})

//请求拦截器
instance.interceptors.request.use(config=>{
    console.log(config,"我是请求拦截");
    return config
})

//响应拦截器
instance.interceptors.response.use(response=>{
    // 处理响应返回成功后的数据
    return response.data
})
export default config =>  instance(config)


