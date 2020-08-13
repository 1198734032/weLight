<template>
  <div class="watch_page">
    <video width="100%"   controls  id="movie">
      <source ref="video"  type="video/mp4" >
    </video>
    <div id="welcome">❄ 欢迎来一起看电影 ❄<br/>和大家聊聊吧~</div>
    <div id="chat"></div>
  </div>
</template>
 
<script>
export default {
  props: {
    src: {
      default: " ",
      type: String,
    },
  },
// `http://${this.src}.mp4`

  mounted() {
    // this.$refs.video.src=this.src;
    this.$refs.video.src=require()
  },
};
</script>
 
<style scoped>
.watch_page {
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  color: white;
  background: linear-gradient(to top, rgb(36, 49, 84), rgb(110, 111, 119));
}
#welcome{
  padding: 10px 0;
  line-height: 25px;
  text-align: center;
}
</style>