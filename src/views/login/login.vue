<template>
  <div class="login">
    <img src="../../assets/img/电影.png" alt />
    <div class="login-wrap" v-show="showLogin">
      <h3>登录</h3>
      <p v-show="showTishi">{{tishi}}</p>
      <input type="text" placeholder="请输入用户名" v-model="userName" />
      <input type="password" placeholder="请输入密码" v-model="password" />
      <button v-on:click="btnLogin">登录</button>
      <span v-on:click="ToRegister">没有账号？马上注册</span>
    </div>

    <div class="register-wrap" v-show="showRegister"></div>
  </div>
</template>

<style scoped>
.login {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img {
  margin: 30px;
  text-align: center;
}
.login-wrap {
  text-align: center;
}
input {
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  margin-bottom: 10px;
  outline: none;
  border: 1px solid #888;
  padding: 10px;
  box-sizing: border-box;
}
p {
  color: red;
}
button {
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  border: none;
  background-color: #41b883;
  color: #fff;
  font-size: 16px;
  margin-bottom: 5px;
}
span {
  cursor: pointer;
}
span:hover {
  color: #41b883;
}
</style>

<script>
import { setCookie, getCookie } from "../../assets/js/cookie.js";
import { login } from "@/network/login/login.js";
export default {
  data() {
    return {
      showLogin: true,
      showRegister: false,
      showTishi: false,
      tishi: "",
      userName: "",
      password: "",
      newUsername: "",
      newPassword: "",
    };
  },
  mounted() {
    /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
    if (getCookie("username")) {
      this.$router.push("/home");
    }
  },
  methods: {
    ToRegister() {
      this.showRegister = true;
      this.showLogin = false;
    },
    ToLogin() {
      this.showRegister = false;
      this.showLogin = true;
    },
    btnLogin() {
      if (this.userName == "" || this.password == "")
        return alert("请输入用户名和密码！");
      let data = {
        // userName: this.userName,
        adminName:this.userName,
        password: this.password,
      };

      login(data)
        .then((res) => {
           console.log(res);          
          if (res.data.success) {
           
            
            return alert(res.data.Msg);
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