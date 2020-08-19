<template>
  <div class="watch_page">
    <video width="100%" controls id="video">
      <source ref="video" />
    </video>
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

export default {
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
    };
  },

  //加载电影资源，建立websocket链接
  mounted: function () {
    this.room = this.$route.params.room;
    this.$refs.video.src = this.room.movie.src;
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
      if (!this.$store.state.user.userName) return alert("请先登录！");
      this.websocket.send(
        JSON.stringify({
          text: this.my_ipt,
          name: this.$store.state.user.userName,
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
.chat_box {
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