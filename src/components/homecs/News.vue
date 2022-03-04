<template>
    <div>
        <ul>
            <li>nihso1</li>
            <li>nihso2</li>
            <li>nihso3</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'news',
     created(){
        console.log("created,创建了news");
    },
    destroyed(){
        console.log("destroyed,销毁了news");
    }
}
</script>

<style scoped>

</style>