<template>
  <div class="adminHome">
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
        //   movieId: 1,
        //   src: "xxx",
        //   movieName: "alabalalasealabalalasealabalalasealabalalasealabalalasealabalalasealabalalasealabalalase",
        // },
        // {
        //   movieId: 10,
        //   src: "xxx",
        //   movieName: "sdjfleifjg",
        // },
      ],
    };
  },
  methods: {
    del(id) {
      delMovie(id).then((res) => {
        console.log(res);

        if (!res.data.success) return aler("出错啦~");
        getMovie().then((res) => {
          this.movieList = res.data.movieList;
          this.$forceUpdate();
        });
        alert(res.data.Msg);
      });
    },

    /** */
  },
//   created() {
//     getMovie().then((res) => {
//       console.log(res);

//       if (!res.data.success) return alert("出错啦！");
//       this.movieList = res.data.movieList;
//     });
//   },
  /** */
};
</script>
 
<style scoped>
@import "~@/assets/css/adminTabbar/iconfont.css";
.adminHome {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.container {
  margin: 5vw;
  width: 50vw;
  padding: 30px 40px 30px 30px;
  background-color: rgb(235, 128, 226);
  color: white;
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
}
</style>