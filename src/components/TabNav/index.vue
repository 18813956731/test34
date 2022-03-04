<template>
    <div>
         <tabnar>
             <nar-item path="/home" fontColor="yellow">
                <template v-slot:icon><img  src="../../assets/logo.png" alt=""></template>
                <template v-slot:acicon><img  src="../../assets/手机.png" alt=""></template>
                <template v-slot:text>首页</template>
             </nar-item>
             <nar-item path="/test">
                <template v-slot:icon><img  src="../../assets/logo.png" alt=""></template>
                <template v-slot:acicon><img  src="../../assets/手机.png" alt=""></template>
                <template v-slot:text>测试页</template>
             </nar-item>
             <nar-item path="/home/tianye">
                <template v-slot:icon><img  src="../../assets/logo.png" alt=""></template>
                <template v-slot:acicon><img  src="../../assets/手机.png" alt=""></template>
                <template v-slot:text>田野</template>
             </nar-item>
             <nar-item path="/home/news">
                <template v-slot:icon><img  src="../../assets/logo.png" alt=""></template>
                <template v-slot:acicon><img  src="../../assets/手机.png" alt=""></template>
                <template v-slot:text>新的</template>
             </nar-item>
         </tabnar>
    </div>
</template>

<script>
import Tabnar from './Tabnar.vue'
import NarItem from './NarItem.vue'
export default {
    name:'tabNav',
    components:{
        Tabnar,
        NarItem
    },
    methods:{
        
    },
    computed:{
       
    }
}
</script>

<style scoped lang="less">
.nav-item{
  flex: 1;
  text-align: center;
}
.nav-img{
    img{
    height: 35px;
    width: 35px;
  }

}
</style>