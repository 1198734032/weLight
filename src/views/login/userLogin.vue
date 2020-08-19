<template>
  <div class="login">
    <login @login="login"></login>
  </div>
</template>

<style scoped>
</style>

<script>
// import { setCookie, getCookie } from "../../assets/js/cookie.js";
import { userLogin } from "@/network/userLogin/userLogin.js";
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
        userName: this.userName,
        password: this.password,
      };
      console.log(data);

      // 发送请求
      userLogin(data)
        .then((res) => {
          if (res.data.success) {
          this.$store.commit('setSession','user');
          this.$store.commit('setUser',res.data.data.user)
          return this.$router.push("/user/userHome").catch(() => {});
          } else {
            return alert(res.data.Msg + "，请重新输入");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },

};
</script>