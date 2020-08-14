<template>
  <div class="user_create">
    <div class="create">
      <div :class="[isActive=='private'?'active':'']" @click="change_type('private')">创建私密房间</div>
      <div :class="[isActive=='public'?'active':'']" @click="change_type('public')">创建公共房间</div>
    </div>
    <div class="form">
      <div>
        <div>请设置房间名字：</div>
        <input type="text" v-model="forms.roomName" />
      </div>
      <div v-if="isActive=='private'">
        <div>请设置房间密码：</div>
        <input type="password" v-model="forms.password" />
      </div>
      <input class="btn" type="button" @click="showMovie" value="点击选择影片" />
      <div id="show" v-if="show">
        <div
          v-for="item in movieList"
          @click="chooseMovie(item.movieId)"
          :key="item.movieId"
          :class="['container',forms.movieId==item.movieId?'movie_active':'']"
        >
          <div class="movie_name">{{item.movieName}}</div>
        </div>
      </div>
      <input class="btn" type="button" @click="submit" value="确认创建" />
    </div>
  </div>
</template>
 
<script>
import { getMovie } from "@/network/getMovie/getMovie.js";
import { createRoom } from "@/network/userAll/userAll.js";
export default {
  data() {
    return {
      isActive: "private",
      movieList: [
        // {
        //   movieId: "1",
        //   src: "xxx",
        //   movieName: "影片3",
        // },
        // {
        //   movieId: "2",
        //   src: "xxx",
        //   movieName: "影片1",
        // },
        // {
        //   movieId: "3",
        //   src: "xxx",
        //   movieName: "影片2",
        // },
      ],
      show: false,
      forms: {
        roomName: "",
        movieId: "2",
        password: "",
        type: "private",
      },
    };
  },

  methods: {
    //点击改变房间类型
    change_type(type) {
      this.isActive = type;
      this.forms.type = type;
      this.forms.roomName = "";
      this.forms.password = "";
      // if (this.show) this.show = false;
    },

    //展示电影
    showMovie() {
      getMovie().then((res) => {
        if (!res.data.success) return alert("影片加载出错啦！");
        this.movieList = res.data.data.movieList;
        this.$forceUpdate();
      });
      if (!this.show) this.show = true;
    },

    //选择电影，相应数据变化
    chooseMovie(id) {
      this.forms.movieId = id;
    },

    //确认创建
    submit() {
      let data = {
        roomName: this.forms.roomName,
        movieId: this.forms.movieId,
        password: this.forms.password,
        type: this.forms.type,
      };

      createRoom(this.forms.type, data)
      .then((res) =>{
        if(!res.data.success) return alert(res.data.Msg)
        this.$router.push({path:"/watchPage",query:{
            src:res.data.data.room.movie.src
        }}).catch(() => {});


        // alert("创建成功！")
      });

      this.forms.roomName = "";
      this.forms.password = "";
      this.show = false;
    },
  },
};
</script>
 
<style scoped>
.user_create {
  width: 100vw;
  color: rgb(202, 199, 199);
}
.create {
  cursor: pointer;
  display: flex;
  line-height: 50px;
  font-size: 20px;
  text-align: center;
}
.active {
  color: white;
  border-bottom: 1px solid white;
}
.create > div {
  flex: 1;
}
.form {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 60vw;
  margin-top: 30px;
  border: 1px solid rgb(209, 206, 206);
  padding: 20px;
}
.form input {
  width: 100%;
  border: 1px solid rgb(209, 206, 206);
  line-height: 30px;
  border-radius: 5px;
  margin: 8px 0 15px 0;
}
.btn {
  background-color: rgb(3, 174, 200);
  color: white;
}

.container {
  width: 100%;
  background-color: rgb(3, 174, 200);
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}
.movie_active {
  font-size: 25px;
  line-height: 50px;
  border: 1px solid white;
  color: white;
}
#show {
  padding: 0 0 20px 0;
}
</style>