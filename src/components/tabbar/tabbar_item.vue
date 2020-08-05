<template>
 <div class="tab_bar_item">
       <slot name="item_img"></slot>
       <slot name="item_text"></slot>
 </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tab_bar_item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab_bar_item img {
  width: 24px;
  height: 24px;
  margin-top:3px;
  /* vertical-align: middle; */
}
</style>