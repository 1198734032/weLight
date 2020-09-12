<template>
  <div class="login">
    <img src="@/assets/img/电影.png" alt />
    <!-- <div class="login-wrap" v-show="showLogin"> -->
    <div class="login_wrap">
      <h3>登录</h3>
      <!-- <p v-show="showTishi">{{tishi}}</p> -->
      <input type="text" placeholder="请输入用户名" v-model="userName" />
      <input type="password" placeholder="请输入密码" v-model="password" />
      <button @click="btnLogin">登录</button>
      <span @click="ToRegister">没有账号？马上注册</span>
    </div>

    <!-- <div class="register-wrap" v-show="showRegister"></div> -->
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    btnLogin() {
      //校验是否有输入
      if (this.userName == "" || this.password == "")
        return alert("请输入用户名和密码！");
        
      //触发父组件的登录(login)事件，并传递参数给父组件
      this.$emit("login", this.userName, this.password);
    },

    ToRegister() {
      this.$router.replace("/register").catch(() => {});
    },
  },
};
</script>
 
<style scoped>
.login {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
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