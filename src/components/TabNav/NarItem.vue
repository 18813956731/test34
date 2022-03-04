<template>
    <div class="nav-item" @click="itemClick">
          <div class="nav-img"><slot v-if="this.$route.path.indexOf(this.path)!==-1" name="acicon"></slot><slot v-else name="icon"></slot></div>
          <div :style="getStyle"><slot name="text"></slot></div>
    </div>
</template>

<script>
export default {
    name:'NarItem',
    data(){
        return{

        }
    },
    props:{
        fontColor:{
            type:String,
            default:'red'
        },
        path:String
    },
    methods:{
        itemClick(){
            this.$router.push({
                path:this.path
            })
        }   
    },
    computed:{
        getStyle() {
            return this.$route.path.indexOf(this.path)!==-1 ?{color:this.fontColor}:{}
        }
    }
}
</script>

<style scoped lang="less">
.nav-item{
  flex: 1;
  text-align: center;
  cursor: pointer;
}
.nav-img{
    img{
    height: 35px;
    width: 35px;
  }
}
</style>