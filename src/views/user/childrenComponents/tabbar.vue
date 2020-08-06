<template>
  <tabbar>
    <router-link to="/user/userHome">
      <tabbar-item path="/admin/adminHome">
        <template v-slot:item_img>
          <span class="iconfont icon-zhuye"></span>
        </template>
        <template v-slot:item_text>
          <div>home</div>
        </template>
      </tabbar-item>
    </router-link>

    <router-link to="/user/userCreate">
      <tabbar-item path="/admin/adminHome">
        <template v-slot:item_img>
          <span class="iconfont icon-chuangjian"></span>
        </template>
        <template v-slot:item_text>
          <div>create</div>
        </template>
      </tabbar-item>
    </router-link>

    <router-link to="/user/userPersonnal">
      <tabbar-item path="/admin/adminUpload">
        <template v-slot:item_img>
          <span class="iconfont icon-profile"></span>
        </template>
        <template v-slot:item_text>
          <div>personnal</div>
        </template>
      </tabbar-item>
    </router-link>
  </tabbar>
</template>
 
<script>
import tabbar from "@/components/tabbar/tabbar.vue";
import tabbarItem from "@/components/tabbar/tabbar_item.vue";
export default {
  components: {
    tabbar,
    tabbarItem,
  },
};
</script>
 
<style scoped>
@import "~@/assets/css/userTabbar/iconfont.css";
.iconfont {
  font-size: 22px;
}
router-link{
  color: white;
}
</style>