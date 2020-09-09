<template>
  <div class="watch_page">
    <!-- <video width="100%" controls id="video">
      <source ref="video" />
    </video> -->
    <video-player
          ref="videoPlayer"
          class="video-player vjs-custom-skin"
          id="vedio"
          :playsinline="true"
          :options="playerOptions"
    />
    <div class="operate">
      <span @click="goHome" class="operate_box">退出房间</span>
      <span @click="delRoom(room.roomId)" class="operate_box">解散房间</span>
    </div>
    <div id="welcome">来和大家聊聊~</div>
    <div class="chat_box">
      <div class="chat_msg">
        <div v-for="(item,index) in chat_msg" :key="index" class="item.text">
          <div class="item_name">{{item.name}}</div>
          <div class="item_text">{{item.text}}</div>
        </div>
      </div>
      <div class="chat_my">
        <input type="text" v-model="my_ipt" class="my_text" />
        <input type="submit" value="发送" @click="subMsg" class="my_sub" />
      </div>
    </div>
  </div>
</template>
 
<script>
import { deleteRoom } from "@/network/userAll/userAll.js";
// import 'video.js/dist/video-js.css'
 
// import { videoPlayer } from 'vue-video-player'

export default {
  //  components: {
  //   videoPlayer
  // },
  data() {
    return {
      isConnect: false,
      room: {},
      my_ipt: "",
      chat_msg: [
        // {
        //   text:"按吧按吧按吧按吧",
        //   name:"tyh"
        // },
      ],
     playerOptions: {
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '4:3', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: 'application/x-mpegURL', // 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
          // type:'video/mp4',
          // src: 'http://ivi.bupt.edu.cn/hls/cctv1.m3u8'// 视频url地址 
          // src:'http://47.97.214.211/hls/test2.m3u8'
          src:""
        }],
        live:true,
        width: document.documentElement.clientWidth, //播放器宽度
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          // timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        }

      }
    };
  },

  //加载电影资源，建立websocket链接
  mounted: function () {
    // this.room = this.$route.params.room;
    // this.$refs.video.src = this.room.movie.src;
    this.playerOptions.sources[0].src='/hls/test2.m3u8'
    this.initWebsocket();
  },

  methods: {
    //解散房间
    delRoom(roomId) {
      deleteRoom(roomId).then((res) => {
        if (!res.data.success) return alert(res.data.Msg);
        //通知正在房间的人房间解散
        this.websocket.send(
        JSON.stringify({
         msg:`房间已被${this.$store.state.user.userName}解散，即将返回首页!`
        })
      );
        // alert(res.data.Msg + "即将返回首页");
        // this.isConnect = false;
        // this.websocket.close();
        // this.$router.push("/user");
      });
    },

    //退出房间
    goHome() {
      this.isConnect = false;
      this.websocket.close();
      this.$router.push("/user");
    },

    //聊天
    subMsg() {
      if (!sessionStorage.getItem('userName')) return alert("请先登录！");
      if(!this.my_ipt) return alert("发送内容不能为空哟~")
      this.websocket.send(
        JSON.stringify({
          text: this.my_ipt,
          // name: this.$store.state.user.userName,
          name:sessionStorage.getItem('userName'),
        })
      );
      this.my_ipt = "";
    },

    //建立websocket链接
    initWebsocket() {
      let url = `wss://47.97.214.211/chat/${this.room.roomId}`;
      if ("WebSocket" in window && !this.isConnect) {
        this.websocket = new WebSocket(url);
        this.isConnect = true;
      } else {
        alert(" Not support websocket");
      }

      //接收到消息的回调方法
      this.websocket.onmessage = (event) => {
        let data = JSON.parse(event.data);
        if (!data.msg) return this.chat_msg.push(data);
        else {
          alert(data.msg);
          this.isConnect = false;
          this.websocket.close();
          this.$router.push("/user");
        }
      };

      //连接关闭的回调方法
      this.websocket.onclose = function () {
        console.log("WebSocket连接关闭");
      };

      //连接发生错误的回调方法
      this.websocket.onerror = function () {
        if (this.connect) this.websocket = new WebSocket(url);
      };
      //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
      window.onbeforeunload = function () {
        this.websocket.close();
      };

      this.$router.beforeEach((to, from, next) => {
        this.websocket.close();
        next();
      });
    },
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
  width: 100%;
  max-height: 250px;
}
#welcome {
  padding: 10px;
  line-height: 25px;
  /* text-align: center; */
}
.operate {
  display: flex;
  justify-content: flex-end;
}
.operate_box {
  margin: 0 10px;
  padding: 3px 5px;
  border-radius: 5px;
  background-color: rgb(104, 200, 215);
  font-size: 12px;
  cursor: pointer;
}
.chat_my {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  padding: 10px;
  justify-content: space-around;
  background-color: rgb(36,49,84);

}
.my_text {
  line-height: 30px;
  width: 70vw;
  border-radius: 15px;
  border: none;
  padding: 0 10px;
}
.my_sub {
  line-height: 30px;
  border: none;
  border-radius: 15px;
  padding: 0 15px;
  background-color: rgb(104, 200, 215);
  color: white;
}

.chat_msg {
  padding: 0 10px;
  height: calc(100vh - 250px - 90px);
  overflow-y: scroll;
}
.item_name {
  line-height: 20px;
}
.item_text {
  background-color: rgb(145, 120, 145);
  display: inline-block;
  line-height: 28px;
  letter-spacing: 1px;
  padding: 0 8px;
  border-radius: 14px;
  padding: 0 10px;
  position: relative;
  margin-top: 5px;
}
.item_text::before {
  content: "";
  position: absolute;
  left: 8px;
  top: -10px;
  border: 6px solid transparent;
  border-bottom: 6px solid rgb(145, 120, 145);
}
</style>