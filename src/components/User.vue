<template>
    <div>
        <h2>用户页fffffff</h2>
        <h3>用户是{{$route.params.id}}</h3>
    </div>
</template>

<script>
export default {
    name:'user',
    created(){
        console.log(this.$route.query,"this.$router");
    },
    data(){
        return{
        }
    }
}
</script>

<style scoped>

</style>