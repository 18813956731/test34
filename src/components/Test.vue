<template>
    <div>
        <h2>测试页</h2>
    </div>
</template>

<script>
export default {
    name:'test',
    created(){
        console.log("created,创建了测试页");
    },
    destroyed(){
        console.log("destroyed,销毁了测试页");
    }
}
</script>

<style scoped>

</style>