<template>
  <div class="index">
    <div id="text">欢迎登录</div>
    <button @click="userLogin">我是用户</button>
    <button @click="adminLogin">我是管理员</button>
    <button @click="register">我要注册</button>
  </div>
</template>
 
<script>
export default {
  methods: {
    userLogin() {
      this.$router.push("/userLogin").catch(() => {});
    },
    adminLogin() {
      this.$router.push("/adminLogin").catch(() => {});
    },
    register() {
      this.$router.push("/register").catch(() => {});
    },
  },
};
</script>
 
<style scoped>
.index {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: white;
}
#text {
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 6px;
  color: black;
}
.index button {
  width: 40vw;
  padding: 4vw;
  margin-top: 8vh;
  border-radius: 5px;
  border: none;
  background-color: #41b883;
  color: white;
}
</style>