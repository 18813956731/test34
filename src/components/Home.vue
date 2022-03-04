<template>
    <div>
        <h2>首页</h2>
        <router-link to="/home/news">news</router-link>
        <router-link to="/home/tianye">tianye</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'home',
    data(){
        return{
            name:'zhangsan'
        }
    },
    created(){
        console.log("created,创建了首页");
    },
    destroyed(){
        console.log("destroyed,销毁了首页");
    }
}
</script>

<style scoped>

</style>