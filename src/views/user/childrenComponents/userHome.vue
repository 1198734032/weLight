<template>
  <div class="user_home">
    <div class="title">正在放映的房间</div>
    <div v-for="item in roomList" :key="item.Id" class="rooms">
      <div class="left">
        <div>房号:{{item.roomId}}</div>
        <div>房间名字:{{item.roomName}}</div>
        <div>正在放映: {{item.movie.movieName}}</div>
        <input
          class="psw"
          v-model="item.ipt"
          v-if="item.type=='private' "
          type="password"
          placeholder="私密房间，点击输入密码"
        />
      </div>
      <div class="right" @click="join(item)">我要加入</div>

      <!-- <div class="right" @click="join(item.roomId,item.type)">我要加入</div> -->
    </div>
  </div>
</template>
 
<script>
import {
  getRoom,
  enterPublic,
  enterprivate,
} from "@/network/userAll/userAll.js";
export default {
  data() {
    return {
      password: "",
      roomList: [
        // {
        //   roomId: "19",
        //   movieName: "暂无信息",
        //   src: "xx",
        //   type: "公共",
        // },
        // {
        //   roomId: "19",
        //   movieName: "暂无信息",
        //   src: "xx",
        //   type: "私密",
        // },
      ],
    };
  },

  methods: {
    //进入房间
    // join(id, type) {
    join(item) {
      // 检测房间类型
      if (item.type === "private") {
        if (!item.ipt) return alert("请输入密码");
        enterprivate(item.roomId, item.ipt).then((res) => {
          if (!res.data.success) return alert(res.data.Msg);
          // alert("加入房间成功啦");
          this.$router
            .push({
              name: "watchPage",
              params: {
                room: res.data.data.room,
              },
            })
            .catch(() => {});
          this.password = "";
        });
      } else {
        enterPublic(item.roomId).then((res) => {
          if (!res.data.success) return alert(res.data.Msg);
          this.$router
            .push({
              name: "watchPage",
              params: {
                room: res.data.data.room,
              },
            })
            .catch(() => {});
        });
      }
    },
    /** */
  },

  // 加载时获取房间列表
  activated() {
    getRoom().then((res) => {
      if (!res.data.success) return alert("房间加载出错啦~");
      this.roomList = res.data.data.roomList;
    });
  },
  /** */
};
</script>
 
<style scoped>
.user_home {
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
}
.title {
  padding: 10px 15px;
  background-color: rgb(104, 200, 215);
  border-radius: 0 0 8px 8px;
}
.rooms {
  margin: 15px 0;
  width: 60vw;
  padding: 25px 90px 15px 20px;
  /* background-color: rgb(104,200,215); */
  background: linear-gradient(to right, rgb(3, 99, 155), rgb(3, 174, 200));
  border-radius: 8px;
  position: relative;
  line-height: 25px;
}
.psw {
  border: 0.8px solid black;
  line-height: 30px;
  border-radius: 5px;
  width: 80%;
  padding: 0 5px;
  margin-top: 5px;
  opacity: 0.7;
}
.right {
  position: absolute;
  top: 40%;
  right: 10px;
  padding: 2px;
  border-radius: 2px;
  background-color: rgb(104, 200, 215);
  border: 1px solid white;
  cursor: pointer;
}
</style>