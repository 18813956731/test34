import request from "../index";

// 请求轮播图
export function getLbt(params){
    params = params || {}
    return request({
        // 请求方式 默认是get 所有可以不写
        // method:'get',
        url:'home/swiperdata',
        params
    })
}
