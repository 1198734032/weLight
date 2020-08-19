<template>
  <div class="adminHome">
    <div class="title">所有影片</div>
    <div v-for="item in movieList" :key="item.movieId" class="container">
      <div class="movie_name">{{item.movieName}}</div>
      <div class="del" @click="del(item.movieId)">
        <span class="iconfont icon-lajitong"></span>
      </div>
    </div>
  </div>
</template>
 
<script>
import { getMovie } from "@/network/getMovie/getMovie.js";
import { delMovie } from "@/network/adminAll/adminAll.js";
export default {
  data() {
    return {
      movieList: [
        // {
        //   movieId: "999",
        //   src: "xxx",
        //   movieName: "暂无影片信息",
        // }
      ],
    };
  },
  methods: {
    //管理员删除影片
    del(id) {
      delMovie(id)
        .then((res) => {
          console.log(res);
          if (!res.data.success) return alert("正在放映，不能删~~");
          getMovie().then((res1) => {
            this.movieList = res1.data.data.movieList;
            this.$forceUpdate();
          });
         alert(res.data.Msg);
        })
        .catch((err) => {
          console.log(err);
        });
          
    },

  },

  // 加载首页的电影信息
  activated() {
    getMovie().then((res) => {
      console.log(res);
      if (!res.data.success) return alert("影片加载出错啦！");
      this.movieList = res.data.data.movieList;
      this.$forceUpdate();
    });
  },
};
</script>
 
<style scoped>
@import "~@/assets/css/adminTabbar/iconfont.css";
.title {
  padding: 8px 20px;
  background-color: rgb(104,200,215);
  border-radius: 0 0 5px 5px;
}
.adminHome {
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
}
.container {
  margin: 5vw;
  width: 50vw;
  padding: 30px 40px 30px 15px;
  background-color: rgb(104,200,215);
  position: relative;
  border-radius: 8px;
}
.movie_name {
  display: flex;
  word-break: break-all;
}
.del {
  position: absolute;
  right: 15px;
  top: 40%;
  cursor: pointer;
}
</style>