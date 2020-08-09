<template>
  <div class="admin">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tabbar />
  </div>
</template>


<script>
import tabbar from "@/views/admin/childrenComponents/tabbar.vue";
export default {
  components: {
    tabbar,
  },
};
</script>
 
<style scoped>
.admin {
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  height: calc(100vh - 44px);
  background: linear-gradient(to top, rgb(36, 49, 84), rgb(110, 111, 119));
}
</style>