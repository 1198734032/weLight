<template>
  <tabbar>
    <router-link to="/admin/adminHome">
      <tabbar-item path="/admin/adminHome">
        <template v-slot:item_img>
          <span class="iconfont icon-zhuye"></span>
        </template>
        <template v-slot:item_text>
          <div>home</div>
        </template>
      </tabbar-item>
    </router-link>

    <router-link to="/admin/adminUpload">
      <tabbar-item path="/admin/adminUpload">
        <template v-slot:item_img>
          <span class="iconfont icon-add"></span>
        </template>
        <template v-slot:item_text>
          <div>add</div>
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
@import "~@/assets/css/adminTabbar/iconfont.css";
.iconfont {
  font-size: 22px;
}
</style>