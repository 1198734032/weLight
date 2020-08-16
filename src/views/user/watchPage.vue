<template>
  <div class="watch_page">
    <video width="100%" controls id="video">
      <source ref="video" />
    </video>
    <div id="welcome">
      ❄ 欢迎来一起看电影 ❄
      <br />和大家聊聊吧~
    </div>
    <div id="chat"></div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      src: "http://vjs.zencdn.net/v/oceans.mp4",
    };
  },

  mounted() {
    this.src = this.$route.query.src;
    this.$refs.video.src = this.src;
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
#video {
  background-color: black;
}
#welcome {
  padding: 10px 0;
  line-height: 25px;
  text-align: center;
}
</style>