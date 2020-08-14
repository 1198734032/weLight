<template>
  <div class="login">
    <login @login="login"></login>
  </div>
</template>

<style scoped>
</style>

<script>
// import { setCookie, getCookie } from "../../assets/js/cookie.js";
import { adminLogin } from "@/network/adminLogin/adminLogin.js";

import login from "@/components/login/login.vue";
export default {
  components: {
    login,
  },
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    login(name, psw) {
      //设置用户名密码
      this.userName = name;
      this.password = psw;

      //将要传递的参数
      let data = {
        adminName: this.userName,
        password: this.password,
      };
      
      // 发送请求
      adminLogin(data).then((res) => {
        if (res.data.success) {
          //设置session
           this.$store.commit('setSession','admin');
          return this.$router.push("/admin/adminHome").catch(() => {});

        } else {
          return alert(res.data.Msg + "，请重新输入");
        }
      })
      .catch(err=>{
        console.log(err);
      })
    },
  },

  //   login(data)
  //     .then((res) => {
  //        console.log(res);
  //       if (res.data.success) {

  //         return alert(res.data.Msg);
  //       } else {
  //         return alert(res.data.Msg + "，请重新输入");
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // },
};
</script>