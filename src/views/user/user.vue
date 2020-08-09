<template>
  <div class="user">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tabbar/>
  </div>
</template>


<script>
import tabbar from '@/views/user/childrenComponents/tabbar.vue'
export default {
    components:{
        tabbar
    }
};
</script>
 
<style scoped>
.user{
  width: 100vw;
  height: calc(100vh - 44px);
  overflow: scroll;
  background: linear-gradient(to top,rgb(36,49,84), rgb(110, 111, 119));
}
</style>