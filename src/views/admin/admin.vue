<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tabbar/>
  </div>
</template>


<script>
import tabbar from '@/views/admin/childrenComponents/tabbar.vue'
export default {
    components:{
        tabbar
    }
};
</script>
 
<style scoped>
</style>