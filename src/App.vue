<template>
  <div id="app">
    <!-- <register/> -->
    <!-- <adminUpload/> -->
    <!-- <index/> -->
    <keep-alive  >
      <router-view v-if='$route.meta.keepAlive'></router-view>
    </keep-alive>

    <router-view v-if='!$route.meta.keepAlive'></router-view>
  </div>
</template>

<script>

export default {
  components:{
   
  }
}
</script>

<style>
@import "~@/assets/css/base.css"
</style>
