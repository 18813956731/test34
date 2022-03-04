<template>
     <div class="nav">
        <slot></slot>
      </div>
</template>

<script>
export default {
    name:'Tabnar',
}
</script>

<style scoped>
.nav{
  height: 70px;
  position:fixed;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px saddlebrown solid;
  display: flex;
}

</style>